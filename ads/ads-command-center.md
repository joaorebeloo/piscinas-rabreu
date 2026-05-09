# Ads Command Center

Modo operacional para gerir trafego pago assistido por IA dentro da pasta `ads/`.

Este modo responde a comandos curtos e transforma cada comando num fluxo operacional com leitura de contexto, uso dos agentes certos, criacao de output e lista final de acoes para aprovacao humana.

## Regras permanentes

Antes de qualquer comando, ler sempre:

1. `ads/contexto.md`
2. `ads/regras.md`
3. ficheiros relevantes em `ads/data/`
4. skills necessarias em `ads/skills/`
5. contexto da landing page do projeto

Nunca executar acoes na Meta automaticamente.

Proibido sem aprovacao humana explicita:

- pausar campanhas;
- ativar campanhas;
- duplicar campanhas;
- aumentar orcamento;
- reduzir orcamento;
- criar anuncios;
- editar anuncios;
- publicar copies;
- publicar criativos.

Todo output deve separar:

- diagnostico;
- recomendacao;
- acao sugerida.

Todo output deve terminar com:

- acoes para aprovacao humana;
- dados usados;
- dados em falta, se existirem;
- local onde o output foi guardado, quando aplicavel.

## Comando: `/ads daily`

Objetivo: rotina operacional dos ultimos 7 dias.

### Fluxo

1. Recolher dados dos ultimos 7 dias em `ads/data/` ou pedir dados em falta.
2. Usar Trace para analise de performance.
3. Usar Buck para plano de orcamento.
4. Usar Cris para analise de criativos.
5. Usar Rex para resumo executivo.
6. Gerar plano de acao em `ads/action-plans/`.

### Dados minimos

- periodo dos ultimos 7 dias;
- campanha;
- conjunto;
- anuncio;
- spend;
- impressions;
- reach;
- frequency;
- CTR;
- CPC;
- CPM;
- leads;
- CPA;
- purchases;
- ROAS;
- conversion rate;
- landing page views;
- cost per landing page view;
- criativo;
- copy;
- landing page.

### Se faltarem dados

Pedir apenas o necessario para prosseguir:

- exportacao Meta Ads dos ultimos 7 dias;
- dados por campanha, conjunto e anuncio;
- metricas de criativo, se existirem;
- contexto atualizado da landing page;
- meta de CPA/ROAS, se ainda nao existir.

### Output

Guardar em `ads/action-plans/` com nome sugerido:

`YYYY-MM-DD-daily-action-plan.md`

Estrutura obrigatoria:

1. Resumo executivo.
2. Diagnostico.
3. Recomendacoes.
4. Acoes sugeridas.
5. Plano de orcamento.
6. Analise criativa.
7. Perguntas em aberto.
8. Acoes para aprovacao humana.

## Comando: `/ads report`

Objetivo: gerar relatorio para cliente.

### Fluxo

1. Usar Rex.
2. Gerar relatorio cliente.
3. Criar versao curta para WhatsApp.
4. Criar versao completa para documento/email.
5. Guardar em `ads/reports/`.

### Dados minimos

- periodo do relatorio;
- investimento;
- principais resultados;
- CPA;
- ROAS;
- leads ou compras;
- aprendizados;
- decisoes recomendadas;
- proximos passos.

### Output

Guardar em `ads/reports/` com nome sugerido:

`YYYY-MM-DD-client-report.md`

Estrutura obrigatoria:

1. Resumo do periodo.
2. Principais resultados.
3. Diagnostico.
4. O que funcionou.
5. O que nao funcionou.
6. Recomendacoes.
7. Acoes sugeridas.
8. Acoes para aprovacao humana.
9. Versao curta para WhatsApp.
10. Versao completa para documento/email.

## Comando: `/ads creative`

Objetivo: criar novas copies e briefs criativos para teste.

### Fluxo

1. Usar Ada para copies.
2. Usar Cleo para briefs criativos.
3. Guardar copies em `ads/copies/`.
4. Guardar briefs em `ads/creatives/`.

### Dados minimos

- contexto do cliente;
- landing page;
- oferta;
- publico;
- objeccoes;
- anuncios vencedores, se existirem;
- criativos vencedores ou saturados, se existirem;
- objetivo do teste criativo.

### Output

Guardar copies em `ads/copies/` com nome sugerido:

`YYYY-MM-DD-ad-copies.md`

Guardar briefs em `ads/creatives/` com nome sugerido:

`YYYY-MM-DD-creative-briefs.md`

Estrutura obrigatoria das copies:

1. Diagnostico usado para copy.
2. Recomendacao de angulos.
3. 5 headlines.
4. 5 primary texts.
5. 5 CTAs.
6. 3 variacoes completas de anuncio.
7. Matriz de teste A/B.
8. Acoes para aprovacao humana.

Estrutura obrigatoria dos briefs:

1. Diagnostico criativo.
2. Recomendacao criativa.
3. Conceitos.
4. Formatos.
5. Roteiros.
6. Hooks dos primeiros 3 segundos.
7. Cenas.
8. Texto no ecra.
9. Direcao visual.
10. CTA final.
11. Variacoes para teste.
12. Acoes para aprovacao humana.

## Formato padrao de resposta

Usar sempre esta ordem:

### Diagnostico

Factos observados, metricas e leitura do problema.

### Recomendacao

O que deve ser considerado e porque.

### Acao sugerida

O que preparar ou submeter para aprovacao humana.

### Acoes para aprovacao humana

Lista clara de decisoes pendentes. Nenhuma acao deve ser descrita como executada se ainda depende de aprovacao.

