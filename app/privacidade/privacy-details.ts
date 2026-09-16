export const privacyDetails: {
  responsible: string | null;
  email: string | null;
  advertisingAndAnalytics: string | null;
  location: string | null;
  minors: string | null;
  deletion: string | null;
  retention: string | null;
  security: string | null;
} = {
  responsible:
    'João Heitor',

  email:
    'jhmartinsrdo@gmail.com',

  advertisingAndAnalytics:
    'O Tocaê não exibe anúncios de terceiros. Atualmente, o aplicativo não utiliza os dados pessoais dos usuários para publicidade direcionada. Dados técnicos estritamente necessários ao funcionamento, autenticação, segurança e diagnóstico do serviço podem ser processados pelos provedores de infraestrutura utilizados pelo aplicativo.',

  location:
    'O Tocaê utiliza o endereço informado pelo próprio usuário para viabilizar a realização das aulas presenciais. O aplicativo não utiliza a localização precisa do dispositivo em segundo plano. Caso o usuário escolha abrir um endereço em um aplicativo de mapas, o tratamento realizado por esse aplicativo externo estará sujeito às políticas do respectivo serviço.',

  minors:
    'O Tocaê é destinado a usuários com 13 anos ou mais. O acesso ao aplicativo é realizado por meio de autenticação gerenciada pelo Clerk, incluindo a opção de login com uma conta Google. Usuários menores de 18 anos devem utilizar o serviço com conhecimento e, quando aplicável, autorização de seus pais ou responsáveis legais. O Tocaê não tem como objetivo coletar intencionalmente dados pessoais de crianças menores de 13 anos. Caso seja identificado que dados de uma criança menor de 13 anos foram fornecidos ao serviço, o responsável legal poderá entrar em contato para solicitar a exclusão dessas informações.',

  deletion:
    'O usuário pode solicitar a exclusão da conta e dos dados pessoais associados enviando um e-mail para jhmartinsrdo@gmail.com com o assunto “Tocaê — Solicitação de exclusão de conta”. Para localizar e proteger a conta, poderão ser solicitados o nome, o e-mail cadastrado, o tipo de conta e uma confirmação de titularidade. Após a solicitação, os dados serão excluídos ou anonimizados quando aplicável, ressalvadas as informações cuja conservação seja necessária para cumprimento de obrigação legal, exercício regular de direitos, prevenção de fraude ou outras hipóteses permitidas pela legislação.',

  retention:
    'Os dados pessoais são mantidos enquanto forem necessários para fornecer as funcionalidades do Tocaê e manter o cadastro do usuário. Após uma solicitação de exclusão, os dados serão excluídos ou anonimizados quando aplicável, exceto quando sua conservação for necessária para cumprimento de obrigação legal, exercício regular de direitos, prevenção de fraude ou outra finalidade permitida pela legislação. Cópias de segurança e registros técnicos podem permanecer temporariamente nos sistemas dos provedores de infraestrutura conforme seus ciclos de retenção e segurança.',

  security:
    'O Tocaê utiliza medidas técnicas e organizacionais destinadas a proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição indevida. A autenticação é gerenciada pelo Clerk, e as comunicações com a API em produção utilizam HTTPS. O acesso às funcionalidades e aos dados é controlado de acordo com o usuário autenticado e seu tipo de perfil, aluno ou professor. Nenhum método de armazenamento ou transmissão eletrônica, entretanto, pode garantir segurança absoluta.',
};

export const privacyIsDraft =
  Object.values(
    privacyDetails
  ).some(
    (value) =>
      !value
  );