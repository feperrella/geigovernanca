# GEI — Governança Estrutural Integrada

Site institucional de uma página da GEI (geigovernanca.com.br).
Feito em React 19, Vite 7 e Tailwind CSS 4. É um site 100% estático: não tem backend, banco de dados nem variáveis de ambiente.

## Requisitos

- Bun 1.x (ou Node.js 20+)

## Desenvolvimento

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

O conteúdo de `dist/` é só HTML, CSS, JS e imagens. Se a plataforma servir o `dist` como estático, o start command não é necessário.

## Estrutura

```
index.html            # HTML base (título, descrição, fontes)
public/assets/        # imagens servidas como estão (logo e foto do hero)
src/
  main.tsx            # ponto de entrada do React
  App.tsx
  index.css           # estilos (Tailwind + CSS do site)
  pages/Home.tsx      # todo o conteúdo do site
```

## Pendências antes de ir ao ar

Em `src/pages/Home.tsx`:

- O botão "Landing page" hoje só volta ao topo (`#inicio`). Trocar se houver uma URL externa.
