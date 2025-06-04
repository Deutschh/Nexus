<div align="center">

![Minha imagem de exemplo](logo-1.png)

</div>

![Minha imagem de exemplo](logo-1.png)


# ⚽ Triumph Architect - Simulador Tático e Gerencial de Futebol

## Visão Geral do Projeto

Bem-vindo ao **Triumph Architect**! 🚀 Este projeto é um ambicioso simulador de futebol que mergulha o jogador na experiência de gerenciamento de um clube. Utilizando a robustez do **Java (Spring Boot)** no backend e a interatividade do **React** no frontend, o objetivo é criar um ambiente onde as decisões táticas, o gerenciamento de elenco e as estratégias de mercado são cruciais para o sucesso a longo prazo.

O **Triumph Architect** vai além da simples simulação de placares. 🧠 Ele emula a dinâmica do futebol através de um motor de jogo avançado, baseado em regras e inteligência artificial simplificada, que considera a interação entre atributos de jogadores, táticas de equipe, eventos de jogo e até mesmo fatores como idade e lesões. O jogador assume o papel de um arquiteto do triunfo, construindo seu legado através de um gerenciamento astuto e decisões estratégicas em um universo de ligas brasileiras. 🇧🇷

## Funcionalidades Principais

O **Triumph Architect** será desenvolvido em módulos, com as seguintes funcionalidades planejadas:

### Módulo de Ligas e Gerenciamento de Clubes 🏆

1.  **Estrutura de Ligas Brasileiras:**
    * **Backend:** Gestão de 2 ligas (Série A e Série B), cada uma com 20 times. Implementação de lógica para geração de calendários de jogos de turno e returno, cálculo e atualização de tabelas de classificação, e gerenciamento do sistema de promoção e rebaixamento entre as ligas ao final de cada temporada. ⬆️⬇️
    * **Frontend:** Visualização das tabelas de classificação detalhadas para ambas as ligas, calendários de jogos, e a capacidade de explorar informações de todos os times e seus jogadores. 📊🗓️

2.  **Criação e Gestão do Time do Usuário:**
    * **Backend:** No início de um novo jogo, o usuário "assumirá" o controle de um time genérico da Série B. Este time será populado com jogadores genéricos iniciais, cujos atributos serão atribuídos aleatoriamente a partir de um pool pré-definido, garantindo uma base de desafio. O backend gerenciará o elenco, as finanças e o progresso geral do time do usuário ao longo das temporadas. 💰
    * **Frontend:** Um fluxo de "Assumir Seu Clube" onde o usuário poderá nomear seu time e visualizar seu elenco inicial. Um dashboard principal do clube do usuário fornecerá acesso rápido a informações financeiras, elenco atual e próximos jogos. 🏠📈

3.  **Tática como Fator Determinante:**
    * **Backend (Motor de Simulação):** A eficácia da tática escolhida pelo usuário será um fator crucial no resultado das partidas. O motor de simulação sofisticará a interação entre os **atributos individuais** dos jogadores e a **eficácia da tática**, aplicando multiplicadores, bônus ou penalidades com base na compatibilidade e sinergia entre a tática selecionada e as características dos jogadores. 🧠⚔️
    * **Frontend:** Uma interface intuitiva permitirá ao usuário definir e ajustar a formação tática de seu time através de um campo interativo, além de selecionar a estratégia de jogo detalhada para cada partida. 🗺️📋

### Módulo de Jogadores e Progressão Dinâmica 📈

1.  **Gestão de Jogadores (Genéricos):**
    * **Backend:** API completa para o gerenciamento de jogadores genéricos (sem nomes de jogadores reais). Cada jogador terá atributos detalhados:
        * Nome, Posição (Goleiro, Defensor, Meio-campo, Atacante). 🧑‍🤝‍🧑
        * Habilidades numéricas (ex: Passe, Drible, Finalização, Desarme, Físico, Velocidade, Visão de Jogo). 💪⚡
        * **Idade:** Um atributo dinâmico que influenciará significativamente a progressão e regressão. 🎂
        * **Classificação Geral:** Um valor calculado derivado dos atributos, representando a qualidade total do jogador. ⭐
        * **Valor de Mercado:** Um valor monetário dinâmico baseado na Classificação Geral e Idade, usado no sistema de transferências. 💲
        * **Probabilidade de Lesão:** Um atributo que aumenta a chance de lesões durante as partidas. 🤕
    * **Frontend:** Interfaces detalhadas para visualizar o elenco do time do usuário e de outros times, com todos os atributos, classificação geral, valor de mercado, e status (lesionado, apto). 📝

