"""Comprime os vídeos do site e gera uma capa (poster) .jpg para cada um.

Uso: python scripts/compress-videos.py  (precisa de: pip install imageio-ffmpeg)

Lê os originais em alta da raiz do projeto (arquivos SaveClip.App_*, fora do git)
e grava as versões leves em public/media/video-N.mp4 + video-N.jpg.
Pare o `npm run dev` antes: no Windows ele trava os arquivos abertos.
"""
import subprocess
from pathlib import Path

import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
ROOT = Path(__file__).resolve().parent.parent
MEDIA = ROOT / "public" / "media"

# video-N do site -> prefixo do arquivo original na raiz
SOURCES = {
    "video-2": "SaveClip.App_AQNXVW",
    "video-3": "SaveClip.App_AQO-ZK",
    "video-4": "SaveClip.App_AQPv30",
    "video-5": "SaveClip.App_AQNGl1",
    "video-6": "SaveClip.App_AQML8p",
}


def run(*args: str) -> None:
    subprocess.run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y", *args], check=True)


for name, prefix in SOURCES.items():
    src = next(ROOT.glob(f"{prefix}*.mp4"))
    out = MEDIA / f"{name}.mp4"
    run(
        "-i", str(src),
        "-vf", "scale='min(540,iw)':-2",  # nunca amplia
        "-c:v", "libx264", "-preset", "slow", "-crf", "28", "-profile:v", "main", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "96k", "-ac", "2",
        "-movflags", "+faststart",
        str(out),
    )
    run("-ss", "1", "-i", str(out), "-frames:v", "1", "-q:v", "5", str(out.with_suffix(".jpg")))
    print(f"{name}: {src.stat().st_size / 1e6:.1f} MB -> {out.stat().st_size / 1e6:.1f} MB")
