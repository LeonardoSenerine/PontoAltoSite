import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Só as variáveis de ambiente, sem instalar os tipos completos do Node.
declare const process: { env: Record<string, string | undefined> }

/** Domínio público atual. Ao trocar, atualize também public/robots.txt e public/sitemap.xml. */
const DEFAULT_SITE_URL = 'https://ponto-alto-site-omega.vercel.app'

/**
 * Domínio usado nas tags de compartilhamento (capa do link).
 * A variável SITE_URL, se definida no build, tem prioridade.
 */
function siteUrl() {
  return (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
}

const siteUrlPlugin = (): Plugin => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replace(/__SITE_URL__/g, siteUrl()),
})

export default defineConfig({
  plugins: [react(), siteUrlPlugin()],
  define: { __SITE_URL__: JSON.stringify(siteUrl()) },
})