2.  **Evolução e Regressão de Atributos (Acumulativo):**
    * **Backend:** Os atributos dos jogadores serão **dinâmicos** e influenciados pelo desempenho e idade.
        * **Evolução Positiva:** Ganhos de atributos serão **acumulativos** ao longo da carreira do jogador (não restritos a uma temporada). Por exemplo, um jogador que completa um certo número de assistências (ao longo de várias partidas ou temporadas) pode ganhar um bônus no atributo "Passe". Condições específicas serão definidas para cada atributo (gols para Finalização, desarmes para Desarme, etc.). 🚀
        * **Regressão Negativa:** Da mesma forma, um desempenho fraco ou a ausência de certas ações cruciais para a posição pode levar à perda de atributos (ex: um atacante com pouquíssimos gols em X partidas pode ter sua Finalização diminuída). 📉
        * **Fator Idade:** Jogadores mais jovens terão uma **probabilidade maior de evolução** e menor de regressão. Conforme a idade avança, a **probabilidade de regressão** aumenta e a de evolução diminui, simulando o declínio físico. 👴
    * **Frontend:** Visualização do progresso dos jogadores, detalhando ganhos/perdas de atributos e tendências de evolução/regressão. 📊

3.  **Aposentadoria de Jogadores:**
    * **Backend:** Jogadores atingirão a aposentadoria com base em uma `idade limite` e/ou uma `classificação geral mínima` muito baixa, simulando o fim de suas carreiras. Ao se aposentar, eles serão removidos do jogo ativo. 🔚
    * **Frontend:** Notificações sobre aposentadorias de jogadores no elenco do usuário ou no cenário global do jogo. 🔔

4.  **Lesões de Jogadores:**
    * **Backend (Motor de Simulação):** Durante a simulação de partidas, o motor calculará uma **probabilidade de lesão** para cada jogador, influenciada pelo seu atributo `Probabilidade de Lesão`. Se um jogador se lesionar, ele ficará `indisponível` por um `período de recuperação` (número de partidas), que será influenciado pela gravidade da lesão e pela propensão do jogador. 🚑
    * **Frontend:** Indicadores visuais claros de jogadores lesionados no elenco, com informações sobre o tempo de recuperação estimado. 🩹

### Módulo de Mercado de Transferências e Finanças 💰

1.  **Sistema Financeiro do Clube:**
    * **Backend:** O clube do usuário terá um saldo financeiro, que será impactado por transferências de jogadores, recompensas por posição na liga e, futuramente, outros custos de manutenção (ex: salários de jogadores). 💸
    * **Frontend:** Um dashboard financeiro exibirá o saldo atual do clube e o histórico de transações. 📊

2.  **Janela de Transferências:**
    * **Backend:** As transferências de jogadores só poderão ser realizadas durante períodos específicos ("janelas de transferências"), controladas pelo backend (ex: antes do início da temporada e no meio da temporada). Fora dessas janelas, o mercado estará "fechado". ⏳
    * **Frontend:** Indicação visual clara se a janela de transferências está aberta ou fechada. 🚪

3.  **Compra de Jogadores (Usuário Compra):**
    * **Backend:** O usuário poderá comprar diretamente qualquer jogador de outros times, desde que possua saldo suficiente. O valor do jogador será determinado por sua `Classificação Geral` e `Idade`. Os times da CPU **não negociam** o preço; a compra é direta pelo valor de mercado. O dinheiro é transferido do time do usuário para o time vendedor. 🤝
    * **Frontend:** Uma tela dedicada de "Mercado de Transferências" listará todos os jogadores disponíveis para compra (com seus detalhes e valores), e permitirá a execução da compra. 🛒

4.  **Venda de Jogadores (Usuário Vende):**
    * **Backend:** Em momentos específicos (dentro da janela de transferências), os times da CPU gerarão **propostas de compra aleatórias** para jogadores do elenco do usuário. O valor da oferta será baseado na `Classificação Geral` do jogador (com alguma variação). O usuário poderá `aceitar` ou `rejeitar` a proposta. Se aceita, o dinheiro é creditado ao time do usuário, e o jogador é transferido. ✉️
    * **Frontend:** Uma seção de "Propostas Recebidas" onde o usuário pode visualizar as ofertas e decidir aceitar ou rejeitar a venda. ✅❌

5.  **Recompensas por Posição na Liga:**
    * **Backend:** Ao final de cada temporada, o time do usuário receberá uma recompensa financeira, cujo valor será proporcional à sua posição final na tabela da liga. 💰🏆
    * **Frontend:** Uma tela de "Fim de Temporada" exibirá o resumo do desempenho e a recompensa financeira recebida. 🥳

### Módulo de Simulação de Partida (Backend) ⚽

