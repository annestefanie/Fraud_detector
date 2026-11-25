# Fraud Detector

## 1. Sobre o projeto

O Fraud Detector é um projeto desenvolvido com o objetivo de simular um sistema de gerenciamento de inconsistências bancárias. A aplicação permite visualizar transações financeiras fictícias, identificar possíveis atividades suspeitas e acompanhar alertas gerados a partir de determinadas condições.

O sistema considera situações como transações duplicadas, valores acima de determinados limites e várias operações realizadas em um curto intervalo de tempo.

O projeto foi desenvolvido como protótipo acadêmico, sem integração com instituições financeiras ou sistemas bancários reais.

## 2. Objetivos

- Desenvolver uma interface para gerenciamento de transações financeiras.
- Identificar possíveis inconsistências em operações.
- Organizar alertas de acordo com seus níveis de prioridade.
- Facilitar a visualização e o acompanhamento das informações.
- Aplicar conhecimentos de HTML, CSS e JavaScript na construção de uma aplicação web.

## 3. Tecnologias utilizadas

- **HTML5:** responsável pela estrutura e organização das páginas.
- **CSS3:** utilizado na estilização, identidade visual e responsividade.
- **JavaScript:** responsável pelas funcionalidades, manipulação do DOM, eventos e criação dinâmica de componentes.
- **Bootstrap Icons:** biblioteca utilizada para a implementação de ícones.

## 4. Estrutura do projeto

O Fraud Detector é dividido em quatro páginas principais:

### 4.1. Home

A página inicial apresenta o sistema e suas principais funcionalidades. Possui uma seção principal (Hero), com uma chamada para ação, um carrossel explicativo e um rodapé com links relacionados ao projeto.

### 4.2. Transactions

A página de transações permite visualizar as operações financeiras cadastradas no sistema. Conta com recursos de pesquisa, filtros e paginação para facilitar a localização das informações.

Também é possível visualizar detalhes de uma transação por meio de um modal lateral.

### 4.3. Alerts

A página de alertas apresenta as possíveis inconsistências identificadas pelo sistema. Os alertas são classificados de acordo com seus níveis de prioridade e situações, permitindo acompanhar os registros e consultar seus detalhes.

### 4.4. Accounts

A página de contas permite visualizar as contas bancárias fictícias cadastradas no sistema, além de consultar informações específicas de cada uma delas.

## 5. Componentes e funcionalidades

### 5.1. Header

O cabeçalho é um componente compartilhado entre as páginas. Possui links de navegação, acesso à página inicial, botão de alteração de tema e opção de Login.

### 5.2. Login

A aplicação possui um modal de Login, acessado pelo cabeçalho. Ele apresenta os campos necessários para a interação com a interface de autenticação do protótipo.

### 5.3. Modais de informações

Os modais permitem consultar informações detalhadas de transações, alertas e contas sem precisar sair da página atual.

### 5.4. Modo claro e escuro

O sistema oferece duas opções de tema, permitindo alternar entre o modo claro e o modo escuro para melhorar a experiência visual.

### 5.5. Pesquisa e filtros

As páginas de Transactions e Alerts possuem recursos de pesquisa e filtros que auxiliam na localização e organização dos registros.

### 5.6. Paginação

A paginação permite dividir a apresentação dos registros em diferentes páginas, facilitando a navegação quando há muitos dados.

## 6. Identidade visual

A identidade visual do Fraud Detector utiliza principalmente tons de roxo, lilás, branco e preto.

A escolha das cores busca transmitir tecnologia, inovação e confiança, mantendo uma interface organizada e coerente com a proposta de um sistema financeiro.

Também foram considerados critérios de acessibilidade relacionados ao contraste entre textos e fundos.

## 7. Responsividade

A interface foi desenvolvida considerando diferentes tamanhos de tela, buscando adaptar a disposição dos elementos para proporcionar uma experiência adequada tanto em computadores quanto em dispositivos menores.

Os componentes, como navegação e modais, possuem adaptações para melhorar a utilização em telas menores.

## 8. Processo de desenvolvimento

O desenvolvimento do projeto foi dividido em etapas:

1. **Planejamento:** definição da proposta, dos objetivos e das funcionalidades principais.
2. **Estruturação:** criação das páginas HTML e organização dos elementos da interface.
3. **Identidade visual:** definição da paleta de cores, tipografia e estilos utilizados.
4. **Estilização:** desenvolvimento dos arquivos CSS e adaptação da interface para diferentes tamanhos de tela.
5. **Componentes:** criação de componentes reutilizáveis com JavaScript, como o cabeçalho e os modais.
6. **Funcionalidades:** implementação de eventos, pesquisa, filtros, paginação e alteração de tema.
7. **Organização dos dados:** criação e organização dos registros fictícios utilizados pelo sistema.
8. **Testes:** verificação das funcionalidades e correção de problemas encontrados durante o desenvolvimento.
9. **Finalização:** ajustes visuais, revisão da interface e documentação do projeto.

## 9. Como executar o projeto

Para executar o Fraud Detector localmente, é necessário ter o Git e o Visual Studio Code instalados.

1. Clone o repositório:

```bash
git clone https://github.com/annestefanie/Fraud_detector.git
```

2. Acesse a pasta do projeto:

```bash
cd Fraud_detector
```

3. Abra a pasta no Visual Studio Code.

4. Execute o arquivo `index.html` utilizando a extensão Live Server.

Após essas etapas, o projeto estará disponível no navegador.

## 10. Acesso ao projeto

- **GitHub:** https://github.com/annestefanie/Fraud_detector

- **GitHub Pages:** https://annestefanie.github.io/Fraud_detector/index.html

---

Desenvolvido como projeto acadêmico para praticar conceitos de desenvolvimento web utilizando HTML, CSS e JavaScript.
