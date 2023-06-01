---
layout: page
title: "Estudo de caso de InnerSource do Dojo de DevOps da Microsoft"
---

## Resumo
Quando feito corretamente, o InnerSource é uma das formas mais eficazes de liberar valor retido na empresa. O InnerSource não se limita apenas ao código-fonte, pode ser usado para qualquer tipo de conteúdo, incluindo vendas, pré-vendas, marketing, solução, entrega ou educação na sua organização.

A Microsoft tem praticado o InnerSource nos grupos de produtos para desenvolver código há mais de 5 anos, com colaboração entre equipes se estendendo por muitos anos. Em uma série de esforços de colaboração, o Dojo de DevOps dentro dos Serviços Profissionais da Microsoft é um dos grupos mais recentes a usar o InnerSource, desta vez para criar conteúdo colaborativamente.

Leia para saber como o Dojo de DevOps da Microsoft utilizou o InnerSource para ajudá-los a:

* **Resolver o problema** de ter muitas cópias divergentes de conteúdo voltado para os clientes, em vez disso, criando uma "única fonte de verdade" para os recursos utilizados na entrega de suas masterclasses de DevOps.
* **Empoderar uma comunidade global** de profissionais de DevOps e consultores da Microsoft para se envolverem na co-criação dos recursos de forma assíncrona, além de suas atividades diárias.
* Permitir que os membros da equipe **incorporem o feedback do cliente** para melhorar o conteúdo em tempo real com os clientes e fazê-lo se propagar rapidamente para toda a organização.
* **Desenvolver habilidades** em comunicação, documentação e construção de comunidade que levaram à satisfação pessoal, sucesso profissional e promoções.
* Construir **conexões pessoais profundas e duradouras** ao redor do mundo.

## Contexto

A engenharia da Microsoft passou por uma transformação massiva nos últimos anos: de levar um ano para lançar um software empacotado em 2014, para ter 82.000 implantações em produção por dia em 2019, e hoje 5,6 milhões de vezes por mês. Naturalmente, os clientes estavam perguntando: "Como isso aconteceu?" e "Qual é o segredo por trás disso?" Um grupo dentro dos Serviços Profissionais da Microsoft (agora chamado de Microsoft Industry Solution) decidiu enfrentar esse desafio e compartilhar as lições aprendidas pela Microsoft na prática do InnerSource com conteúdo entregue diretamente aos clientes. A iniciativa DevOps Dojo começou no início de 2019.
O DevOps Dojo é uma comunidade de prática na Microsoft. Começou com um pequeno grupo de voluntários da organização de Serviços, e depois se expandiu para Sucesso do Cliente, Consultoria Digital, Grupos de Produtos e outras organizações. Toda a participação é voluntária e ocorre ao lado das prioridades principais de trabalho. É uma comunidade onde equipes multifuncionais praticam princípios ágeis, de colaboração contínua e automação do DevOps para encontrar o melhor caminho para entregar software desde a ideia até a produção com qualidade. Inclui um conjunto diversificado de participantes em diferentes funções, níveis de experi

ência e geografias, todos trabalhando para aprender juntos e compartilhar essas experiências com os clientes da Microsoft.

## Problemas a serem resolvidos

Quando o DevOps Dojo começou, a propriedade intelectual multifuncional era de código fechado. Isso representava um problema. As equipes estavam trabalhando com tecnologias que haviam sido lançadas recentemente, com ferramentas que ainda estavam em beta. O conteúdo principal estava sendo atualizado continuamente pelos Grupos de Produtos. Os links para recursos e relatórios precisavam ser atualizados regularmente.

Cada membro do Dojo muitas vezes criava sua própria cópia local para personalizar ou atualizar para os clientes. Houve uma proliferação de versões do conteúdo, cada uma ligeiramente diferente da outra: não havia uma "única fonte de verdade". As atualizações globais não podiam ser emitidas facilmente, e o feedback do cliente ficava com o membro do Dojo mais próximo do cliente.

