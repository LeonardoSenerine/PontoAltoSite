import LegalLayout from './LegalLayout'
import { openConsent, useConsent } from '../consent'

const LABEL = { all: 'Aceitar todos', essential: 'Só necessários' } as const

export default function Cookies() {
  const consent = useConsent()

  return (
    <LegalLayout
      title="Política de Cookies"
      docTitle="Política de Cookies"
      updated="28 de setembro de 2026"
      intro={
        <p>
          O que o site do Ponto Alto guarda no seu navegador, o que vem de serviços de fora e como você
          muda sua escolha quando quiser.
        </p>
      }
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies e tecnologias parecidas (como o armazenamento local do navegador) são pequenos
        arquivos que um site guarda no seu aparelho para lembrar informações entre uma visita e outra.
      </p>

      <h2>2. O que usamos</h2>
      <div className="legal__table-wrap">
        <table className="legal__table">
          <thead>
            <tr>
              <th>Nome / serviço</th>
              <th>Tipo</th>
              <th>Pra que serve</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>pa-consent</code></td>
              <td>Necessário (armazenamento local)</td>
              <td>Guarda sua escolha sobre cookies, pra não perguntar de novo.</td>
              <td>Até você limpar o navegador</td>
            </tr>
            <tr>
              <td>Google Maps</td>
              <td>Terceiro, opcional</td>
              <td>Mostrar o mapa de como chegar. O Google grava cookies próprios (preferências e segurança).</td>
              <td>Definida pelo Google</td>
            </tr>
            <tr>
              <td>Google Fonts</td>
              <td>Terceiro, necessário</td>
              <td>Carregar as fontes do site. Não grava cookies, mas o Google recebe seu endereço IP.</td>
              <td>–</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Não usamos</strong> cookies de publicidade nem ferramentas de rastreamento de
        visitantes. Os vídeos e fotos ficam hospedados no próprio site e não gravam cookies.
      </p>

      <h2>3. Sua escolha</h2>
      <p>
        No primeiro acesso aparece um aviso com duas opções. Em <strong>Só necessários</strong>, o
        mapa do Google fica desligado (você ainda pode abrir o endereço direto no Google Maps ou no
        Waze). Em <strong>Aceitar todos</strong>, o mapa carrega normalmente.
      </p>
      <div className="legal__consent">
        <span>
          Sua escolha atual: <strong>{consent ? LABEL[consent] : 'nenhuma ainda'}</strong>
        </span>
        <button className="btn" onClick={openConsent}>Mudar preferências</button>
      </div>

      <h2>4. Pelo navegador</h2>
      <p>
        Você também pode apagar ou bloquear cookies nas configurações do seu navegador (Chrome, Safari,
        Firefox, Edge etc.). Se bloquear tudo, algumas partes do site, como o mapa, podem não funcionar.
      </p>

      <p className="legal__see">
        Mais detalhes sobre como tratamos seus dados na <a href="/privacidade">Política de Privacidade</a>.
      </p>
    </LegalLayout>
  )
}
