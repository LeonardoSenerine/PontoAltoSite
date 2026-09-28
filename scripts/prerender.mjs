// Gera o HTML estático de cada página depois do `vite build`,
// para buscadores e prévias de link lerem o conteúdo sem executar JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const ssrDir = new URL('../dist-ssr/', import.meta.url)
const { render } = await import(new URL('entry-server.js', ssrDir).href)

const template = await readFile(dist + 'index.html', 'utf8')
const site = template.match(/<link rel="canonical" href="([^"]+)\/"/)?.[1] ?? ''

const PAGES = [
  { path: '/', file: 'index.html' },
  { path: '/privacidade', file: 'privacidade.html', title: 'Política de Privacidade' },
  { path: '/cookies', file: 'cookies.html', title: 'Política de Cookies' },
  { path: '/404', file: '404.html', title: 'Página não encontrada', noindex: true },
]

for (const page of PAGES) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`)

  if (page.title) {
    const title = `${page.title} | Ponto Alto – Clube da Música`
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(/(property="og:title" content=")[^"]*/, `$1${title}`)
      .replace(/(name="twitter:title" content=")[^"]*/, `$1${title}`)
  }
  if (page.noindex) {
    html = html
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
      .replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <meta name="robots" content="noindex" />')
  } else if (page.path !== '/') {
    html = html
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${site}${page.path}`)
      .replace(/(property="og:url" content=")[^"]*/, `$1${site}${page.path}`)
  }

  await writeFile(dist + page.file, html)
  console.log(`pré-renderizado: ${page.path} -> dist/${page.file}`)
}

await rm(ssrDir, { recursive: true, force: true })
