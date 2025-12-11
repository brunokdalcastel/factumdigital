# 🕵️‍♂️ Factum Análise Digital

> **"A Verdade Digital Revelada"**

Este é o repositório oficial do site institucional da **Factum Análise Digital**, uma empresa fictícia especializada em computação forense e laudos técnicos.

O projeto foi desenvolvido com foco em transmitir **autoridade**, **segurança** e **alta tecnologia**, utilizando uma estética "Dark Mode" corporativa inspirada em grandes players do mercado forense.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído com uma stack moderna para garantir performance e manutenibilidade:

-   **[React](https://react.dev/)** (via [Vite](https://vitejs.dev/)): Framework principal para construção da interface.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários para estilização rápida e consistente.
-   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e profissionais.
-   **[Lucide React](https://lucide.dev/)**: Conjunto de ícones leves e consistentes.

## 🎨 Identidade Visual

A interface segue um tema escuro profissional:
-   **Primary Color**: `#0a192f` (Navy Blue Profundo) - Transmite seriedade e mistério.
-   **Accent Color**: `#64ffda` (Cyan/Teal) - Remete à tecnologia e precisão.
-   **Highlight**: `#ffd700` (Gold) - Detalhes sutis de sofisticação.

## 📂 Estrutura do Projeto

```
src/
├── components/        # Componentes modulares
│   ├── Navbar.jsx     # Navegação fixa com efeito glassmorphism
│   ├── Hero.jsx       # Seção principal com animações
│   ├── Services.jsx   # Grid de serviços oferecidos
│   ├── Process.jsx    # Fluxo de trabalho (Diagnóstico -> Laudo)
│   └── Footer.jsx     # Rodapé com contatos e links
├── App.jsx            # Montagem da Landing Page
└── index.css          # Estilos globais e configuração do Tailwind
```

## 🛠️ Como Executar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/brunokdalcastel/factum-analise-digital.git
    cd factum-analise-digital
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173`.

4.  **Para gerar a versão de produção:**
    ```bash
    npm run build
    ```

## 📄 Licença

Este projeto é privado e proprietário da **Factum Análise Digital**.
Todos os direitos reservados.

---
*Desenvolvido como parte de um projeto de portfólio de Engenharia de Software e UI/UX.*

---

## 🔄 Workflow de Desenvolvimento

Este projeto segue um fluxo de trabalho profissional utilizando Git Flow simplificado:

1.  **`develop`**: Branch principal de desenvolvimento. Todo trabalho novo começa e termina aqui.
2.  **`main`**: Branch de produção. Espelho do que está no ar. Apenas recebe merges da `develop` quando está estável.

### Como Publicar (Deploy)

1.  Garanta que suas alterações estão salvas na `develop`.
2.  Mude para a branch `main`: `git checkout main`
3.  Traga as novidades: `git merge develop`
4.  Envie para o GitHub: `git push`
5.  Execute o deploy: `npm run deploy`
