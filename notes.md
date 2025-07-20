# Bem-vindo(a) ao Refund-v2!
Nesta aula, vamos colocar a mão na massa e desenvolver um sistema de reembolso completo usando JavaScript. A ideia é que você coloque em prática todo o conhecimento que adquiriu no curso, transformando-o em uma aplicação funcional.

Não se preocupe com o HTML e o CSS, eles já estarão prontos para que a gente possa focar 100% na lógica do JavaScript. Nosso objetivo é conectar todas as partes e usar tudo o que você aprendeu para criar algo realmente irado.

Bora nessa? Prepare-se para aprender muito e se divertir com este projeto!

# Baixando o Template do Projeto
Nesta etapa, vamos baixar o template HTML e CSS que servirá como base para o nosso projeto Refund-v2.

Você pode acessar o repositório diretamente no GitHub neste link:

Template da aplicação: https://github.com/rocketseat-education/refund-template

Vamos aprender a clonar o projeto usando Git ou, se preferir, a fazer o download do arquivo ZIP. Assim, teremos a estrutura pronta para começar a codificar o JavaScript nas próximas aulas!

# Preparando o Terreno: Onde a Mágica Acontece
Nesta etapa crucial, vamos dar o pontapé inicial na lógica do nosso sistema de reembolso! Para isso, é fundamental criar o nosso arquivo principal de scripts JavaScript e garantir que ele esteja corretamente conectado ao HTML.

Pense nisso como preparar o palco para os atores entrarem em cena: sem a conexão adequada, o JavaScript não consegue "conversar" com a sua página web e, consequentemente, a aplicação não ganhará vida.

Vamos configurar tudo para que o script.js esteja pronto para receber toda a inteligência e interatividade que vamos construir nas próximas aulas.

# Interagindo com o Usuário: Validando Entradas Inteligentes
Agora a gente começa a tornar a aplicação interativa! Nosso objetivo nesta aula é garantir que o campo de "Valor" da despesa aceite apenas números, facilitando a vida do usuário e prevenindo erros.

Vamos mergulhar no JavaScript para:

"Encontrar" o elemento de input específico no nosso HTML, usando seu identificador único.

Criar um "escutador" de eventos que ficará atento a cada caractere digitado pelo usuário.

Implementar a lógica de validação que permitirá apenas a entrada de dígitos, transformando a digitação de valores em uma experiência fluida e sem falhas.

Prepare-se para fazer o JavaScript responder em tempo real às ações do usuário!

# Refinando o Input: Somente Números com Regex
Nesta aula, vamos implementar uma solução poderosa e eficiente para garantir que o campo de "Valor" da despesa aceite exclusivamente números.

Usaremos as Expressões Regulares (Regex) para:

"Filtrar" a entrada do usuário em tempo real.

Remover automaticamente qualquer caractere que não seja um dígito, garantindo que o valor final seja sempre numérico.

Você verá como o Regex pode ser uma ferramenta incrível para validação e manipulação de strings, tornando seu formulário ainda mais robusto e amigável.

# Deixando os Valores com a Cara do Brasil: Formatando Moeda
Nesta aula, vamos adicionar um toque de profissionalismo e usabilidade ao nosso campo de "Valor", garantindo que ele exiba o valor da despesa no formato de moeda do Real Brasileiro (R$) em tempo real!

Você aprenderá a usar o poderoso método toLocaleString() do JavaScript, configurando-o com a localidade pt-BR e a moeda BRL.

O mais legal é que vamos fazer uma "mágica" para que, enquanto o usuário digita, o valor já seja automaticamente formatado para centavos e exibido no padrão monetário, tornando a experiência de preenchimento muito mais intuitiva e livre de erros.

Prepare-se para ver os números se transformarem em dinheiro de verdade na tela!

# Coletando as Informações: Dando Vida ao Formulário
Chegou a hora de fazer nosso formulário de reembolso funcionar de verdade!

Nesta aula, vamos aprender a capturar todas as informações que o usuário digitou nos campos da despesa. Para isso, configuraremos um evento de submit no formulário, que nos permitirá "interceptar" os dados no momento em que o usuário finaliza o preenchimento e clica em "Adicionar despesa".

Com essa funcionalidade, teremos o controle total sobre os dados inseridos, abrindo caminho para processá-los, validá-los e, finalmente, transformá-los em um registro de reembolso.

Prepare-se para ver os dados do formulário nas suas mãos!

# Organizando os Dados: Montando a Nova Despesa
Nesta aula, vamos aprender a estruturar as informações de cada despesa de forma organizada e eficiente.

Vamos criar um objeto JavaScript que servirá como um "contêiner" para agrupar todos os detalhes de uma única despesa (título, categoria, valor, etc.). Essa prática é fundamental para:

Centralizar os dados: Facilita o acesso e a manipulação das informações de uma despesa.

Melhorar a legibilidade: Deixa seu código mais limpo e fácil de entender.

Preparar para o futuro: Objetos são a base para armazenar, exibir e trabalhar com múltiplos registros de despesas na nossa aplicação.

Você verá como criar um objeto é simples e poderoso para organizar os dados que obtemos do formulário.

# Automatizando o Registro: Adicionando Despesas com Segurança
Nesta aula, vamos criar a peça central para o nosso sistema: uma função dedicada a adicionar cada nova despesa à lista da aplicação. É aqui que os dados do formulário serão processados e inseridos no local correto.

Mais do que apenas adicionar, essa função será construída com robustez em mente. Para garantir uma experiência fluida e previsível, vamos implementar um bloco try-catch. Isso nos permitirá:

Capturar e gerenciar qualquer erro que possa ocorrer durante o processo de adição da despesa.

Exibir mensagens detalhadas no console (para sua depuração como desenvolvedor).

Fornecer alertas claros e amigáveis ao usuário (caso algo inesperado aconteça), garantindo que ele sempre seja informado.

Prepare-se para construir uma função eficiente e à prova de falhas para o seu Refund-v2!

# Dando Forma às Despesas: Construindo os Itens da Lista
Nesta aula, é hora de fazer as despesas aparecerem na tela!

Vamos utilizar o JavaScript para criar dinamicamente os elementos HTML que compõem cada item da nossa lista de despesas (o famoso <li>).

Você aprenderá a "montar" cada despesa visualmente, adicionando as classes de estilização necessárias para que elas se encaixem perfeitamente no design do seu Refund-v2, garantindo uma apresentação clara e organizada para o usuário.

Prepare-se para ver os dados das suas despesas ganharem vida na interface!