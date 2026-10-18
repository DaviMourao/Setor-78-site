# Site Setor 78

Landing page da Setor 78 Corretora (seguros, planos de saúde e consórcios), Sete Lagoas/MG.

## Onde está publicado

Cloudflare **Pages**, projeto `setor78`: https://setor78.pages.dev

Repositório privado: `DaviMourao/Setor-78-site` (branch `main`). Cada push na `main` publica o site automaticamente. O antigo Worker (`setor78.davifmourao.workers.dev`) foi substituído; histórico em [`docs/migracao-pages.md`](docs/migracao-pages.md).

## Configuração do Pages

- Framework preset: **None**
- Build command: **vazio**
- Build output directory: **`public`**
- Production branch: **`main`**

Só o conteúdo de `public/` vai para o ar. `CLAUDE.md`, `SECURITY.md`, `README.md` e `docs/` ficam no repositório, mas não são publicados. Não há `wrangler.jsonc`: para este site ele não é necessário.

## Atualizar o site

1. Copie os arquivos alterados para a pasta do projeto (a que tem o `.git`).
2. No terminal do VS Code, nessa pasta:
   ```
   git add -A
   git status
   git commit -m "Descreva a alteração"
   git push
   ```
3. Em 1 ou 2 minutos o Pages publica. Confira no celular: botões do WhatsApp, mapa, sem erros.

## Configurações rápidas

Em `public/main.js`:
- `WHATSAPP`: número no formato 55 + DDD + número, só dígitos.
- `ANO_FUNDACAO`: ano de fundação; preenche "Fundada em".

## Segurança

Ver `SECURITY.md`. Regras para o agente em `CLAUDE.md`.
