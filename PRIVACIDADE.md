# Política de privacidade do Tocaê

Rota: `/privacidade`. Implementação em `app/privacidade/page.tsx`, estilos isolados em `app/privacidade/privacy.module.css` e informações pendentes em `app/privacidade/privacy-details.ts`.

A página é HTML renderizado no servidor, sem autenticação, e está vinculada no rodapé da página inicial. Não cria um serviço de exclusão de contas nem altera o aplicativo mobile ou o backend.

## Informações que precisam ser confirmadas

- Nome da pessoa ou empresa responsável e e-mail monitorado para privacidade/exclusão.
- Coleta de dados por anúncios, analytics, relatórios de falhas, logs e SDKs; dados de perfil recebidos de Clerk/Google e eventuais uploads de fotos.
- Endereço digitado versus GPS, permissões Android realmente utilizadas.
- Contas de menores, idade mínima e participação do responsável legal.
- Caminho de solicitação de exclusão dentro do app, canal externo e prazo de atendimento.
- Dados eliminados no Clerk, Supabase, API e fornecedores; exceções, motivos e prazos de retenção, incluindo backups e logs.
- HTTPS na API de produção, autorização por perfil e medidas de proteção efetivamente implementadas.

Os campos desconhecidos permanecem `null`. A página mostra um aviso de revisão e inclui `noindex` enquanto houver campos pendentes. Não remover o aviso simplesmente para submeter o app: preencher as práticas confirmadas e revisar se o texto descreve a versão que será distribuída.

Quando o e-mail for preenchido, a seção `/privacidade#exclusao` oferece um link `mailto:` com assunto e campos do pedido. Esse link apenas abre o aplicativo de e-mail: a pessoa precisa enviar a mensagem, e a equipe precisa receber e processar o pedido. Não implica exclusão automática nem cria esse processo no app.

## Uso no Google Play

Depois de finalizar e publicar o site, cadastrar a URL HTTPS pública do domínio real terminada em `/privacidade`. `localhost` serve somente para a prévia local. Verificar acesso sem login e sem restrição geográfica.

Adicionar também um link à política dentro do aplicativo e manter a declaração de Segurança dos dados consistente com a coleta efetiva, inclusive de terceiros. Para contas criadas no app, confirmar os caminhos de exclusão dentro e fora do app. A página web, isoladamente, não implementa esses requisitos no mobile/backend.

## Fontes consultadas em 16/09/2026

- [Google Play — Dados do usuário e política de privacidade](https://support.google.com/googleplay/android-developer/answer/10144311?hl=pt-BR)
- [Google Play — Requisitos de exclusão de contas](https://support.google.com/googleplay/android-developer/answer/13327111?hl=pt-BR)
- [LGPD — texto oficial](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
