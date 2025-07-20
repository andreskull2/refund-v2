# Bem-vindo(a) ao Refund-v2!
Nesta aula, vamos colocar a mão na massa e desenvolver um sistema de reembolso completo usando JavaScript. A ideia é que você coloque em prática todo o conhecimento que adquiriu no curso, transformando-o em uma aplicação funcional.

Não se preocupe com o HTML e o CSS, eles já estarão prontos para que a gente possa focar 100% na lógica do JavaScript. Nosso objetivo é conectar todas as partes e usar tudo o que você aprendeu para criar algo realmente irado.

Bora nessa? Prepare-se para aprender muito e se divertir com este projeto!

# 1. Configuração Inicial do Projeto
Baixando o Template do Projeto
Nesta etapa, vamos baixar o template HTML e CSS que servirá como base para o nosso projeto Refund-v2.

Você pode acessar o repositório diretamente no GitHub neste link:
Template da aplicação: https://github.com/rocketseat-education/refund-template

Vamos aprender a clonar o projeto usando Git ou, se preferir, a fazer o download do arquivo ZIP. Assim, teremos a estrutura pronta para começar a codificar o JavaScript nas próximas aulas!

# Preparando o Terreno: Onde a Mágica Acontece
Nesta etapa crucial, vamos dar o pontapé inicial na lógica do nosso sistema de reembolso! Para isso, é fundamental criar o nosso arquivo principal de scripts JavaScript e garantir que ele esteja corretamente conectado ao HTML.

Pense nisso como preparar o palco para os atores entrarem em cena: sem a conexão adequada, o JavaScript não consegue "conversar" com a sua página web e, consequentemente, a aplicação não ganhará vida.

Vamos configurar tudo para que o script.js esteja pronto para receber toda a inteligência e interatividade que vamos construir nas próximas aulas.

# 2. Interagindo com o Formulário (Input de Dados)
Interagindo com o Usuário: Validando Entradas Inteligentes
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

# 3. Processamento e Adição da Despesa
Organizando os Dados: Montando a Nova Despesa
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

# 4. Exibição Dinâmica da Lista de Despesas
Dando Forma às Despesas: Construindo os Itens da Lista
Nesta aula, é hora de fazer as despesas aparecerem na tela!

Vamos utilizar o JavaScript para criar dinamicamente os elementos HTML que compõem cada item da nossa lista de despesas (o famoso <li>).

Você aprenderá a "montar" cada despesa visualmente, adicionando as classes de estilização necessárias para que elas se encaixem perfeitamente no design do seu Refund-v2, garantindo uma apresentação clara e organizada para o usuário.

Prepare-se para ver os dados das suas despesas ganharem vida na interface!

# Visualizando a Categoria: Adicionando Ícones Dinâmicos
Nesta aula, daremos um toque visual e prático à nossa lista de despesas!

Você aprenderá a usar o JavaScript para adicionar dinamicamente o ícone correspondente a cada categoria de despesa. Em vez de apenas o nome, cada item de despesa ganhará um elemento visual (como um ícone de avião para viagens ou um garfo para alimentação).

Isso não só enriquece a interface do usuário, mas também torna a leitura e a identificação rápida das despesas muito mais eficiente e intuitiva. Vamos dar vida visual às suas categorias!

# Detalhando a Despesa: Construindo o Bloco de Informações
Nesta aula, vamos focar em como apresentar os detalhes de cada despesa de forma clara e estruturada dentro da nossa lista.

Você aprenderá a usar o JavaScript para criar e organizar os elementos HTML essenciais (como <div>, <strong> e <span>) que exibirão o nome e a categoria de cada despesa.

Veremos a importância de "aninhá-los" corretamente — colocando um elemento dentro do outro — para construir uma estrutura lógica e visualmente coesa. Essa abordagem modular garante que cada informação seja exibida no seu devido lugar, tornando a lista de despesas intuitiva e fácil de ler para o usuário.

# Finalizando os Detalhes: Exibindo o Valor da Despesa
Nesta aula, vamos adicionar a peça que faltava para completar a visualização de cada despesa: o valor monetário.

Você aprenderá a criar e posicionar dinamicamente o valor da despesa (já formatado para o Real Brasileiro, como fizemos anteriormente!) dentro do item da lista.

Nosso objetivo é garantir que o preço seja exibido de forma clara e visível, finalizando a representação completa de cada registro de reembolso. É o último toque para que cada despesa esteja completa e pronta para ser visualizada!

