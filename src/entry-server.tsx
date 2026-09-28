import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { pageFor } from './routes'

/** Usado só no build (scripts/prerender.mjs) para gerar o HTML estático de cada página. */
export function render(pathname: string) {
  const Page = pageFor(pathname)
  return renderToString(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
}
