import LegalLayout from './LegalLayout'
import { CONTACT, whatsLink } from '../data'

export default function Privacy() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      docTitle="Política de Privacidade"
      updated="28 de setembro de 2026"
      intro={
        <p>
          Aqui a gente explica, sem juridiquês desnecessário, quais dados passam pelo site do Ponto
          Alto, pra que servem e como você controla tudo isso, conforme a Lei Geral de Proteção de
          Dados (Lei nº 13.709/2018 – LGPD).
        </p>
      }
    >
      <h2>1. Quem somos</h2>
      <p>
        <strong>Ponto Alto – Clube da Música</strong>, localizado na {CONTACT.address}, {CONTACT.district}.
        Somos os responsáveis (controlador) pelos dados tratados neste site. Para qualquer assunto
        sobre privacidade, fale com a gente pelo WhatsApp{' '}
        <a href={whatsLink('Olá! Tenho uma dúvida sobre privacidade e meus dados.')} target="_blank" rel="noopener">
          {CONTACT.phoneDisplay}
        </a>.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <p>O site não tem cadastro, login nem formulário. Mesmo assim, alguns dados passam por ele:</p>
      <ul>
        <li>
          <strong>Dados de navegação:</strong> o provedor de hospedagem registra informações técnicas
          de acesso, como endereço IP, data e hora, navegador e páginas visitadas.
        </li>
        <li>
          <strong>Sua escolha de cookies:</strong> fica salva no seu próprio navegador, para o aviso
          não aparecer toda vez.
        </li>
        <li>
          <strong>Conversas no WhatsApp:</strong> quando você clica para falar com a gente, abre o
          WhatsApp e passamos a ter seu nome, número e as mensagens que você enviar (por exemplo, para
          comprar ingresso ou entrar na lista).
        </li>
        <li>
          <strong>"Quer tocar no Ponto Alto?":</strong> os dados que a banda preenche não ficam salvos
          no site; eles só entram na mensagem de WhatsApp que a própria banda decide enviar.
        </li>
        <li>
          <strong>Mapa do Google:</strong> se você permitir, o mapa é carregado e o Google recebe dados
          de navegação e grava cookies próprios.
        </li>
      </ul>

      <h2>3. Para que usamos</h2>
      <ul>
        <li>Responder suas mensagens, vender ingressos e organizar listas de nomes dos eventos;</li>
        <li>Mostrar como chegar até a casa;</li>
        <li>Manter o site seguro e funcionando;</li>
        <li>Cumprir obrigações legais, como a guarda de registros de acesso exigida pelo Marco Civil da Internet.</li>
      </ul>

      <h2>4. Bases legais</h2>
      <p>
        Tratamos dados com base no seu <strong>consentimento</strong> (mapa do Google), na{' '}
        <strong>execução de contrato</strong> ou procedimentos preliminares (venda de ingressos e
        listas), no <strong>cumprimento de obrigação legal</strong> (registros de acesso) e no{' '}
        <strong>legítimo interesse</strong> (segurança e funcionamento do site), conforme o art. 7º da LGPD.
      </p>

      <h2>5. Com quem compartilhamos</h2>
      <p>
        Não vendemos nem alugamos seus dados. Eles podem passar por serviços que usamos para o site
        funcionar: o provedor de hospedagem, o <strong>Google</strong> (mapa e fontes do site) e o{' '}
        <strong>WhatsApp/Meta</strong> (nossas conversas). Cada um segue sua própria política de
        privacidade. Também podemos compartilhar dados quando houver ordem judicial ou exigência legal.
      </p>

      <h2>6. Transferência internacional</h2>
      <p>
        Alguns desses serviços armazenam dados em servidores fora do Brasil. Nesses casos, a
        transferência segue as regras do capítulo V da LGPD.
      </p>

      <h2>7. Por quanto tempo guardamos</h2>
      <ul>
        <li>Registros de acesso: pelo menos 6 meses, como exige o Marco Civil da Internet;</li>
        <li>Conversas e listas de eventos: pelo tempo necessário para atender você e organizar o evento;</li>
        <li>Escolha de cookies: até você limpar os dados do navegador ou mudar sua escolha.</li>
      </ul>

      <h2>8. Fotos e vídeos dos eventos</h2>
      <p>
        Nos eventos podem ser feitos fotos e vídeos do público para divulgação no site e nas redes do
        Ponto Alto. Se você aparece em algum registro e quer que ele seja removido, chama a gente no
        WhatsApp que a gente tira.
      </p>

      <h2>9. Seus direitos</h2>
      <p>Pelo art. 18 da LGPD, você pode pedir a qualquer momento:</p>
      <ul>
        <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>Portabilidade dos dados;</li>
        <li>Informação sobre com quem compartilhamos;</li>
        <li>Revogação do consentimento.</li>
      </ul>
      <p>
        É só pedir pelo WhatsApp. Se achar que seu pedido não foi atendido, você também pode procurar a
        Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>10. Segurança</h2>
      <p>
        O site usa conexão criptografada (HTTPS) e adotamos medidas razoáveis para proteger os dados.
        Nenhum sistema é 100% invulnerável, mas levamos isso a sério.
      </p>

      <h2>11. Menores de idade</h2>
      <p>
        O site não é direcionado a menores de 18 anos e não coletamos dados deles intencionalmente.
      </p>

      <h2>12. Mudanças nesta política</h2>
      <p>
        Podemos atualizar esta política quando algo mudar no site. A data da última atualização fica
        sempre no topo da página.
      </p>

      <p className="legal__see">
        Veja também a <a href="/cookies">Política de Cookies</a>.
      </p>
    </LegalLayout>
  )
}
