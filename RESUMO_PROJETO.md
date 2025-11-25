# Resumo do Projeto: Veritaserum Forensics

## 1. Contexto do Projeto
**Veritaserum Forensics** é um site institucional para uma empresa fictícia de computação forense e recuperação de dados. O objetivo é transmitir autoridade, segurança e alta tecnologia através de um design "Dark Mode" corporativo.

**Referência Visual:** Evidence Lab.
**Identidade:**
- **Cores:** Azul Marinho Profundo (Fundo) e Ciano/Dourado (Acentos).
- **Conceito:** "A Verdade Digital Revelada" (alusão elegante ao nome Veritaserum).

## 2. Stack Tecnológico
- **Framework:** React (Vite)
- **Estilização:** Tailwind CSS v3
- **Animações:** Framer Motion
- **Ícones:** Lucide React

## 3. O Que Já Foi Feito

### Configuração e Infraestrutura
- [x] Inicialização do projeto com Vite + React.
- [x] Configuração do Tailwind CSS com cores personalizadas (`primary`, `secondary`, `gold`).
- [x] Instalação de dependências (`framer-motion`, `lucide-react`, `clsx`).
- [x] Configuração de fontes (Inter).

### Componentes Desenvolvidos
Todos os componentes foram modularizados em `src/components/`:

1.  **Navbar (`Navbar.jsx`)**:
    - Menu fixo com efeito de vidro (glassmorphism) ao rolar.
    - Responsivo (menu hambúrguer no mobile).
    - Links de navegação suave.

2.  **Hero Section (`Hero.jsx`)**:
    - Manchete impactante com animação de entrada.
    - Botões de ação ("Solicitar Análise").
    - Fundo tecnológico abstrato.

3.  **Serviços (`Services.jsx`)**:
    - Grid de cards exibindo as especialidades (Recuperação de Dados, Perícia, etc.).
    - Efeitos de hover para interatividade.

4.  **Processo (`Process.jsx`)**:
    - Seção "Como Trabalhamos" ilustrando o fluxo: Diagnóstico -> Coleta -> Análise -> Laudo.
    - Design visual passo-a-passo.

5.  **Footer (`Footer.jsx`)**:
    - Rodapé completo com contatos, links rápidos e redes sociais.

### Páginas
- **Landing Page (`App.jsx`)**: Montagem de todos os componentes em uma página única (Single Page Application).

## 4. Como Executar o Projeto
Para rodar o projeto localmente:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## 5. Próximos Passos Sugeridos
- **Conteúdo Real**: Substituir os textos de placeholder por textos finais da empresa.
- **Imagens**: Adicionar imagens reais da equipe ou escritório se disponível.
- **SEO**: Refinar meta tags e descrições para melhor indexação.
- **Formulário**: Implementar um formulário de contato funcional (ex: usando EmailJS ou backend próprio).
