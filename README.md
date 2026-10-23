# GEI — Governança Estrutural Integrada

Site institucional de uma página da GEI (geigovernanca.com.br).
Feito em React 19, Vite 7 e Tailwind CSS 4. É um site 100% estático: não tem backend, banco de dados nem variáveis de ambiente.

## Requisitos

- Node.js 20 ou superior
- pnpm 10 (`corepack enable` já ativa a versão certa)

## Desenvolvimento

```bash
pnpm install
pnpm dev        # servidor local com hot reload
pnpm check      # checagem de tipos (TypeScript)
pnpm build      # gera a versão de produção em dist/
pnpm preview    # serve o dist/ localmente para conferência
```

## Publicação (hospedagem)

| Configuração       | Valor                          |
| ------------------ | ------------------------------ |
| Instalação         | `pnpm install --frozen-lockfile` |
| Comando de build   | `pnpm build`                   |
| Pasta publicada    | `dist`                         |
| Versão do Node     | 20+ (ver `.nvmrc`)             |

O conteúdo de `dist/` é só HTML, CSS, JS e imagens. Pode ser servido por qualquer servidor de arquivos estáticos (Nginx, Apache, CDN), sem processo Node rodando.

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

- Confirmar o e-mail de contato (hoje `contato@gei.com.br`).
- Colocar o número no link do WhatsApp (hoje `https://wa.me/?text=...` não tem número de destino).
- O botão "Landing page" hoje só volta ao topo (`#inicio`). Trocar se houver uma URL externa.