1.  **Motor de Simulação Avançado:**
    * **Backend:** O coração pulsante do jogo. ❤️‍🔥 Um algoritmo detalhado que, dadas as escalações dos dois times (com jogadores e atributos), suas formações e estratégias, simula o desenrolar de uma partida de futebol.
    * A simulação ocorrerá em "turnos" ou "minutos" virtuais. A cada turno, o motor decidirá eventos com base em:
        * **Atributos dos Jogadores:** Influenciam a probabilidade de sucesso de ações como passes, dribles, finalizações, desarmes. 🔢
        * **Posições no Campo:** A localização do jogador influencia suas opções de ação e a eficácia de sua movimentação. 📍
        * **Estratégias dos Times:** Guia o comportamento geral da equipe (ex: um time com estratégia de "posse de bola" tentará mais passes curtos e seguros).  tactics
        * **Eventos Aleatórios:** Um grau de aleatoriedade será incorporado para simular a imprevisibilidade inerente ao futebol. 🎲
    * **Geração de Log de Eventos:** O motor registrará uma sequência rica e detalhada de eventos da partida (quem passou a bola, driblou, finalizou, gol, falta, cartão, etc.) que será enviada ao frontend para visualização. 📜

2.  **Cálculo de Estatísticas Pós-Jogo:**
    * **Backend:** Após cada simulação, o motor consolidará estatísticas detalhadas da partida (posse de bola, chutes a gol, passes certos/errados, faltas, cartões, gols por jogador) para cada time e jogador. Essas estatísticas serão cruciais para a lógica de progressão acumulativa dos jogadores. 📊⚽

### Módulo de Visualização (Frontend) 🖥️

1.  **Configuração da Partida:**
    * **Frontend:** Interface para seleção dos dois times que se enfrentarão, suas formações e estratégias, seja para simulações avulsas ou para a partida da liga. 🎮

2.  **Visualizador de Simulação:**
    * **Frontend:** Exibição detalhada do resultado da partida. Inicialmente, um **log textual detalhado** dos eventos que ocorreram (quem fez o quê, em qual minuto, resultado da ação). 💬
    * **Evolução Futura:** Possível representação gráfica simples do campo mostrando o movimento da bola ou a localização dos eventos-chave (ex: "mapa de calor" de finalizações). 🗺️🔥

3.  **Análise Pós-Jogo:**
    * **Frontend:** Apresentação das estatísticas geradas pelo backend em gráficos interativos (utilizando bibliotecas como Chart.js, Nivo ou D3.js) e tabelas comparativas do desempenho de times e jogadores. 📈📉

## Tecnologias Utilizadas 🛠️

Este projeto utilizará as seguintes tecnologias, alinhadas às melhores práticas do mercado:

### Backend (Java) ☕

* **Linguagem:** Java 17+ (ou a versão LTS mais recente).
* **Framework:** Spring Boot (para desenvolvimento rápido e robusto de APIs RESTful). 🚀
* **Acesso a Dados:** Spring Data JPA / Hibernate (para persistência e interação com o banco de dados relacional). 💾
* **Banco de Dados:** PostgreSQL (recomendado para produção e desenvolvimento, proporcionando um ambiente consistente). 🐘
* **Segurança:** Spring Security (para autenticação de usuários e proteção de endpoints, essencial para um jogo com conta de usuário). 🔒
* **Build Tool:** Maven ou Gradle. 📦
* **Geração de IDs:** UUIDs para entidades chave (jogadores, times, partidas, transferências) para escalabilidade e unicidade global. 🆔
* **Motor de Simulação:** Lógica de negócios pura em Java, altamente modularizada. 🧠

### Frontend (React) ⚛️

* **Framework:** React 18+ (para uma interface dinâmica e reativa). ✨
* **Inicialização:** Vite ou Create React App (para um setup rápido do ambiente de desenvolvimento). ⚡
* **Gerenciamento de Estado:** React Context API ou uma biblioteca como Zustand/Redux (para gerenciamento de estados complexos e globais da aplicação). 🔄
* **Roteamento:** React Router DOM (para navegação eficiente entre as diferentes telas do jogo). 🛣️
* **Requisições HTTP:** Axios ou Fetch API (para comunicação assíncrona e eficiente com o backend Java). 🌐
* **Estilização:** Tailwind CSS, Styled Components ou módulos CSS (a definir, buscando um visual moderno e consistente). 🎨
* **Bibliotecas de UI:** Opcional (ex: Material-UI, Ant Design) para componentes prontos que acelerem o desenvolvimento e garantam um bom design. 🖼️
* **Visualização de Dados:** Chart.js, Nivo, ou uma biblioteca similar para a criação de gráficos e visualizações ricas. 📊📈
* **Interatividade 2D (Campo):** HTML Canvas ou SVG para a representação gráfica do campo e movimentação de jogadores, caso o projeto evolua para uma visualização animada. ⚽️✨

