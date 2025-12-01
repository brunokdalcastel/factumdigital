# Guia Passo a Passo: Atualizar GitHub e Site

Siga estes passos sempre que fizer alterações no seu projeto.

## Parte 1: Salvar o Código no GitHub

1.  **Abra o terminal** no VS Code (`Ctrl + '`).
2.  **Verifique o que mudou**:
    ```bash
    git status
    ```
    *Isso mostra os arquivos modificados em vermelho.*

3.  **Prepare os arquivos para salvar**:
    ```bash
    git add .
    ```
    *Isso adiciona todas as alterações.*

4.  **Salve com uma mensagem**:
    ```bash
    git commit -m "Descreva aqui o que você fez"
    ```
    *Exemplo: `git commit -m "Atualiza cor do botão"`*

5.  **Envie para o GitHub**:
    ```bash
    git push origin main
    ```
    *Agora seu código fonte está salvo na nuvem.*

---

## Parte 2: Atualizar o Site Online (GitHub Pages)

Para que as mudanças apareçam no link público do seu site:

1.  **Execute o comando de deploy**:
    ```bash
    npm run deploy
    ```

    *O que isso faz?*
    - Cria uma versão otimizada do site.
    - Envia para a branch `gh-pages`.
    - O GitHub detecta e atualiza o site em alguns minutos.

## Dica Importante

Se você criou arquivos novos e eles não aparecem no `git status`, verifique se não estão no arquivo `.gitignore`.
