# Checklist de segurança: Site Setor 78

Site estático, sem backend e sem coleta de dados: a superfície de ataque é pequena. Os riscos reais estão em **quem controla as contas** (Cloudflare, Registro.br, GitHub, WhatsApp) e em **o que o navegador carrega** (scripts e recursos de terceiros).

## Contas (fazer uma vez) — maior impacto

- [ ] Cloudflare: autenticação em dois fatores (2FA) ativada, de preferência com app autenticador ou chave de segurança, não SMS.
- [ ] Cloudflare: e-mail da conta também protegido com 2FA (quem controla o e-mail controla a recuperação da conta).
- [ ] Guardar os códigos de recuperação do 2FA em local seguro.
- [ ] GitHub: 2FA ativado; repositório `setor78-site` **privado**; o app do Cloudflare no GitHub com acesso só a esse repositório ("Only select repositories").
- [ ] Registro.br (quando comprar o domínio): 2FA ativado; domínio no CPF/CNPJ do **dono da corretora**, com o Davi como contato técnico.
- [ ] WhatsApp Business do número do site: verificação em duas etapas (PIN) ativada.

## Domínio próprio (quando houver)

- [ ] DNS apontado via Cloudflare (Custom domain no projeto Pages `setor78`).
- [ ] DNSSEC ativado (Cloudflare gera os dados; inserir no Registro.br).
- [ ] Redirecionar `setor78.pages.dev` e `www` para o domínio principal, para evitar conteúdo duplicado.
- [ ] Depois de algumas semanas estável em HTTPS, avaliar `preload` no HSTS.
- [ ] Registros de e-mail (SPF, DMARC) mesmo que o domínio não envie e-mail, para impedir que golpistas usem o domínio da corretora em phishing:
  - SPF: `v=spf1 -all`
  - DMARC: `v=DMARC1; p=reject;`
  - (Ajustar se a corretora passar a usar e-mail no domínio.)

## Cabeçalhos HTTP (`public/_headers`)

- [x] Content-Security-Policy rígida, sem `'unsafe-inline'` e sem `'unsafe-eval'`
- [x] Strict-Transport-Security
- [x] X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy
- [ ] Após publicar, testar em https://developer.mozilla.org/en-US/observatory e https://securityheaders.com (meta: nota A ou A+)

## A cada alteração

- [ ] Nenhum código inline (script, style, on*=) foi adicionado.
- [ ] Origens externas novas foram adicionadas à CSP de forma mínima.
- [ ] Nenhum `innerHTML`, `eval`, `document.write`.
- [ ] Nenhum segredo ou dado pessoal de cliente no código.
- [ ] Console do navegador sem erros e sem violações de CSP.
- [ ] Links do WhatsApp conferidos.

## Golpes comuns contra corretoras (orientar o dono)

- Sites falsos copiando a marca para captar dados ou pagamentos: pesquisar o nome da corretora de tempos em tempos.
- Mensagens de WhatsApp de "boleto atualizado" ou "segunda via" vindas de outros números: deixar claro aos clientes, no atendimento, qual é o único número oficial.
- O site nunca pede dados bancários nem pagamento; se um dia pedir, é sinal de invasão.
