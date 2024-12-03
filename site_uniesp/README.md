# Site Uniesp
Este projeto é uma aplicação React configurada com o Vite, que utiliza o json-server para simular um backend. A seguir estão as instruções para rodar a aplicação localmente.


## Estrutura das pastas

site_uniesp ├── data │ └── db.json # Banco de dados simulado para JSON Server ├── node_modules # Dependências do projeto ├── public # Arquivos estáticos como imagens e ícones │ ├── uniesp.jpg # Logo do Sistema │ └── VESTIBULAR.gif # Banner publicitário ├── src │ ├── assets # Recursos estáticos específicos do servidor │ ├── components # Componentes reutilizáveis │ │ ├── BannerAd.jsx # Componente do banner publicitário │ │ └── Navbar.jsx # Componente de navegação superior │ ├── pages # Páginas do sistema │ │ ├── admin # Páginas administrativas │ │ │ ├── AdminNoticias.jsx # Dashboard de administração de notícias │ │ │ ├── CadastroNoticias.jsx # Tela para cadastrar novas notícias │ │ │ └── EditarNoticias.jsx # Tela para editar notícias existentes │ │ ├── DpoLgpd.jsx # Página de políticas de privacidade (LGPD) │ │ ├── Faculdade.jsx # Página com informações sobre a faculdade │ │ ├── Inicial.jsx # Página inicial da área pública │ │ ├── Noticias.jsx # Página pública de listagem de notícias │ │ └── VisualizaNoticia.jsx # Página para visualizar detalhes de uma notícia │ ├── App.css # Estilos globais da aplicação │ ├── App.jsx # Componente raiz que integra a aplicação │ ├── index.css # Estilização inicial global │ └── main.jsx # Ponto de entrada principal da aplicação ├── .gitignore # Arquivo para ignorar arquivos no repositório ├── eslint.config.js # Configuração do ESLint ├── index.html # Arquivo HTML raiz ├── package-lock.json # Versões exatas das dependências ├── package.json # Dependências do projeto ├── vite.config.js # Configuração do Vite para build e desenvolvimento └── README.md # Documentação do projeto

## Bibliotecas

As seguintes dependências são utilizadas para construir a interface, gerenciar o estado e realizar requisições HTTP na aplicação:

- **@emotion/react**: Biblioteca CSS-in-JS para estilização dinâmica
- **@emotion/styled**: Extensão para criação de componentes estilizados
- **@mui/icons-material**: Biblioteca de ícones baseada no Material Design
- **@mui/material**: Componentes React baseados no Material Design
- **axios**: Cliente HTTP para consumo de APIs REST
- **json-server**: Simulador de backend com API REST fake
- **react**: Biblioteca para construção de interfaces de usuário
- **react-dom**: Permite a renderização de componentes React no DOM
- **react-router-dom**: Gerenciamento de navegação e rotas na aplicação React

## Passo a Passo para Rodar a Aplicação

1. **Clonar o Repositório ou Baixar o Código**  
   Se o código estiver em um repositório, faça o clone do repositório para o seu computador:  
   `git clone [URL do repositório](https://github.com/JulioCAC/tecnologiaParaFrontEnd.git)`

2. **Instalar Dependências**  
   Acesse o diretório do projeto e instale as dependências necessárias:
   ```bash
   cd site_uniesp
   npm install

3. **Rodar o Servidor JSON (Backend)**
    Inicie o servidor json-server para simular a API local. O json-server irá fornecer dados a partir do arquivo data/db.json:
    ```bash
    npm run server

4. **Rodar a Aplicação React (Frontend)**
    Em outro terminal, inicie a aplicação React utilizando o Vite:
    ```bash
    npm run dev

5. O servidor de desenvolvimento será iniciado, e você pode acessar a aplicação no navegador em http://localhost:5173.

