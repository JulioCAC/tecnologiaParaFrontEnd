# tecnologiaParaFrontEnd
Repositório para a disciplina de Tecnologia para Front-end do quarto período do curso de Sistemas de Informação.
**Estrutura das pastas**
📦 site_uniesp
├── 📂 data
│   └── 📄 db.json             -> Banco de dados simulado para JSON Server
├── 📂 public
│   └── 📄 index.html          -> Arquivo HTML principal
├── 📂 src
│   ├── 📂 assets              -> Recursos estáticos como imagens e ícones
│   ├── 📂 components          -> Componentes reutilizáveis da interface
│   │   ├── 📄 BannerAd.jsx    -> Componente do banner publicitário
│   │   └── 📄 Navbar.jsx      -> Componente de navegação superior
│   ├── 📂 pages
│   │   ├── 📂 admin           -> Páginas administrativas do sistema
│   │   │   ├── 📄 AdminNoticias.jsx       -> Dashboard de administração de notícias
│   │   │   ├── 📄 CadastroNoticias.jsx    -> Tela para cadastrar novas notícias
│   │   │   ├── 📄 EditarNoticias.jsx      -> Tela para editar notícias existentes
│   │   ├── 📄 DpoLgpd.jsx             -> Página de políticas de privacidade (LGPD)
│   │   ├── 📄 Faculdade.jsx           -> Página com informações sobre a faculdade
│   │   ├── 📄 Inicial.jsx             -> Página inicial da área pública do site
│   │   ├── 📄 Noticias.jsx            -> Página pública de listagem de notícias
│   │   └── 📄 VisualizaNoticia.jsx    -> Página para visualizar detalhes de uma notícia específica
│   ├── 📄 App.css             -> Estilos globais da aplicação
│   ├── 📄 App.jsx             -> Componente raiz(pai) que integra a aplicação
│   ├── 📄 index.css           -> Estilização inicial aplicada globalmente
│   └── 📄 main.jsx            -> Ponto de entrada principal da aplicação
├── 📄 .gitignore              -> Arquivo para ignorar arquivos no repositório Git
├── 📄 eslint.config.js        -> Configuração do ESLint
├── 📄 index.html              -> Arquivo HTML raiz
├── 📄 package.json            -> Configuração das dependências do projeto
├── 📄 vite.config.js          -> Configuração do Vite para build e desenvolvimento
└── 📄 README.md               -> Documentação do projeto
