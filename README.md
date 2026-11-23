# GEI — Governança Estrutural Integrada

Site institucional da GEI (geigovernanca.com.br).
Feito em React 19, Vite 7 e Tailwind CSS 4. É um site 100% estático: não tem backend, banco de dados nem variáveis de ambiente.

## Páginas

| Rota                | Arquivo                                     |
| ------------------- | ------------------------------------------- |
| `/`                 | `client/src/pages/Home.tsx`                 |
| `/para-quem-decide` | `client/src/pages/GEIForDecisionMakers.tsx` |

## Desenvolvimento

Requer Bun 1.x (ou Node.js 20+).

```bash
bun install
bun run dev        # servidor local com hot reload
bun run check      # checagem de tipos (TypeScript)
bun run build      # gera a versão de produção em dist/
bun run start      # serve o dist/ na porta $PORT (padrão 3000)
```

## Publicação (UQBITZ)

Deploy automático a cada push no branch `main`.

| Campo            | Valor           |
| ---------------- | --------------- |
| Install command  | `bun install`   |
| Build command    | `bun run build` |
| Start command    | `bun run start` |
| Root directory   | `/` (raiz)      |
| Output directory | `dist`          |

O build gera `dist/index.html` e `dist/para-quem-decide/index.html`, então as duas rotas funcionam por acesso direto em qualquer servidor estático.
**Não use GitHub Pages**: a hospedagem é a UQBITZ.

## Estrutura

```
client/
  index.html              # HTML base (título, descrição, fontes)
  public/                 # arquivos servidos como estão
    favicon.svg
    assets/               # logo, foto do hero, foto do André
  src/
    main.tsx              # ponto de entrada do React
    App.tsx               # escolhe a página pela URL
    index.css             # estilos (Tailwind + CSS do site)
    pages/                # uma página por arquivo
```

## Regras para quem editar (pessoas ou IA)

- Só React, `lucide-react` e Tailwind. Não reinstalar o template completo da Manus (componentes shadcn, Express, plugins `vite-plugin-manus-*`).
- Imagens novas vão em `client/public/assets/` e são referenciadas como `/assets/nome.ext`. Nunca `/manus-storage/...`.
- Nunca subir `.project-config.json`, `.env` ou qualquer chave.
- Lockfile único: `bun.lock`. Não subir `pnpm-lock.yaml` nem `package-lock.json`.
- Não criar workflows em `.github/` nem arquivo `CNAME`.
- Página nova: criar em `client/src/pages/`, registrar em `App.tsx` e adicionar a cópia do `index.html` no script `build` do `package.json`.
- Antes de cada push: `bun run check && bun run build`.
