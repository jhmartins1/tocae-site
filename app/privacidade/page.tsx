import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, FileText, Mail, ShieldCheck } from 'lucide-react';
import { privacyDetails, privacyIsDraft } from './privacy-details';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Tocaê',
  description: 'Saiba como o aplicativo Tocaê trata os dados de alunos e professores, quais serviços utiliza e como exercer seus direitos de privacidade.',
  robots: { index: !privacyIsDraft, follow: true },
};

const sections = [
  ['sobre', 'Sobre esta política'],
  ['dados', 'Dados pessoais utilizados'],
  ['finalidades', 'Por que usamos os dados'],
  ['compartilhamento', 'Compartilhamento e serviços'],
  ['dispositivo', 'Armazenamento e permissões'],
  ['seguranca', 'Segurança e armazenamento'],
  ['retencao', 'Retenção dos dados'],
  ['exclusao', 'Exclusão da conta'],
  ['direitos', 'Seus direitos'],
  ['menores', 'Crianças e adolescentes'],
  ['alteracoes', 'Alterações desta política'],
  ['contato', 'Contato de privacidade'],
] as const;

function Pending({ children }: { children: React.ReactNode }) {
  return <p className={styles.pending}><strong>Informação em confirmação:</strong> {children}</p>;
}

export default function PrivacyPage() {
  const email = privacyDetails.email;
  const deletionMail = email
    ? `mailto:${email}?subject=${encodeURIComponent('Tocaê — Solicitação de exclusão de conta')}&body=${encodeURIComponent('Olá! Quero solicitar a exclusão da minha conta e dos dados associados no Tocaê.\n\nNome: \nE-mail usado na conta: \nTipo de conta (aluno ou professor): \n')}`
    : null;

  return (
    <>
      <a className="skipLink" href="#politica">Pular para a política de privacidade</a>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <Link className="brand" href="/" aria-label="Tocaê — página inicial">
            <Image src="/logo-tocae.png" alt="" width={48} height={48} priority />
            <span className="brandWords">Tocaê<span>ESCOLA DE MÚSICA</span></span>
          </Link>
          <Link className={styles.backLink} href="/"><ArrowLeft size={16} /> Voltar ao início</Link>
        </div>
      </header>

      <main className={styles.page} id="politica">
        <section className={styles.hero} aria-labelledby="privacy-title">
          <div className="container">
            <span className={styles.eyebrow}><ShieldCheck size={17} /> TOCAÊ · PRIVACIDADE</span>
            <h1 id="privacy-title">Política de<br /><em>Privacidade.</em></h1>
            <p>Transparência sobre os seus dados, do cadastro ao próximo acorde.</p>
            <div className={styles.meta}><span><FileText size={15} /> Aplicativo Tocaê</span><span>Atualização: <time dateTime="2026-09-16">16 de setembro de 2026</time></span></div>
          </div>
          <span className={styles.heroDecoration} aria-hidden="true">✳</span>
        </section>

        <div className={`container ${styles.layout}`}>
          <aside className={styles.sidebar}>
            <nav aria-label="Nesta política">
              <span className={styles.navTitle}>NESTA POLÍTICA</span>
              <ol>{sections.map(([id, title], index) => <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{title}</a></li>)}</ol>
            </nav>
            <a className={styles.sidebarContact} href="#contato"><Mail size={18} /><span>Fale sobre seus dados<ArrowUpRight size={15} /></span></a>
          </aside>

          <article className={styles.article}>
            {privacyIsDraft && <div className={styles.draftNotice} role="note"><strong>Versão em revisão</strong><p>O texto abaixo foi preparado com as informações disponíveis sobre o Tocaê. Os pontos sinalizados ainda precisam ser confirmados pelo responsável pelo aplicativo. Esta versão não está pronta para envio ao Google Play.</p></div>}

            <section id="sobre">
              <span className={styles.sectionNumber}>01 / SOBRE ESTA POLÍTICA</span>
              <h2>Sua música. Seus dados.</h2>
              <p>Esta Política de Privacidade se aplica ao aplicativo <strong>Tocaê</strong>, uma plataforma de gerenciamento e agendamento de aulas particulares de música que conecta alunos e professores.</p>
              <p>Ela descreve os dados utilizados para criar perfis, consultar professores e disponibilidades, organizar aulas e facilitar o contato entre as pessoas envolvidas nos agendamentos.</p>
              {privacyDetails.responsible ? <p>O responsável pelo tratamento de dados pessoais do Tocaê é <strong>{privacyDetails.responsible}</strong>. As solicitações relacionadas a esta política podem ser encaminhadas pelo <a href="#contato">canal de privacidade</a>.</p> : <Pending>o nome da pessoa ou empresa responsável pelo tratamento dos dados e o contato de privacidade.</Pending>}
            </section>

            <section id="dados">
              <span className={styles.sectionNumber}>02 / DADOS PESSOAIS</span>
              <h2>Quais informações são utilizadas</h2>
              <p>Os dados variam conforme o tipo de conta — aluno ou professor — e os recursos utilizados.</p>
              <dl className={styles.dataList}>
                <div><dt>Conta e identificação</dt><dd>Informações fornecidas no cadastro e no login, como nome, e-mail e identificador da conta. O acesso é gerenciado pelo Clerk, com opção de autenticação pelo Google.</dd></div>
                <div><dt>Perfil musical</dt><dd>Tipo de conta, instrumentos estudados ou ensinados, nível em cada instrumento e informação sobre possuir ou não o instrumento em casa.</dd></div>
                <div><dt>Endereço das aulas</dt><dd>Endereço informado pelo aluno para a realização das aulas presenciais e sua consulta pelo professor responsável.</dd></div>
                <div><dt>Disponibilidade e agendamentos</dt><dd>Horários cadastrados pelo professor, datas e horários das aulas, aluno e professor envolvidos, instrumento e informações de remarcação e cancelamento.</dd></div>
                <div><dt>Contato</dt><dd>Informações de contato utilizadas para permitir a comunicação entre aluno e professor pelo WhatsApp.</dd></div>
                <div><dt>Sessão e armazenamento local</dt><dd>Dados necessários para manter a autenticação e o estado do aplicativo no dispositivo, conforme descrito na seção de <a href="#dispositivo">armazenamento e permissões</a>.</dd></div>
              </dl>
              {privacyDetails.advertisingAndAnalytics ? <p>{privacyDetails.advertisingAndAnalytics}</p> : <Pending>a existência de anúncios, ferramentas de análise de uso, relatórios de falhas e outros registros técnicos coletados pelo aplicativo ou pelos serviços integrados.</Pending>}
            </section>

            <section id="finalidades">
              <span className={styles.sectionNumber}>03 / FINALIDADES</span>
              <h2>Por que usamos esses dados</h2>
              <ul>
                <li>Criar e autenticar contas de alunos e professores.</li>
                <li>Organizar perfis, instrumentos, níveis de experiência e necessidades das aulas.</li>
                <li>Exibir professores e horários disponíveis.</li>
                <li>Agendar, remarcar, cancelar e acompanhar aulas.</li>
                <li>Permitir que o professor consulte o endereço da aula e saiba se precisa levar um instrumento.</li>
                <li>Facilitar o contato entre aluno e professor sobre as aulas.</li>
              </ul>
              <p>O tratamento necessário à prestação do serviço deve estar relacionado à execução do serviço solicitado pelo usuário. Outras finalidades, quando existentes, precisam de fundamento adequado na legislação aplicável. A leitura desta política não substitui uma solicitação específica de consentimento quando ela for necessária.</p>
            </section>

            <section id="compartilhamento">
              <span className={styles.sectionNumber}>04 / COMPARTILHAMENTO</span>
              <h2>Com quem os dados são compartilhados</h2>
              <h3>Entre alunos e professores</h3>
              <p>Alunos podem visualizar os professores disponíveis e as informações necessárias à escolha e ao agendamento. Professores podem consultar informações dos alunos e das aulas agendadas, incluindo o endereço, o instrumento, o nível e a informação sobre ter o instrumento em casa. O contato pelo WhatsApp permite que as partes se comuniquem sobre as aulas.</p>
              <h3>Serviços utilizados pelo Tocaê</h3>
              <dl className={styles.services}>
                <div><dt>Clerk e Google Sign-In</dt><dd>Autenticação e gerenciamento de contas. Ao escolher entrar com o Google, os dados autorizados no fluxo de login são utilizados para identificar a conta no Tocaê.</dd></div>
                <div><dt>Supabase</dt><dd>Infraestrutura de banco de dados PostgreSQL e armazenamento dos dados utilizados pelo serviço.</dd></div>
                <div><dt>Render</dt><dd>Hospedagem da API responsável pelo processamento das operações do aplicativo.</dd></div>
                <div><dt>Expo / EAS</dt><dd>Ferramentas de desenvolvimento e geração das versões do aplicativo. Seu uso para gerar o app, por si só, não significa que os dados dos perfis sejam enviados a esse serviço.</dd></div>
              </dl>
              <h3>WhatsApp e aplicativos de mapas</h3>
              <p>Quando você escolhe abrir uma conversa no WhatsApp ou consultar o endereço em um mapa, as informações necessárias à ação, como o contato ou o endereço, são encaminhadas ao serviço escolhido. O uso desses aplicativos externos está sujeito às suas próprias políticas de privacidade.</p>
              <p>Os provedores de infraestrutura podem operar em outros países. A localização efetiva do armazenamento e do processamento depende das regiões e configurações contratadas para o Tocaê.</p>
            </section>

            <section id="dispositivo">
              <span className={styles.sectionNumber}>05 / NO SEU DISPOSITIVO</span>
              <h2>Armazenamento local e permissões</h2>
              <p>O aplicativo utiliza Async Storage e Expo Secure Store para armazenamento local. O Secure Store oferece armazenamento protegido pelo sistema operacional; o Async Storage é um mecanismo diferente e não deve ser interpretado como armazenamento criptografado de todos os dados do aplicativo.</p>
              <p>Remover o aplicativo pode apagar dados locais, mas <strong>não equivale a excluir a conta nem os dados mantidos nos servidores</strong>.</p>
              {privacyDetails.location ? <p>{privacyDetails.location}</p> : <Pending>se o aplicativo utiliza apenas o endereço digitado ou também solicita localização do dispositivo, e quais outras permissões são efetivamente utilizadas na versão distribuída.</Pending>}
            </section>

            <section id="seguranca">
              <span className={styles.sectionNumber}>06 / PROTEÇÃO</span>
              <h2>Segurança das informações</h2>
              <p>A autenticação do Tocaê é gerenciada pelo Clerk. O acesso à API e aos dados de aulas depende da identificação da conta e do seu perfil de uso.</p>
              {privacyDetails.security ? <p>{privacyDetails.security}</p> : <Pending>as medidas efetivamente adotadas na versão de produção, incluindo HTTPS nas conexões com a API, controles de acesso entre alunos e professores e tratamento dos registros técnicos. O uso dos serviços listados não comprova, isoladamente, essas configurações.</Pending>}
              <p>Não compartilhe senhas, códigos de acesso ou tokens de autenticação em pedidos de suporte. Se identificar uso indevido da sua conta, procure o <a href="#contato">contato de privacidade</a>.</p>
            </section>

            <section id="retencao">
              <span className={styles.sectionNumber}>07 / RETENÇÃO</span>
              <h2>Por quanto tempo os dados ficam armazenados</h2>
              {privacyDetails.retention ? <p>{privacyDetails.retention}</p> : <Pending>os prazos de conservação dos dados da conta, dos agendamentos, dos registros técnicos e das cópias de segurança, inclusive após um pedido de exclusão, além de eventuais dados retidos por obrigação legal e o motivo dessa retenção.</Pending>}
            </section>

            <section id="exclusao" className={styles.deletionSection}>
              <span className={styles.sectionNumber}>08 / EXCLUSÃO DA CONTA</span>
              <h2>Excluir sua conta do Tocaê</h2>
              <p>A exclusão da conta é diferente de sair do aplicativo, desinstalá-lo ou cancelar uma aula. O pedido deve abranger a conta e os dados pessoais associados a ela, observadas eventuais hipóteses de retenção legal informadas nesta política.</p>
              {privacyDetails.deletion ? <p>{privacyDetails.deletion}</p> : <Pending>o procedimento de exclusão dentro do aplicativo, o canal externo que recebe os pedidos, o prazo de atendimento e o tratamento dos dados em cada serviço, incluindo Clerk e Supabase.</Pending>}
              {deletionMail && <><h3>Solicitação por e-mail</h3><p>Envie o pedido para <a href={`mailto:${email}`}>{email}</a>, com o assunto “Tocaê — Solicitação de exclusão de conta”. Informe seu nome, o e-mail cadastrado e se sua conta é de aluno ou professor. Poderemos solicitar uma confirmação de titularidade antes de atender ao pedido.</p><a className={`button buttonNavy ${styles.action}`} href={deletionMail}><Mail size={18} /> Solicitar exclusão <ArrowUpRight size={17} /></a><p className={styles.smallPrint}>O botão abre seu aplicativo de e-mail. A solicitação só é enviada quando você enviar a mensagem.</p></>}
            </section>

            <section id="direitos">
              <span className={styles.sectionNumber}>09 / SEUS DIREITOS</span>
              <h2>Você pode falar sobre seus dados</h2>
              <p>Nos termos da legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), você pode solicitar:</p>
              <ul>
                <li>Confirmação de tratamento e acesso aos seus dados pessoais.</li>
                <li>Correção de informações incompletas, incorretas ou desatualizadas.</li>
                <li>Informações sobre o compartilhamento dos seus dados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.</li>
                <li>Portabilidade, quando aplicável e conforme a regulamentação.</li>
                <li>Revogação do consentimento e eliminação de dados tratados com base nele, respeitadas as hipóteses legais de conservação.</li>
              </ul>
              <p>O atendimento pode exigir a confirmação da sua identidade para proteger os dados de acessos não autorizados. Os direitos são exercidos conforme os requisitos e limites legais. Consulte também o <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">texto da LGPD</a>.</p>
            </section>

            <section id="menores">
              <span className={styles.sectionNumber}>10 / CRIANÇAS E ADOLESCENTES</span>
              <h2>Contas de menores de idade</h2>
              {privacyDetails.minors ? <p>{privacyDetails.minors}</p> : <Pending>a idade mínima para criar conta e, caso crianças ou adolescentes utilizem o aplicativo, como funciona a participação do responsável legal e a proteção dos seus dados. A oferta de aulas para todas as idades não define, por si só, a idade permitida para uma conta no app.</Pending>}
            </section>

            <section id="alteracoes">
              <span className={styles.sectionNumber}>11 / ATUALIZAÇÕES</span>
              <h2>Alterações desta política</h2>
              <p>Esta política poderá ser atualizada para refletir mudanças no aplicativo e nas práticas de tratamento de dados. A versão vigente será disponibilizada nesta página, com a data da última atualização. Quando uma alteração exigir uma nova informação ou consentimento específico, a atualização desta página não substitui essa obrigação.</p>
            </section>

            <section id="contato" className={styles.contactSection}>
              <span className={styles.sectionNumber}>12 / VAMOS CONVERSAR</span>
              <h2>Contato de privacidade</h2>
              <p>Este é o canal para dúvidas sobre seus dados, exercício de direitos e solicitações relacionadas à sua conta no Tocaê.</p>
              {privacyDetails.responsible && <p><strong>Responsável:</strong> {privacyDetails.responsible}</p>}
              {email ? <a className={styles.emailLink} href={`mailto:${email}`}><Mail size={20} />{email}<ArrowUpRight size={18} /></a> : <Pending>o e-mail de atendimento será incluído após a confirmação do responsável pelo Tocaê.</Pending>}
            </section>

            <div className={styles.documentEnd}><span>Tocaê · Política de Privacidade</span><a href="#politica">Voltar ao topo ↑</a></div>
          </article>
        </div>
      </main>
      <footer className={styles.footer}><div className="container"><span>© 2026 Tocaê. Todos os direitos reservados.</span><Link href="/">Música para aprender. Liberdade para ser você.</Link></div></footer>
    </>
  );
}