Michael Watson, arquiteto da Microsoft, explicou a questão: "O DevOps Dojo é uma colaboração de mais do que apenas funcionários da Microsoft. Estávamos reunindo pessoas para falar sobre esse assunto. Apesar de termos uma visão, muitas das pessoas com quem estávamos envolvidos tinham anos de experiência. Queríamos aprender uns com os outros e nos manter atualizados sobre o que estava acontecendo na indústria."

Ao contemplar o problema, um dos membros do Dojo, Alvaro Guadamillas, lembrou: "Vi tanto conteúdo incrível criado pela comunidade do Dojo de DevOps que desde o primeiro dia senti a necessidade de tornar esse conteúdo o mais aberto possível para todos. Depois de dois meses fazendo parte da comunidade Dojo, senti confiança suficiente para compartilhar uma ideia: por que não tornamos o conteúdo do Dojo de DevOps InnerSource? Por que não aplicamos solicitações de pull na criação do conteúdo e colaboramos em escala para ter o conteúdo mais recente e melhor disponível para todos na Microsoft? Por que não evitamos ter várias cópias da mesma apresentação distribuídas em todos os lugares e, em vez disso, termos uma única fonte de verdade?"
Em um evento do Dojo em Xangai, Alvaro se reuniu com alguns dos outros membros principais da equipe e sugeriu a abordagem. Ao analisar como ela abordava seus desafios e reconhecer que existia uma comunidade global de InnerSource que já existia para ajudá-los em sua jornada, foi acordado que eles experimentariam uma abordagem de InnerSource. Considerando o impacto cultural do InnerSource, a equipe decidiu primeiro testar o InnerSource em um subconjunto da solução do Dojo de DevOps. Com o apoio da comunidade Dojo, incluindo a equipe de engenharia do Azure DevOps, e a experiência do GitHub, eles criaram o primeiro piloto de InnerSource nos Serviços Profissionais da Microsoft.

## Fundamentos e Implementação

Um dos primeiros passos que a equipe deu foi buscar conselhos especializados para ajudá-los em sua jornada. Eles chamaram Natalie Bradley, do GitHub, que tinha experiência signific

ativa em trabalhar com organizações para ajudá-las em sua jornada de InnerSource. Com a ajuda de Natalie, a equipe começou a estabelecer todas as políticas e processos adequados para ajudá-los. Todo o conteúdo foi armazenado como arquivos markdown no GitHub e o Dojo se comunicava diariamente através dos Canais da Comunidade no Microsoft Teams.

![InnerSource na Microsoft](/images/stories/microsoft.png)
*Figura 1: InnerSource no Dojo de DevOps da Microsoft*

A equipe concentrou-se em oferecer uma experiência perfeita para os colaboradores. Eles também se preocuparam em fornecer clareza de governança, incluindo a nomeação de quem era responsável por cada área e como eles resolveriam quaisquer disputas que pudessem surgir.

Desde o primeiro dia, a equipe sabia que seria essencial acompanhar e celebrar tanto as contribuições quanto o uso de suas saídas. Portanto, a configuração inicial incluía métricas sobre downloads, além de rastrear o número e a origem das solicitações de pull.

