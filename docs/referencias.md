# Referências de segurança usadas neste projeto

| Repositório | Para que serve aqui |
|---|---|
| [project-codeguard/rules](https://github.com/project-codeguard/rules) | Regras de segurança feitas para agentes de IA que escrevem código (Cisco / Coalition for Secure AI). Base das regras do `CLAUDE.md`. |
| [OWASP/CheatSheetSeries](https://github.com/OWASP/CheatSheetSeries) | Guias objetivos. Os mais relevantes para este site: *HTTP Headers*, *Content Security Policy*, *Third Party JavaScript Management*, *XSS Prevention*. |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | Coleção de instruções para agentes; o arquivo `instructions/security-and-owasp.instructions.md` é um bom resumo do OWASP Top 10 em formato de regras. |
| [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review) | GitHub Action que faz revisão de segurança automática em cada Pull Request. Útil se o site passar a ser publicado via GitHub. |
| [OWASP/ASVS](https://github.com/OWASP/ASVS) | Padrão de verificação de segurança de aplicações. Exagerado para uma landing page; vira referência se o site ganhar formulários, login ou backend. |

Ferramentas de verificação depois de publicar:
- Mozilla HTTP Observatory: https://developer.mozilla.org/en-US/observatory
- Security Headers: https://securityheaders.com
