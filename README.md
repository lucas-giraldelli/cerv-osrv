# OSRV — Obras Sociais Rafael Verlangieri

Site institucional da ONG OSRV, em Cuiabá/MT.

**Stack:** Astro 4 · Tailwind CSS v3 · pnpm · deploy via FTP no Hostgator

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

O output fica em `dist/`. O deploy é automatizado via GitHub Actions a cada push na branch `main`.

## Deploy

Configurado em `.github/workflows/deploy.yml`. Requer os seguintes secrets no repositório:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`

## Estrutura

```
src/
  components/   # Componentes Astro reutilizáveis
  layouts/      # Layout base (inclui nav, footer e modal global)
  lib/contents/ # Conteúdo das páginas em JSON
  pages/        # Rotas em português
    quem-somos/
    noticias/
    voluntario/
    transparencia/
  styles/       # CSS global + Tailwind
static/         # Arquivos públicos (imagens, fontes, favicon, robots.txt)
```