Ao projetar o Dojo de DevOps, a equipe não pensou nele apenas como um programa de curto prazo. Eles acreditavam que o Dojo era um programa de transformação tanto para os funcionários internos da Microsoft quanto para os clientes da Microsoft. Eles adotaram um modelo centrado no produto por meio de um processo e abordagem de "produto enxuto". Você pode obter mais detalhes sobre a abordagem de "produto enxuto" no [blog do Dojo de DevOps](https://devblogs.microsoft.com/devops/devops-dojo-lean-product-part-1/).

## Uma única fonte de verdade - Entregue

Em questão de meses, a equipe principal inicial tinha um produto mínimo viável (MVP) em pleno funcionamento. O conteúdo para as masterclasses estava sendo entregue à comunidade de forma constantemente atualizada. Os laboratórios e as instruções para a entrega do laboratório foram criados e atualizados da mesma maneira.

Conforme descrito por Harleen Kaur, Consultor Técnico da Microsoft: "Como coach, eu me preparava para cada sessão, e se eu visse um link ou referência que precisasse ser alterado, meu primeiro instinto era fazer isso no site, para que todos os outros se beneficiassem da alteração. Eu conseguia fazer isso no momento. Se não conseguisse, talvez esquecesse de voltar mais tarde para fazer."

A equipe principal então começou a realizar sessões regulares para ajudar a disseminar a palavra. Eles mostraram o conteúdo disponível e como a equipe poderia usá-lo, ou melhor ainda, contribuir para ele. Eles fizeram simulações ao vivo para demonstrar como funcionavam os vários papéis do InnerSource, e até mesmo edições ao vivo no conteúdo durante as chamadas para que as pessoas pudessem ver como o processo de revisão e aprovação funcionava e como era fácil. Por meio desse processo, eles também estavam identificando diferentes desafios e experiências dos clientes para incorporar.

A participação e as contribuições logo se espalharam pelo mundo. O Dojo atualmente possui várias unidades de negócios trabalhando juntas em 36 países para fornecer o conteúdo mais recente e preciso aos clientes da

 Microsoft.

Deep Mehta, Consultor de Tecnologia da Microsoft, compartilhou: "A reutilização de PI é algo que sempre quisemos fornecer, mas no passado, isso foi um desafio. O InnerSource nos ajudou a fornecer isso. Além disso, incentivamos aqueles que reutilizam o conteúdo a ajudarem contribuindo de volta. O InnerSource também ajuda você a se conectar com pessoas em toda a organização. Você conhece os colaboradores, aprende com eles. Isso é um grande ponto positivo."

Dave McKinstry, Gerente do Programa DevOps FastTrack da Microsoft, acrescentou: "O que observei do ponto de vista de engenharia é que quando você abre seu código-fonte, a qualidade inerentemente melhora. As pessoas querem fazer as coisas melhor."

## Inovação Possibilitada

Com o aumento do uso do conteúdo do Dojo de DevOps, a equipe percebeu que ferramentas adicionais poderiam ajudar os usuários a conhecer o conteúdo. Eles se inspiraram para implementar um Chatbot de Perguntas e Respostas para melhorar a experiência dos usuários com o conteúdo.

O chatbot permite que a comunidade do Dojo faça qualquer pergunta em seu canal da equipe, com suporte de bots de IA e do QnA Maker (um serviço cognitivo do Azure). Além de fornecer respostas em tempo real com suporte de linguagem, a solução melhora organicamente as perguntas e respostas pela comunidade. Integrada com capacidades poderosas de IA, a solução foi projetada para ajudar os Dojos a obterem respostas rapidamente relacionadas ao conteúdo do Dojo, à prontidão, às ofertas e à entrega de forma conversacional no Microsoft Teams.

Após definir os requisitos e entender bem a arquitetura de integração, eles começaram a implementação por meio do InnerSource. O Chatbot de Perguntas e Respostas foi lançado publicamente na Microsoft conforme o planejado. Todas as melhorias e contribuições acontecem por meio de um processo de InnerSource e podem entrar em vigor rapidamente por meio de pipelines de automação.

Yue Sheng, que trabalhou no Chatbot de IA fora de suas responsabilidades principais, compartilhou: "Aqui você tem mentores, professores e amigos. Tudo é um processo bidirecional. Estamos sempre tentando inovações novas. Eu recebo coisas interessantes e frescas por meio desse processo."

Como observou Kan Tang, um dos líderes do Dojo de DevOps: "Na Microsoft, todos temos nosso foco no trabalho. Às vezes, vemos algo que queremos experimentar fora de nossas responsabilidades principais. As pessoas vêm para o Dojo de DevOps e têm autonomia para experimentar e inovar."

## Aprendendo por meio do InnerSource

Por meio da prática do InnerSource, a comunidade do Dojo também observou que publicar seu conteúdo por meio do InnerSource criou uma maravilhosa oportunidade de aprendizado. O InnerSource exige que uma equipe capture e documente tudo para que a equipe possa colaborar de forma assíncrona e não depender de estar fisicamente próxima um do outro. Como observou a equipe: escrever faz você pensar, pensar faz você refletir, a reflexão faz você deliberar, a

 deliberação faz você aprender mais profundamente.

"Em nossa escrita, constantemente desafiamos uns aos outros, aprendemos uns com os outros e iteramos coletivamente", comentou Kitty Chiu, Arquiteta de DevOps na GitHub.

"Para mim, o que me fez ingressar na equipe foi o conceito de compartilhar conteúdo e aprender com diferentes partes do mundo e funções diferentes. Sempre estávamos compartilhando ideias e diferentes pontos de vista. É um verdadeiro enriquecimento, uma conversa que trouxe muito valor", compartilhou Giulia Cupani, Gerente de Programa Azure.

## Conexões Globais

A equipe do Dojo de DevOps está distribuída pelo mundo. Isso apresenta muitos desafios, como restrições de fuso horário que não permitem que toda a equipe se reúna.

Kitty Chiu, baseada na Austrália, descreveu como o processo de InnerSource e o foco na criação de conteúdo permitiram que eles se engajassem perfeitamente no processo: "Antes da pandemia, a cultura da Microsoft geralmente envolvia reuniões presenciais. Isso era um desafio se você estivesse trabalhando em um fuso horário diferente. Muitas vezes, tínhamos que voar para Seattle para colaborar em projetos como este. Quando a pandemia de COVID-19 ocorreu, a comunicação assíncrona tornou-se a norma. O InnerSource foi onde as conversas começaram. Todos poderiam contribuir igualmente, não importava onde estivessem no mundo."

Margarita Sanz, Consultora de DevOps e Nuvem da Microsoft, também compartilhou como o InnerSource permitiu que a equipe desenvolvesse um propósito comum em toda a equipe global: "Nunca vi pessoas tão comprometidas com um objetivo como essa equipe. A equipe foi da China a Madri, passando pela Índia e Suíça, por diferentes fusos horários nos EUA, etc. Fusos horários diferentes, línguas diferentes e origens diferentes, mas o mesmo objetivo e, acima de tudo, a mesma CULTURA."

## Cliente em primeiro lugar

A Microsoft frequentemente fala sobre uma cultura de "cliente em primeiro lugar". Neste caso, a equipe do Dojo de DevOps demonstrou como adotar uma abordagem de InnerSource para a criação de seu conteúdo não apenas garantiu que o cliente recebesse o conteúdo mais recente e atualizado, mas também permitiu que o cliente participasse do processo de atualização.

As equipes entregam suas masterclasses diretamente aos clientes. Paul Fijnvandraat, Consultor Principal da Microsoft, compartilhou que se um cliente tivesse feedback ou uma pergunta a ser respondida (em pré-vendas ou entrega), ele criava uma solicitação de pull para adicionar a pergunta e resposta ao conteúdo do Dojo de DevOps. Dessa forma, o feedback do cliente se propagava para toda a organização quase que imediatamente.

## Impacto para a equipe

O Dojo de DevOps oferece um valor significativo para a Microsoft e seus clientes. No entanto, ao conversar com a equipe do Dojo de DevOps, um benefício adicional é o impacto incrível nos participantes individuais.

Muitos membros do Dojo foram recompensados e promovidos formalmente por causa

 de seu enorme sucesso, mas parece que a maior recompensa de todas foi ainda mais pessoal. Aqueles no Dojo relataram que criaram relacionamentos próximos entre regiões e níveis de experiência, que desenvolveram novas habilidades e tiveram experiências de aprendizado incríveis. Margarita Sanz descreveu:

"Sei de cor que encontrar uma equipe em que você se sinta apoiado e valorizado não é fácil, e embora o caminho nem sempre tenha sido tranquilo, eu o percorreria novamente sem dúvida. Não éramos uma equipe, éramos amigos, éramos uma família trabalhando lado a lado, apoiando uns aos outros. No dia em que entrei para o Dojo, senti que estava entrando para uma nova família. Hoje, eu me desenvolvo, aprendo e cresço de mãos dadas com todos eles, e não poderia estar mais orgulhosa e animada com o futuro que nos espera."

## Planos Futuros

Hoje, o conteúdo do Dojo de DevOps é continuamente aprimorado pela comunidade, eles têm uma única fonte de verdade com o conteúdo mais recente e melhor, e a equipe pode colaborar em escala, a qualquer momento e em qualquer lugar do mundo. Eles têm observado o crescimento da adoção do conteúdo do Dojo de DevOps mês a mês e começaram a ver contribuições de outras regiões do mundo. O grupo espera estender tanto o Dojo de DevOps quanto as práticas de InnerSource dentro da Microsoft e talvez até começar o processo de tornar o conteúdo do Dojo de DevOps disponível para o mundo como open source!

"Contamos com mais de 80.000 engenheiros trabalhando em código na Microsoft e estamos constantemente avaliando o que seria interessante compartilhar abertamente com nossos clientes. O InnerSource nos permitiu desbloquear esse potencial, reduzir redundâncias e colaborar de forma mais eficaz." - Arno Mihm, Gerente de Programa Principal para InnerSource na Microsoft.

## Agradecimentos

Este estudo de caso foi escrito por Clare Dillon, Diretora Executiva do InnerSource Commons, Daniel Izquierdo, CEO da Bitergia e Diretor do InnerSource Commons, e Dr. Klaas-Jan Stol, Diretor do InnerSource Commons, após uma série de entrevistas com as equipes do Dojo de DevOps na Microsoft.

Clare destaca: "Compartilhar histórias sobre nossas jornadas de InnerSource é uma parte importante da comunidade InnerSource Commons. Gostaríamos de agradecer imensamente a todas as pessoas maravilhosas da Microsoft e GitHub que dedicaram seu tempo para compartilhar suas experiências e nos ajudar a registrar este estudo de caso:

- Deep Mehta - Consultor de Tecnologia, Azure Cloud & AI, Microsoft Índia
- Margarita Sanz - Consultora de DevOps e Nuvem, Microsoft Espanha
- Álvaro Guadamillas - Gerente de Programa de Negócios, Azure Cloud & AI, Microsoft Espanha
- Michael Watson - Arquiteto, Microsoft Austrália
- Yue Sheng - Consultor, Azure Cloud & AI, Microsoft China
- Kitty Chiu - Arquiteta Sênior de DevOps, GitHub, Austrália
- Harleen Kaur - Entrega Técnica - Segurança da Informação e DevOps, Microsoft Índia
- Dave Burnison - Defensor Técnico Sênior, GitHub, EUA
- Karl Piteira - Gerente Principal de Grupo PM, Microsoft, EUA
- Jeff Wilcox - Gerente Principal de PM, Microsoft, EUA
- Natalie Bradley - Diretora, Arquitetos de Sucesso do Cliente, GitHub, EUA
- Dave McKinstry - Gerente, Programa DevOps FastTrack, GitHub, EUA
- Paul Fijnvandraat - Consultor Principal, Microsoft Holanda
- Chris Witte - Consultor Sênior, Microsoft EUA
- Jihee Choi - Consultora, Microsoft EUA
- Nicolas Mays - Consultor ASSC, Microsoft EUA
- Geoff Sexton - Consultor Sênior, EUA
- Giulia Cupani - Gerente de Programa Azure, Microsoft Suíça
- Aakanksha Lnu - Gerente de Produto de

 Consultoria, Microsoft, Reino Unido
- Beste Altinay - Arquiteto ASSC, Microsoft Holanda
- Rui Melo - Arquiteto, Microsoft, PORTUGAL
- Nithyanathan R - Arquiteto ASSC, Microsoft Índia
- Charlie Gu - Arquiteto, Microsoft, China
- Harry Chen - Arquiteto, Microsoft, EUA
- Bahram Rushenas - Arquiteto, Microsoft, EUA
- Garry Trinder - Defensor Sênior de Nuvem, Microsoft, Reino Unido
- Kan Tang - Gerente de Arquitetura, Linha de Serviço de Varejo e Bens de Consumo, EUA
- Arno Mihm - Gerente de Programa Principal, InnerSource @Microsoft, EUA

Para obter mais informações ou detalhes adicionais, junte-se à comunidade InnerSource Commons no Slack para iniciar uma conversa. Você também pode conferir as postagens do [blog do Dojo de DevOps](https://devblogs.microsoft.com/devops/intro-of-devops-dojo/) (todas criadas pela equipe usando Markdown por meio de um processo de InnerSource).

Se você deseja compartilhar sua história de InnerSource, entre em contato conosco em [info@innersourcecommons.org](mailto:info@innersourcecommons.org).
