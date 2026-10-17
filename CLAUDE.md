# Projeto: Site da Setor 78

Instruções para o agente (Claude) que mantém este site. Leia este arquivo inteiro antes de qualquer alteração.

## Contexto

- **Cliente:** Setor 78, corretora de seguros, planos de saúde e consórcios em Sete Lagoas/MG.
- **Responsável técnico:** Davi (faz as alterações e colhe a opinião do dono da corretora).
- **O que é:** landing page estática, sem backend, sem banco de dados, sem formulários. Todo contato vai para o WhatsApp.
- **Hospedagem:** Cloudflare Pages (projeto `setor78`, endereço `setor78.pages.dev`). Domínio próprio no Registro.br será comprado depois.
- **Idioma:** todo o conteúdo do site e as respostas ao Davi em português do Brasil.

## Estrutura

```
public/            → tudo que vai para o ar (é esta pasta que se publica)
  index.html       → conteúdo da página
  styles.css       → visual
  main.js          → número do WhatsApp, ano de fundação, animações
  favicon.svg
  _headers         → cabeçalhos de segurança do Cloudflare (CSP etc.)
  robots.txt
docs/              → referências e decisões (não vai para o ar)
SECURITY.md        → checklist de segurança
CLAUDE.md          → este arquivo
```

## Identidade visual (não alterar sem pedido)

- Estilo Starlink: fundo preto, texto branco, títulos em caixa alta com espaçamento largo, linhas finas, botões retangulares.
- Cor quente âmbar (`--warm`) **só em pontos estratégicos**: CTAs principais, destaques pontuais, brilho do horizonte e do consórcio.
- O botão flutuante do WhatsApp permanece verde, por reconhecimento.
- Seção "Sobre nós" em fundo branco, para contraste.

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

## Dados atuais

- WhatsApp: +55 31 98880-9094 (configurado em `main.js`, variável `WHATSAPP`)
- Ano de fundação: pendente (`ANO_FUNDACAO` em `main.js`)
- Pendentes: endereço exato, horário, CNPJ, SUSEP, e-mail, Instagram, seguradoras parceiras, confirmar tipos de seguro oferecidos.