# 5. Interatividade e Cálculos da Lista
Dando Poder ao Usuário: Adicionando o Botão de Remover
Nesta aula, vamos adicionar uma funcionalidade essencial para o controle das despesas: a opção de remover um item da lista.

Você aprenderá a criar e integrar o ícone de remover (como um "X" ou uma lixeira) a cada item de despesa adicionado. Este botão não será apenas visual; ele servirá como o ponto de partida para que o usuário possa excluir facilmente despesas indesejadas ou incorretas.

É um passo importante para tornar a aplicação mais interativa e dar total controle sobre os registros de reembolso!

# Mantendo Tudo Atualizado: Contagem e Total das Despesas
Nesta aula, vamos garantir que o nosso aplicativo de reembolso forneça uma visão clara e em tempo real do status das despesas!

Você aprenderá a implementar a atualização dinâmica não apenas da lista de itens, mas também de dois indicadores cruciais:

A quantidade total de despesas registradas.

O valor total consolidado de todos os reembolsos.

Criaremos as funções necessárias para que, a cada nova despesa adicionada (ou removida!), esses números sejam recalculados e exibidos instantaneamente na interface, proporcionando uma visão geral sempre atualizada para o usuário.

# Preparando os Valores: Garantindo Cálculos Precisos
Nesta aula crucial, vamos focar em uma etapa fundamental para que os cálculos do nosso sistema sejam sempre exatos: a preparação dos valores das despesas.

Você aprenderá a:

"Limpar" os dados: Removendo quaisquer caracteres não numéricos que possam ter escapado à validação inicial.

Padronizar a formatação: Convertendo vírgulas para pontos, assegurando que o JavaScript reconheça os números decimais corretamente.

Converter para formato numérico (float): Transformando a string de texto em um número real que possa ser utilizado em operações matemáticas.

Validar a integridade: Verificando se o resultado da conversão é, de fato, um número válido antes de adicioná-lo ao total, evitando erros e comportamentos inesperados.

Este passo garante que cada centavo seja contado com precisão, construindo um cálculo total absolutamente confiável para o seu Refund-v2!

# Calculando o Grande Total: Percorrendo as Despesas
Nesta aula, vamos colocar a "contabilidade" em prática!

Você aprenderá a criar a lógica para calcular o valor total de todas as despesas registradas. Para isso, utilizaremos um loop for para:

"Caminhar" por cada item individualmente na nossa lista de despesas.

Extrair o valor de cada despesa de forma precisa.

Somar esses valores para chegar ao montante final.

Prepare-se para ver o JavaScript trabalhar como um verdadeiro contador, consolidando todos os seus gastos de forma eficiente!

# Deixando o Total no Padrão: Formatando o Valor Consolidado
Nesta aula, vamos garantir que o valor total das despesas seja exibido de forma impecável e no padrão financeiro correto.

Você aprenderá as melhores práticas para a formatação de valores monetários em JavaScript, com um foco especial em:

Reutilização de código: Como criar métodos de formatação que podem ser aplicados em diferentes partes da sua aplicação, evitando repetição.

Adição do símbolo de moeda (R$): Garantindo que o valor seja imediatamente reconhecido como dinheiro.

Tratamento da vírgula decimal: Evitando erros comuns e garantindo a precisão na exibição dos centavos.

Transformaremos um simples número em um valor financeiro perfeitamente legível e profissional para o seu Refund-v2!

# Interceptando a Ação: Removendo Despesas com Precisão
Nesta aula, vamos implementar a funcionalidade que permite ao usuário remover despesas específicas da lista com um simples clique.

Você aprenderá a "escutar" os cliques em cada item da lista e, de forma inteligente, identificar se o clique ocorreu exatamente no ícone de remoção. Para isso, faremos uma verificação da classe do elemento clicado, garantindo que a ação de exclusão só seja ativada quando o ícone correto for acionado.

Essa estratégia nos permite saber com exatidão quando o usuário deseja remover um item, abrindo caminho para que possamos retirá-lo da lista de forma eficaz e sem erros.

# Executando a Ação: Removendo o Item da Lista
Com a identificação do clique no ícone de remoção já implementada, nesta aula vamos para a ação final: remover efetivamente o item da lista.

Você aprenderá a escrever o código necessário para que, ao capturarmos o clique no ícone, a despesa correspondente seja retirada da exibição e de nossa estrutura de dados.

É o passo que completa o ciclo de gerenciamento de itens, dando ao usuário o controle total sobre as despesas registradas!