# Site GEI — Governança Estrutural Integrada

Pacote autônomo do site institucional GEI, preparado para ser aberto no GitHub Copilot, versionado no GitHub e publicado em `https://geigovernanca.com.br/`.

## Estrutura

- `client/src/` — código React e páginas do site.
- `client/public/assets/` — logo, fotografia do hero e fotografia do fundador, já locais.
- `client/public/CNAME` — domínio personalizado configurado para `geigovernanca.com.br`.
- `.github/workflows/deploy-pages.yml` — publicação automática no GitHub Pages após cada push na branch `main`.
- `dist/` — build estático gerado localmente e incluído na pasta entregue.
- O workflow cria `404.html` como fallback para a rota `/para-quem-decide` no GitHub Pages.

## Executar localmente

Requer Node.js 20+ e pnpm 10+.

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

Para gerar e testar o build:

```bash
pnpm check
pnpm build
pnpm start
```

## Publicar pelo GitHub Copilot

1. Crie um repositório no GitHub, por exemplo `gei-governanca-site`.
2. Extraia o conteúdo desta pasta e envie todos os arquivos para a branch `main`.
3. No GitHub, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.
4. Aguarde a execução do workflow `Deploy GEI site to GitHub Pages`.
5. Em **Settings → Pages → Custom domain**, informe `geigovernanca.com.br`.
6. No provedor DNS do domínio, crie os registros indicados pelo GitHub. Para o domínio raiz, normalmente são registros A para os endereços do GitHub Pages; confirme os valores exibidos na sua conta GitHub.
7. Ative **Enforce HTTPS** depois que o certificado for emitido.

O workflow já copia o arquivo `CNAME` para o build e publica os assets locais. Não são necessárias chaves Manus, banco de dados ou variáveis secretas para este site estático.

## Rotas

- `/` — apresentação institucional GEI.
- `/para-quem-decide` — página dirigida a fundadores, CEOs, sócios e conselheiros.

## Observação para o GitHub Copilot

O Copilot pode editar diretamente `client/src/pages/Home.tsx`, `client/src/pages/GEIForDecisionMakers.tsx` e `client/src/index.css`. Depois de cada alteração, execute `pnpm check` e `pnpm build` antes do push.
