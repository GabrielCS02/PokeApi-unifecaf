🚀 Projeto Front-End: Universo dosDesenhos (PokeAPI)

Este projeto foi desenvolvido como parte dos requisitos da disciplina de Web
Programming For Front End na UniFECAF. A aplicação consiste em um site dinâmico
que consome dados da PokeAPI para exibir personagens de sucesso de forma
automatizada.

📋 Sobre o Projeto
O desafio proposto consistia na criação de uma interface web utilizando exclusivamente
tecnologias puras (Vanilla), com o objetivo de demonstrar domínio em integração com
APIs externas e manipulação dinâmica do Document Object Model (DOM).
Requisitos Atendidos:
• Interface Responsiva: Criada com HTML5 e CSS3 puros, sem o uso de
frameworks.
• Consumo de API: Utilização do método fetch para obtenção de dados em tempo
real.
• Manipulação do DOM: Os cards dos personagens são gerados dinamicamente via
JavaScript através de funções como createElement e appendChild.
• Dados Dinâmicos: Exibição de Nome, Imagem e Tipo de cada personagem
diretamente da API.

🛠️ Tecnologias Utilizadas
• HTML5: Estruturação semântica.
• CSS3: Estilização e layout responsivo.
• JavaScript (ES6+): Lógica de consumo da API e criação de elementos dinâmicos.

⚙️ Como Funciona o Código
A lógica principal está concentrada no arquivo script.js:
1. Requisição: A função buscarPokemons() utiliza o fetch() para conectar-se à URL
da PokeAPI.
2. Processamento: Os dados retornados em formato JSON são processados para
extrair as propriedades necessárias.
3. Renderização: A função criarCard() gera a estrutura HTML de cada personagem
e a insere no container principal utilizando appendChild(), garantindo que nenhum
card seja estático no código.

🎓 Identificação
• Aluno: Gabriel Costa Silva
• Instituição: UniFECAF
• Professor: Vitor Jansen
• Local: Cotia – SP