## Arquitetura do Projeto 🏗️

O **Triumph Architect** seguirá uma arquitetura cliente-servidor, com uma separação clara entre frontend e backend. 🤝

* **Frontend (React Application):**
    * Executado no navegador do cliente. 💻
    * Responsável por toda a interface do usuário, interatividade e experiência visual. ✨
    * Comunica-se exclusivamente com o Backend Java através de requisições HTTP para a API RESTful. 🌐
* **Backend (Spring Boot Application):**
    * Contém a lógica de negócios central e a persistência de dados. 🧠💾
    * **Camada de Controladores (REST APIs):** Recebe requisições HTTP do frontend, mapeia URLs para métodos de serviço e envia respostas. 🔗
    * **Camada de Serviços (Lógica de Negócio):** Onde reside a inteligência do jogo. Contém o motor de simulação, o cálculo de estatísticas, as regras de evolução/regressão de jogadores, a gestão de transferências e ligas, e as validações. 🚦
    * **Camada de Repositórios (Acesso a Dados):** Interage com o banco de dados para persistir e recuperar todas as informações do jogo (jogadores, times, ligas, partidas, estatísticas, etc.). 🗄️
    * **Motor de Simulação:** Um componente de serviço dedicado e modular, encapsulando toda a lógica complexa do jogo e suas interações. ⚙️

## Como Configurar e Rodar Localmente 🚀

### Pré-requisitos ✅

* Java Development Kit (JDK) 17+ ☕
* Node.js (versão LTS recomendada) 🟢
* npm ou Yarn (gerenciadores de pacotes Node.js) 📦
* Um sistema de gerenciamento de banco de dados (ex: PostgreSQL) 🐘
* Git (para clonar o repositório) 🌳
* VS Code (ou sua IDE preferida) com as extensões apropriadas para Java e React. 💻

### Passos para Rodar ▶️

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SeuUsuario/TriumphArchitect.git](https://github.com/SeuUsuario/TriumphArchitect.git)
    cd TriumphArchitect
    ```
2.  **Configurar e Rodar o Backend (Java):**
    * Navegue até a pasta `backend` (ou o nome que você der à pasta do backend). 📂
    * Configure as credenciais do seu banco de dados (PostgreSQL) no arquivo `src/main/resources/application.properties` (ou `application.yml`). ⚙️
    * Construa e execute o projeto Spring Boot:
        ```bash
        ./mvnw spring-boot:run  # Se estiver usando Maven
        # ou
        ./gradlew bootRun      # Se estiver usando Gradle
        ```
    * O backend estará disponível em `http://localhost:8080` (ou outra porta configurada). ✔️

3.  **Configurar e Rodar o Frontend (React):**
    * Navegue até a pasta `frontend` (ou o nome que você der à pasta do frontend). 📂
    * Instale as dependências:
        ```bash
        npm install
        # ou
        yarn install
        ```
    * Inicie o aplicativo React:
        ```bash
        npm start
        # ou
        yarn start
        ```
    * O frontend estará disponível em `http://localhost:3000` (ou outra porta). Certifique-se de que o CORS esteja configurado no backend Java para permitir requisições do frontend durante o desenvolvimento. 🌐

## Próximos Passos e Desafios 🎯

Este projeto é uma jornada de aprendizado e desenvolvimento contínuo. Os principais desafios e focos ao longo do desenvolvimento incluem:

1.  **Modelagem de Dados Robusta:** Criar um modelo de dados que suporte todas as complexidades do gerenciamento de clubes, jogadores e ligas de forma eficiente. 🧩
2.  **Motor de Simulação Inteligente:** Refinar o motor de simulação para que a tática e os atributos dos jogadores tenham um impacto crível e divertido nos resultados das partidas. 💡
3.  **UI/UX Intuitiva e Envolvente:** Desenvolver uma interface de usuário que seja fácil de usar, visualmente atraente e que mergulhe o jogador na experiência de gerenciamento. 🎨✨
4.  **Balanceamento do Jogo:** Ajustar os valores de atributos, a progressão, as recompensas e os preços de transferência para garantir um jogo desafiador, justo e divertido a longo prazo. ⚖️
5.  **Testes Abrangentes:** Escrever testes unitários e de integração para garantir a funcionalidade e a estabilidade de todas as camadas do sistema. ✅🔍

O **Triumph Architect** é um projeto ambicioso, mas com dedicação e paixão, ele se tornará um portfólio impressionante e uma fonte de muito aprendizado. ⭐

---

**Autor:** Guilherme Deutsch Andrade 🧑‍💻
**Licença:** MIT 📄
