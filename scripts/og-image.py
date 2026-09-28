"""Gera public/og-image.jpg (1200x630), a capa usada nos links compartilhados.

Uso: python scripts/og-image.py  (precisa do Pillow)
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
MEDIA = ROOT / "public" / "media"
OUT = ROOT / "public" / "og-image.jpg"
FONTS = Path("C:/Windows/Fonts")

W, H = 1200, 630
ORANGE = (243, 154, 30)
INK = (8, 8, 8)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def cover(img: Image.Image, w: int, h: int, y_focus: float = 0.5) -> Image.Image:
    """Recorta a imagem para preencher w x h, como object-fit: cover."""
    scale = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = (img.width - w) // 2
    top = round((img.height - h) * y_focus)
    return img.crop((left, top, left + w, top + h))


# Fundo: salão lotado, escurecido, mais escuro à esquerda pro texto respirar.
bg = cover(Image.open(MEDIA / "show-coberto.jpg").convert("RGB"), W, H, 0.55)
bg = Image.blend(bg, Image.new("RGB", (W, H), INK), 0.45)
shade = Image.new("L", (W, 1))
for x in range(W):
    shade.putpixel((x, 0), int(235 * max(0.0, 1 - x / (W * 0.75))))
bg.paste(Image.new("RGB", (W, H), INK), (0, 0), shade.resize((W, H)))

# Brilho laranja atrás do disco.
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse((760, 60, 1320, 620), fill=(*ORANGE, 110))
bg.paste(glow.filter(ImageFilter.GaussianBlur(90)), (0, 0), glow.filter(ImageFilter.GaussianBlur(90)))

draw = ImageDraw.Draw(bg)

# Disco de vinil saindo pela direita, com o logo no rótulo.
cx, cy, r = 1060, 330, 250
draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(12, 12, 12))
for rr in range(r - 6, 90, -5):
    tone = 24 if (rr // 5) % 2 else 17
    draw.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), outline=(tone, tone, tone), width=2)
draw.ellipse((cx - 92, cy - 92, cx + 92, cy + 92), fill=ORANGE)
logo = Image.open(MEDIA / "logo.jpg").convert("RGB").resize((168, 168), Image.LANCZOS)
mask = Image.new("L", (168, 168), 0)
ImageDraw.Draw(mask).ellipse((0, 0, 167, 167), fill=255)
bg.paste(logo, (cx - 84, cy - 84), mask)
draw.ellipse((cx - 7, cy - 7, cx + 7, cy + 7), fill=(12, 12, 12))

# Textos.
x = 72
draw.text((x, 92), "CLUBE DA MÚSICA · ITATIBA/SP", font=font("segoeuib.ttf", 26), fill=ORANGE)
draw.text((x, 132), "PONTO", font=font("impact.ttf", 168), fill="white")
draw.text((x, 300), "ALTO", font=font("impact.ttf", 168), fill="white")
dot = font("impact.ttf", 168).getbbox("ALTO")
draw.rectangle((x + dot[2] + 14, 300 + dot[3] - 30, x + dot[2] + 44, 300 + dot[3]), fill=ORANGE)
draw.text((x, 492), "Rock, tributos e música ao vivo", font=font("segoeui.ttf", 34), fill=(230, 230, 230))

# Faixa laranja no rodapé.
draw.rectangle((0, H - 14, W, H), fill=ORANGE)

bg.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(f"ok: {OUT} ({OUT.stat().st_size // 1024} KB)")
