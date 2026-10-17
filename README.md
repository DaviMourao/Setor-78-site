# Site Setor 78

Landing page da Setor 78 Corretora (seguros, planos de saúde e consórcios), Sete Lagoas/MG.

## Publicar / atualizar no Cloudflare Pages

1. Cloudflare → Workers & Pages → projeto `setor78`.
2. **Create deployment** → arraste a pasta **`public`** (não a pasta do projeto inteira).
3. Confira o site no celular: botões do WhatsApp, mapa, sem erros.

> Só o conteúdo de `public/` vai para o ar. `CLAUDE.md`, `SECURITY.md` e `docs/` ficam fora de propósito.

## Configurações rápidas

Em `public/main.js`:
- `WHATSAPP`: número no formato 55 + DDD + número, só dígitos.
- `ANO_FUNDACAO`: ano de fundação (ex.: `2015`); preenche "Fundação" e "Anos de mercado".

## Segurança

Ver `SECURITY.md`. Regras para o agente em `CLAUDE.md`.
