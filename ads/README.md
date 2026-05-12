# Sistema de Gestao de Trafego Pago Assistido por IA

Este diretorio concentra o processo de apoio a gestao de trafego pago do cliente. O sistema existe para analisar dados, diagnosticar problemas, preparar recomendacoes, criar copies, orientar criativos e gerar planos de acao para aprovacao humana.

## Objetivo

Gerir a fase 1 e a fase 2 da operacao de trafego pago:

1. Analise de dados e diagnostico.
2. Recomendacoes, copies, criativos e planos de acao para aprovacao humana.

## Regra principal

Este sistema nunca executa alteracoes em campanhas. Ele apenas analisa, recomenda e prepara materiais.

Nao pausar, ativar, duplicar, aumentar orcamento, reduzir orcamento, criar anuncios ou alterar campanhas sem aprovacao humana explicita.

## Contexto comercial atual

A landing page deve focar venda de piscinas, escolha de modelos, catalogo, acabamentos e pedido de orcamento. Conteudos sobre instalacao existem como guia educativo e prova de conhecimento tecnico, mas nao devem ser tratados como oferta principal.

## Estrutura

- `contexto.md`: contexto do cliente, oferta, publico, landing page e objetivos.
- `regras.md`: regras globais de operacao, seguranca e aprovacao.
- `skills/`: agentes operacionais especializados.
- `data/`: dados exportados das plataformas de anuncios, CRM, analytics e landing page.
- `reports/`: relatorios semanais, mensais e diagnosticos.
- `copies/`: copies de anuncios, headlines, CTAs e matrizes de teste.
- `creatives/`: briefs de criativos, videos, reels, carrosseis e UGC.
- `action-plans/`: planos de acao para aprovacao humana.
- `prompts-operacionais.md`: prompts prontos para uso diario.
- `ads-command-center.md`: modo operacional com comandos `/ads daily`, `/ads report` e `/ads creative`.

## Agentes disponiveis

### Trace - Traffic Analyst

Analisa performance de campanhas, conjuntos e anuncios. Procura winners, losers, tendencias, anomalias e fadiga por metricas.

Use quando precisar de diagnostico de performance.

Exemplo:

> Usa Trace para analisar os ultimos 7 dias.

### Buck - Budget Optimizer

Analisa orcamento e recomenda redistribuicao de verba. Cria planos de acao com risco, prioridade e impacto esperado.

Use quando precisar decidir onde manter, reduzir, aumentar, pausar manualmente ou testar verba.

Exemplo:

> Usa Buck para criar plano de orcamento.

### Cris - Creative Reviewer

Analisa criativos, fadiga, angulos, formatos e performance visual.

Use quando precisar entender quais criativos estao fortes, saturados ou fracos.

Exemplo:

> Usa Cris para rever os criativos.

### Rex - Report Writer

Gera relatorios semanais e mensais para o cliente em portugues de Portugal, com linguagem clara e profissional.

Use quando precisar comunicar resultados e proximos passos.

Exemplo:

> Usa Rex para gerar relatorio semanal.

### Ada - Ad Creator

Cria textos de anuncios, headlines, primary texts, descriptions, CTAs e variacoes completas.

Use quando precisar de novas copies baseadas em dados, landing page, objeccoes e anuncios vencedores.

Exemplo:

> Usa Ada para criar novas copies.

### Cleo - Creative Director

Cria briefs de criativos, videos, reels, carrosseis e UGC alinhados com a landing page.

Use quando precisar transformar estrategia em direcao criativa executavel.

Exemplo:

> Usa Cleo para criar 3 briefs de video.

### Iris - Image Generator

Gera criativos visuais locais para Instagram e Meta Ads usando modelos de imagem da OpenAI, preferencialmente `gpt-image-2`, ou outro modelo disponivel no ambiente.

Use quando precisar transformar briefs em imagens para revisao humana: posts, anuncios, stories, reels covers, landscape ads e carrosseis.

Exemplo:

> Usa Iris para gerar 3 imagens a partir dos briefs da Cleo.

## Como usar

Antes de qualquer pedido operacional, garantir que existem dados recentes em `ads/data/` e contexto atualizado em `ads/contexto.md`.

### Ads Command Center

O modo `Ads Command Center` aceita comandos curtos:

- `/ads daily`: recolhe ou pede dados dos ultimos 7 dias, usa Trace, Buck, Cris e Rex, e gera plano de acao em `ads/action-plans/`.
- `/ads report`: usa Rex para gerar relatorio cliente, versao WhatsApp e versao completa, guardando em `ads/reports/`.
- `/ads creative`: usa Ada e Cleo para criar copies e briefs criativos, guardando em `ads/copies/` e `ads/creatives/`.
- `/ads image`: usa Iris para criar 3 conceitos visuais e gerar 1 imagem por conceito, guardando em `ads/creatives/`.
- `/ads carousel`: usa Iris para criar estrutura de carrossel e gerar slides `1080x1080`, guardando em `ads/creatives/carousels/`.
- `/ads story`: usa Iris para criar criativo vertical `1080x1920`, guardando em `ads/creatives/stories/`.

Regras do modo:

- nunca executar acoes na Meta automaticamente;
- terminar sempre com lista de acoes para aprovacao humana;
- separar sempre diagnostico, recomendacao e acao sugerida.
- manter venda de piscinas como foco principal;
- usar instalacao apenas como conteudo educativo, remarketing ou apoio a decisao.

Prompts uteis:

- "Usa Trace para analisar os ultimos 7 dias."
- "Usa Buck para criar plano de orcamento."
- "Usa Cris para rever os criativos."
- "Usa Rex para gerar relatorio semanal."
- "Usa Ada para criar novas copies."
- "Usa Cleo para criar 3 briefs de video."
- "Usa Iris para gerar 3 imagens para Meta Ads."
- "/ads daily"
- "/ads report"
- "/ads creative"
- "/ads image"
- "/ads carousel"
- "/ads story"

## Fluxo recomendado

1. Atualizar `ads/contexto.md` com oferta, publico, landing page e objetivo atual.
2. Colocar exportacoes de dados em `ads/data/`.
3. Usar Trace para diagnostico.
4. Usar Cris para leitura criativa.
5. Usar Buck para plano de orcamento.
6. Usar Ada e Cleo para novas hipoteses de anuncios e criativos.
7. Usar Iris para gerar imagens locais para revisao humana, quando houver briefing aprovado.
8. Usar Rex para comunicar resultados ao cliente.
9. Guardar planos em `ads/action-plans/`, relatorios em `ads/reports/`, copies em `ads/copies/` e briefs/imagens em `ads/creatives/`.

## Dados minimos recomendados

- Periodo analisado.
- Nome da campanha.
- Nome do conjunto.
- Nome do anuncio.
- Spend.
- Impressions.
- Reach.
- Frequency.
- CTR.
- CPC.
- CPM.
- Leads.
- CPA.
- Purchases.
- ROAS.
- Conversion rate.
- Landing page views.
- Cost per landing page view.
- Criativo usado.
- Copy usada.
- Link da landing page.

## Saida esperada

Cada analise deve terminar com:

- resumo executivo;
- dados usados;
- recomendacoes justificadas por metricas;
- riscos;
- proximas acoes;
- decisoes que precisam de aprovacao humana.
