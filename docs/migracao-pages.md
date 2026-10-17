# Migração: Cloudflare Worker → Cloudflare Pages (com GitHub privado)

Situação em 17/10/2026: o site está num **Worker** (`setor78.davifmourao.workers.dev`).
Objetivo: publicar pelo **Pages** (`setor78.pages.dev`), atualizado automaticamente a partir de um repositório **privado** do GitHub, e só então desligar o Worker.

O Cloudflare não converte um Worker em projeto Pages: cria-se um projeto Pages novo e, quando ele estiver conferido, apaga-se o Worker. Durante a migração os dois endereços funcionam ao mesmo tempo, então não há tempo fora do ar.

> Os nomes dos botões do Cloudflare e do GitHub mudam de vez em quando. Se algum não bater exatamente, procure o equivalente na mesma tela.

---

## 1. Antes de começar (segurança das contas)

- [ ] GitHub com autenticação em dois fatores (2FA) ativada (Settings → Password and authentication).
- [ ] Cloudflare com 2FA ativada.
- [ ] Ter em mãos o zip **`setor78-site-completo`** mais recente (pasta `entregas/`), descompactado.

## 2. Criar o repositório privado no GitHub

1. github.com → **+** (canto superior direito) → **New repository**.
2. Repository name: `setor78-site`.
3. Marque **Private**.
4. Não marque "Add a README" nem ".gitignore" (o projeto já tem README).
5. **Create repository**.

## 3. Enviar os arquivos

1. Na página do repositório vazio, clique no link **uploading an existing file**.
2. Abra a pasta `setor78-site` descompactada, selecione **o conteúdo dela** (as pastas `public` e `docs` e os arquivos `CLAUDE.md`, `README.md`, `SECURITY.md`) e arraste para o navegador.
   - Não arraste a pasta `setor78-site` em si; senão tudo fica um nível abaixo e o diretório de saída deixa de ser `public`.
   - Use Chrome ou Edge, que mantêm as subpastas ao arrastar.
3. Commit message: `Primeira versão do site`. Deixe marcado **Commit directly to the main branch** → **Commit changes**.
4. Confira no GitHub que aparecem na raiz: `public/`, `docs/`, `CLAUDE.md`, `README.md`, `SECURITY.md`; e que `public/` tem `_headers`, `index.html`, `main.js`, `styles.css`, as imagens e `robots.txt`.

## 4. Criar o projeto no Cloudflare Pages

1. Cloudflare → **Workers & Pages** → **Create** → aba **Pages** → **Connect to Git** (às vezes aparece como "Import an existing Git repository").
2. Conecte a conta do GitHub. Na tela de permissões do GitHub, escolha **Only select repositories** e marque só `setor78-site`. Assim o Cloudflare não ganha acesso aos seus outros repositórios.
3. Selecione `setor78-site` → **Begin setup**.
4. Preencha:
   - Project name: **`setor78`** (é isso que define o endereço `setor78.pages.dev`)
   - Production branch: **`main`**
   - Framework preset: **None**
   - Build command: **deixe vazio**
   - Build output directory: **`public`**
   - Não precisa de variáveis de ambiente nem segredos.
5. **Save and Deploy**. Em cerca de um minuto aparece "Success" e o endereço.

**Se o endereço final não for `setor78.pages.dev`** (o Cloudflare acrescenta letras quando o nome já está em uso): me avise o endereço. Preciso trocar duas coisas: a URL do `og:image` no `index.html` e a última regra do `_headers` (a que impede o Google de indexar as versões de pré-visualização).

### Sobre o `wrangler.jsonc`

Não criei. Com a integração Git do Pages, as configurações acima ficam no painel e bastam para um site estático. O `wrangler.jsonc` só serviria para guardar essas mesmas configurações no repositório, e quando ele existe o painel deixa de poder alterá-las, o que complica mais do que ajuda aqui. O `_headers` não depende dele: o Pages lê `public/_headers` sozinho.

## 5. Conferir o site e os cabeçalhos

1. Abra `https://setor78.pages.dev` no celular e no computador:
   - [ ] a página carrega com logo, textos e mapa;
   - [ ] todos os botões do WhatsApp abrem conversa com **(31) 9 8495-9503**;
   - [ ] no computador, F12 → aba **Console**: nenhum erro vermelho e nenhuma mensagem de "Content Security Policy".
2. Cabeçalhos de segurança (prova de que o `_headers` está funcionando):
   - Abra https://securityheaders.com, cole `https://setor78.pages.dev` e clique em **Scan**.
   - Devem aparecer: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. Meta: nota **A** ou **A+**.
   - Opcional: https://developer.mozilla.org/en-US/observatory com o mesmo endereço.
   - Se algum cabeçalho não aparecer, quase sempre é porque o `_headers` não ficou dentro de `public/` no repositório. Não apague o Worker; me mande o print.
3. Teste a atualização automática: no GitHub, edite qualquer coisa pequena (por exemplo, uma linha do `README.md`) e faça commit. Em **Workers & Pages → setor78 → Deployments** deve aparecer um deploy novo.

## 6. Antes de desligar o Worker

- [ ] Troque o link do site onde ele já foi divulgado (perfil da empresa no Google, bio do WhatsApp Business, cartões, etc.) de `setor78.davifmourao.workers.dev` para `setor78.pages.dev`.
- [ ] Confirme que nada mais aponta para o endereço `workers.dev`.

## 7. Desligar o Worker (só depois de tudo acima conferido)

1. Cloudflare → **Workers & Pages** → clique no **Worker** do site (o que tem o endereço `workers.dev`, **não** o projeto Pages `setor78`).
2. **Settings** → no fim da página, **Delete**. Confirme digitando o nome.
3. Abra `setor78.davifmourao.workers.dev`: deve dar erro. Abra `setor78.pages.dev`: deve continuar no ar.

Apagar o Worker não tem volta, mas também não perde nada: todos os arquivos estão no GitHub e no projeto.

## Depois da migração

- Atualizações: upload dos arquivos alterados no GitHub (ver `README.md`), e o Pages publica sozinho.
- Domínio próprio, quando comprado: **Workers & Pages → setor78 → Custom domains**, e seguir a seção "Domínio próprio" do `SECURITY.md`.
