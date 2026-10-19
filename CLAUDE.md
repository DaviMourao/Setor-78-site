# Projeto: Site da Setor 78

Instruções para o agente (Claude) que mantém este site. Leia este arquivo inteiro antes de qualquer alteração.

## Contexto

- **Cliente:** Setor 78, corretora de seguros, planos de saúde e consórcios em Sete Lagoas/MG.
- **Responsável técnico:** Davi (faz as alterações e colhe a opinião do dono da corretora).
- **O que é:** landing page estática, sem backend, sem banco de dados, sem formulários. Todo contato vai para o WhatsApp.
- **Hospedagem:** Cloudflare **Pages**, projeto `setor78`, endereço `setor78.pages.dev` (no ar desde 18/10/2026). Ligado ao repositório **privado** `DaviMourao/Setor-78-site` no GitHub: cada push na branch `main` publica sozinho. Configuração: sem comando de build, diretório de saída `public`. O antigo Worker (`setor78.davifmourao.workers.dev`) foi substituído e não deve mais ser usado. Histórico da migração em `docs/migracao-pages.md`.
- **Sem `wrangler.jsonc`:** o Pages com integração Git não precisa dele; as configurações ficam no painel. Se um dia for criado, ele passa a mandar nas configurações do projeto (inclusive `pages_build_output_dir = "public"`).
- **Domínio próprio:** no Registro.br, será comprado depois e ligado ao projeto Pages.
- **Idioma:** todo o conteúdo do site e as respostas ao Davi em português do Brasil.

## Estrutura

```
public/            → tudo que vai para o ar (é esta pasta que se publica)
  index.html       → conteúdo da página
  styles.css       → visual
  main.js          → número do WhatsApp, ano de fundação, animações
  favicon.png, apple-touch-icon.png → ícone da aba / celular (símbolo da logo)
  logo-simbolo.png → símbolo da logo (branco, fundo transparente) no topo e rodapé
  og-image.jpg     → imagem de compartilhamento (logo completa)
  img/             → fotos do site (hero, seguros, saude, consorcio, atendimento); ver docs/fotos.md
  _headers         → cabeçalhos de segurança do Cloudflare (CSP etc.)
  robots.txt       → libera o Google e aponta o sitemap
  sitemap.xml      → lista de páginas para o Google
  google3f985a52f51f7999.html → verificação do Google Search Console (não apagar)
docs/              → referências e decisões (não vai para o ar)
SECURITY.md        → checklist de segurança
CLAUDE.md          → este arquivo
```

## Identidade visual (não alterar sem pedido)

Atualizada em 18/10/2026 a pedido do Davi: o site não deve parecer cópia da Starlink e precisa mostrar pessoas.

- Minimalista, fundo preto e texto branco, com fotos de pessoas em preto e branco (filtro `--photo-filter` em `styles.css`; troque para `none` se quiserem fotos coloridas).
- Títulos em letra normal (não caixa alta), espaçamento justo. Só os rótulos pequenos (`.label`) e a logo continuam em caixa alta.
- Botões e etiquetas arredondados (pílula); cartões e fotos com cantos suaves (`--radius`).
- Topo dividido: texto à esquerda e foto de pessoas à direita (no celular, a foto fica em cima). Sem o "horizonte" e as estrelas do estilo antigo.
- Logo abaixo do topo, faixa de credenciais (SUSEP, CNPJ, desde 2023) com explicação "O que é a SUSEP?" em `<details>` (sem JS) e link para a consulta oficial da SUSEP. Credenciais oficiais devem ficar sempre em destaque: é o diferencial frente a concorrentes que não as mostram.
- Produtos em três cartões com foto. "Sobre nós" em fundo branco, com foto de pessoas.
- Cor quente âmbar (`--warm`) **só em pontos estratégicos**: CTAs principais, números, destaques pontuais, brilho do consórcio.
- O botão flutuante do WhatsApp permanece verde, por reconhecimento.
- Fotos ficam em `public/img/` e são servidas pelo próprio site (nunca link direto para banco de imagens, para não abrir a CSP). Origem e licença de cada foto em `docs/fotos.md`. Foto de banco nunca pode ser apresentada como equipe, cliente ou escritório da Setor 78; enquanto for de banco, a foto do "Sobre nós" leva a legenda "Imagem ilustrativa".

