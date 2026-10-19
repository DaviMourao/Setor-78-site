# Fotos do site

Todas as fotos ficam em `public/img/` e são servidas pelo próprio site (sem link direto para bancos de imagem, então a CSP não muda).
O site aplica filtro preto e branco nelas pelo CSS (`--photo-filter` em `styles.css`), então podem ser enviadas coloridas.

| Arquivo | Onde aparece | Formato ideal |
|---|---|---|
| `hero.jpg` | Metade direita do topo (no celular, em cima do título) | quadrada, 1400 x 1400 |
| `seguros.jpg` | Cartão "Seguros" | 1200 x 800 (3:2) |
| `saude.jpg` | Cartão "Planos de saúde" | 1200 x 800 (3:2) |
| `consorcio.jpg` | Cartão "Consórcio" | 1200 x 800 (3:2) |
| `atendimento.jpg` | Seção "Sobre nós" (legenda "Imagem ilustrativa") | retrato, 1200 x 1500 (4:5) |

## Origem e licença

Todas do Unsplash, sob a Unsplash License (uso comercial gratuito, atribuição não obrigatória, não pode revender a foto sem alteração). Escolhidas pelo Davi em 19/10/2026, recortadas e comprimidas para a web (sem metadados).

| Arquivo | Foto | Autor |
|---|---|---|
| `hero.jpg` | https://unsplash.com/photos/8qnHYPEKtU0 (família de mãos dadas na praia) | Olivia Bauso |
| `seguros.jpg` | https://unsplash.com/photos/RbYg6fKSfcY (consultor com dois clientes) | Vitaly Gariev |
| `saude.jpg` | https://unsplash.com/photos/6eDFSCSwkSo (mãe e filho no médico) | Vitaly Gariev |
| `consorcio.jpg` | https://unsplash.com/photos/HXsrGdHzLFI (casal com a chave da casa nova) | Vitaly Gariev |
| `atendimento.jpg` | https://unsplash.com/photos/r3nFzBF1eUE (pai com o filho nos ombros) | Studio Michael França |

Os originais em alta resolução ficam na pasta do projeto, em `fotos-originais/` (fora do site), para refazer recortes.

## Regras

- Foto de banco nunca é apresentada como equipe, cliente ou escritório da Setor 78. Enquanto `atendimento.jpg` for de banco, mantém a legenda "Imagem ilustrativa".
- Ao trocar por fotos reais da equipe, remova a legenda no `index.html` e anote aqui a autorização das pessoas (LGPD: imagem é dado pessoal).
- Otimizar antes de publicar (JPEG qualidade ~75, até ~250 KB cada).
