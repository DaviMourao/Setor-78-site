# Como fazer a Setor 78 aparecer no Google

O site já está preparado (endereço oficial, sitemap e dados da empresa que o Google lê). O resto depende de duas contas do Google, feitas pelo Davi ou pelo dono da corretora. Use a mesma conta Google do Perfil da Empresa, se possível.

## 1. Publicar a versão nova do site

Copie os arquivos do zip para a pasta com `.git` e rode no terminal do VS Code:

```
git add -A
git commit -m "SEO: canonical, sitemap e dados da empresa"
git push
```

Confira no navegador: https://setor78.pages.dev/sitemap.xml precisa abrir uma lista com o endereço do site.

## 2. Avisar o Google que o site existe (Google Search Console)

Este é o passo que mais pesa: hoje o Google provavelmente nem sabe que o site existe.

1. Abra https://search.google.com/search-console e entre com a conta Google.
2. Clique em **Adicionar propriedade** e escolha **Prefixo do URL** (não "Domínio").
3. Digite `https://setor78.pages.dev/` e continue.
4. Na verificação, escolha **Arquivo HTML**. O Google oferece um arquivo com nome parecido com `google1234abcd.html`. Baixe, coloque dentro da pasta `public/` do projeto, e faça `git add -A`, `git commit` e `git push`. Espere 1 ou 2 minutos e clique em **Verificar**. (Pode mandar o arquivo para o Claude também, que ele inclui e devolve no zip.)
   - Não apague esse arquivo depois: se sumir, o Google desverifica.
5. No menu, abra **Sitemaps**, digite `sitemap.xml` e clique em **Enviar**.
6. No topo, em **Inspecionar URL**, cole `https://setor78.pages.dev/` e clique em **Solicitar indexação**.

O Google costuma levar de alguns dias a algumas semanas para mostrar o site. O Search Console avisa quando a página entrar e mostra por quais pesquisas as pessoas chegam.

## 3. Ligar o site ao Perfil da Empresa no Google

A empresa já aparece no Google com horário, então já existe um perfil. Para quem pesquisa "setor 78", esse perfil (o quadro com mapa ao lado dos resultados) costuma ser o que aparece primeiro.

1. Pesquise "Setor 78 Sete Lagoas" no Google logado na conta dona do perfil, ou abra https://business.google.com.
2. Clique em **Editar perfil**.
3. Em **Site**, coloque `https://setor78.pages.dev/`.
4. Confira se nome, endereço, telefone e horário estão **idênticos** aos do site: "Setor 78", Rua Huracan, 523, Nossa Senhora do Carmo, Sete Lagoas, (31) 98495-9503, segunda a sexta das 9h às 17h. Dados iguais nos dois lugares fazem o Google confiar que são a mesma empresa.
5. Categoria principal: **Corretora de seguros**. Dá para acrescentar categorias secundárias, como "Agência de planos de saúde", se fizer sentido.
6. Ajuda bastante: fotos da fachada e do escritório, uma descrição curta, e pedir avaliações aos clientes satisfeitos (o Google tem um link "Pedir avaliações" no próprio perfil).

Se ninguém souber qual conta controla o perfil, em https://business.google.com dá para pedir acesso ao perfil existente.

## 4. Desligar o endereço antigo

Se o Worker antigo (`setor78.davifmourao.workers.dev`) ainda existir, apague-o no painel do Cloudflare (Workers e Pages > o Worker > Configurações > Excluir). Duas cópias do mesmo site confundem o Google.

## 5. Quando comprar o domínio no Registro.br

Um domínio próprio (por exemplo `setor78.com.br`) ajuda o Google e passa mais confiança. Nesse dia:

- O Claude troca o endereço em `index.html`, `robots.txt` e `sitemap.xml`.
- No Search Console, adicione o domínio novo como outra propriedade e reenvie o sitemap.
- No Perfil da Empresa, troque o site para o domínio novo.
- Redirecione `setor78.pages.dev` para o domínio novo (ver `SECURITY.md`).