## Regras de segurança (obrigatórias)

Baseadas em OWASP Cheat Sheet Series, Project CodeGuard e OWASP Top 10. Ver `SECURITY.md` e `docs/referencias.md`.

1. **Nada de código inline.** Sem `<script>` com conteúdo, sem `style="..."`, sem `onclick=`. Todo JS vai em `main.js` e todo CSS em `styles.css`. Isso mantém a CSP rígida (sem `'unsafe-inline'`).
2. **Toda origem externa nova exige atualizar a CSP** em `public/_headers`, liberando o mínimo necessário (domínio exato, diretiva exata). Nunca usar `*` nem `'unsafe-eval'`.
3. **Evitar dependências externas.** Antes de adicionar biblioteca, CDN, widget, pixel ou script de terceiros, explicar ao Davi o risco e a alternativa. Se for inevitável, usar versão fixa e Subresource Integrity (`integrity="sha384-..."` + `crossorigin="anonymous"`).
4. **Links externos** sempre com `rel="noopener"` (e `noreferrer` quando não houver motivo para passar a origem). Links de WhatsApp são gerados em `main.js`; não montar URLs a partir de dados vindos da URL da página.
5. **Nunca usar `innerHTML`, `document.write` ou `eval`** com qualquer valor. Para texto dinâmico, usar `textContent`.
6. **Nenhum segredo no repositório:** tokens, senhas, chaves de API, dados de clientes. Este site não precisa de nenhum.
7. **Dados pessoais (LGPD):** o site não coleta dados. Se um dia houver formulário, analytics ou pixel, avisar que é preciso aviso de privacidade e consentimento antes de implementar.
8. **Não remover nem afrouxar cabeçalhos** de `_headers` sem explicar o motivo e o risco.
9. **Conteúdo verdadeiro:** não inventar depoimentos, números de clientes, prêmios, seguradoras parceiras, CNPJ ou SUSEP. Dados desconhecidos ficam como `[placeholder]` e são listados ao Davi.

## Fluxo de trabalho

1. Entender o pedido; se ambíguo e caro de refazer, perguntar.
2. Alterar o mínimo necessário, mantendo o estilo do código existente.
3. Verificar antes de entregar:
   - página abre sem erros no console e sem violações de CSP;
   - layout em 390px (celular) e 1280px (desktop), sem rolagem horizontal;
   - todos os botões de WhatsApp apontam para o número correto;
   - checklist de `SECURITY.md` (seção "A cada alteração").
4. Entregar a pasta `public/` (ou zip dela) e resumir em poucas linhas o que mudou e o que falta preencher.
5. Cada push na branch `main` do GitHub publica sozinho. Confira os cabeçalhos no endereço publicado (seção "Cabeçalhos HTTP" do `SECURITY.md`).

## Dados atuais

- WhatsApp: +55 31 98495-9503 (configurado em `main.js`, variável `WHATSAPP`)
- Ano de fundação: 2023 (`ANO_FUNDACAO` em `main.js`)
- Endereço: Rua Huracan, 523, Bairro Nossa Senhora do Carmo, Sete Lagoas/MG
- Horário: segunda a sexta, das 9h às 17h (igual ao Google)
- CNPJ: 49.235.068/0001-49 · SUSEP: 232143293
- Logo: `logo_dark.jpeg` e `logo_branca.jpeg` na raiz do projeto (texto da logo: "Seguros e planos de saúde")
- Número de clientes e "anos de mercado": o dono prefere não citar; o site mostra só "Fundada em 2023".
- E-mail e Instagram: a corretora ainda não tem (link do Instagram fica comentado no rodapé).
- Pendentes: seguradoras parceiras, confirmar tipos de seguro oferecidos. Quando houver domínio próprio, trocar `https://setor78.pages.dev` por ele em todo lugar: `index.html` (canonical, `og:url`, `og:image` e os dados estruturados do bloco de localização), `robots.txt` e `sitemap.xml`. Depois reenviar o sitemap no Google Search Console.
- SEO: dados estruturados da empresa ficam em microdata (`itemprop`) no bloco de localização do `index.html`, e não em JSON-LD, para não ter `<script>` inline. Se mudar endereço, horário ou telefone, atualizar ali também e no Perfil da Empresa no Google (os dados devem ser idênticos).
