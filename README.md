# Site Setor 78

Landing page da Setor 78 Corretora (seguros, planos de saúde e consórcios), Sete Lagoas/MG.

## Onde está publicado

| | Hoje | Destino |
|---|---|---|
| Serviço | Cloudflare **Worker** | Cloudflare **Pages** |
| Endereço | `setor78.davifmourao.workers.dev` | `setor78.pages.dev` |
| Como atualiza | upload manual | automático a cada commit na branch `main` do GitHub (repositório privado) |

Passo a passo da migração: [`docs/migracao-pages.md`](docs/migracao-pages.md). O Worker só deve ser apagado depois que o Pages estiver no ar e conferido.

## Configuração do Pages

- Framework preset: **None**
- Build command: **vazio**
- Build output directory: **`public`**
- Production branch: **`main`**

Só o conteúdo de `public/` vai para o ar. `CLAUDE.md`, `SECURITY.md`, `README.md` e `docs/` ficam no repositório, mas não são publicados. Não há `wrangler.jsonc`: para este site ele não é necessário.

## Atualizar o site (depois da migração)

1. No GitHub, abra o repositório → **Add file → Upload files** e arraste os arquivos alterados (mantendo as pastas).
2. Escreva uma descrição curta e clique em **Commit changes** na branch `main`.
3. Em 1 ou 2 minutos o Pages publica. Confira no celular: botões do WhatsApp, mapa, sem erros.

## Configurações rápidas

Em `public/main.js`:
- `WHATSAPP`: número no formato 55 + DDD + número, só dígitos.
- `ANO_FUNDACAO`: ano de fundação; preenche "Fundada em".

## Segurança

Ver `SECURITY.md`. Regras para o agente em `CLAUDE.md`.
