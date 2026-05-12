# Prompts Operacionais Diarios

Usar estes prompts para operar o sistema. Antes de qualquer analise, garantir que `ads/contexto.md`, `ads/regras.md` e dados em `ads/data/` estao atualizados.

Contexto comercial atual: a pagina deve focar venda de piscinas, escolha de modelos, catalogo, acabamentos e pedido de orcamento. O guia de instalacao deve ser usado como conteudo educativo, nao como oferta principal.

## Ads Command Center

```text
/ads daily
```

Ao receber `/ads daily`: recolher ou pedir dados dos ultimos 7 dias; usar Trace para analise; usar Buck para orcamento; usar Cris para criativos; usar Rex para resumo executivo; gerar plano de acao em ads/action-plans/. Nunca executar acoes na Meta automaticamente. Separar diagnostico, recomendacao e acao sugerida. Terminar com acoes para aprovacao humana.

```text
/ads report
```

Ao receber `/ads report`: usar Rex para gerar relatorio cliente; criar versao curta para WhatsApp; criar versao completa para documento/email; guardar em ads/reports/. Nunca executar acoes na Meta automaticamente. Separar diagnostico, recomendacao e acao sugerida. Terminar com acoes para aprovacao humana.

```text
/ads creative
```

Ao receber `/ads creative`: usar Ada para copies; usar Cleo para briefs criativos; guardar outputs em ads/copies/ e ads/creatives/. Focar venda de piscinas, catalogo, modelos, acabamentos e orcamento. Usar instalacao apenas como conteudo educativo. Nunca publicar anuncios ou criativos automaticamente. Separar diagnostico, recomendacao e acao sugerida. Terminar com acoes para aprovacao humana.

```text
/ads image
```

Ao receber `/ads image`: usar Iris para pedir ou inferir objetivo do criativo; criar 3 conceitos visuais; gerar 1 imagem para cada conceito com modelo de imagem disponivel, preferencialmente `gpt-image-2`; guardar imagens e ficheiros `.md` em ads/creatives/. Focar venda de piscinas; se o conceito for instalacao, tratar como guia educativo. Nunca publicar ou subir criativos para a Meta automaticamente. Separar diagnostico, recomendacao e acao sugerida. Terminar com acoes para aprovacao humana.

```text
/ads carousel
```

Ao receber `/ads carousel`: usar Iris para criar estrutura de carrossel; gerar slides 1080x1080; guardar cada slide e respetivo `.md` em ads/creatives/carousels/. Escrever os ficheiros `.md` em portugues de Portugal, sem erros ortograficos. Nunca publicar automaticamente. Terminar com acoes para aprovacao humana.

```text
/ads story
```

Ao receber `/ads story`: usar Iris para criar criativo vertical 1080x1920 para story/reels; guardar imagem e ficheiro `.md` em ads/creatives/stories/. Escrever os ficheiros `.md` em portugues de Portugal, sem erros ortograficos. Nunca publicar automaticamente. Terminar com acoes para aprovacao humana.

## Rotina diaria rapida

```text
Le ads/contexto.md e ads/regras.md. Usa os dados mais recentes em ads/data/. Faz um diagnostico rapido dos ultimos dados de trafego pago. Indica winners, problemas urgentes, riscos e perguntas em aberto. Nao recomendes nenhuma alteracao sem aprovacao humana.
```

## Trace - Analise de performance

```text
Usa Trace para analisar os ultimos 7 dias. Le ads/contexto.md, ads/regras.md e os ficheiros relevantes em ads/data/. Analisa campanhas, conjuntos e anuncios por spend, impressions, reach, frequency, CTR, CPC, CPM, leads, CPA, purchases, ROAS, conversion rate, landing page views e cost per landing page view. Entrega resumo executivo, campanhas vencedoras, campanhas problematicas, anuncios vencedores, anuncios a rever, hipoteses para testar e perguntas em aberto.
```

```text
Usa Trace para comparar os ultimos 7 dias com os 7 dias anteriores. Mostra tendencias, melhorias, quedas, anomalias e possiveis causas. Todas as conclusoes devem ter metricas.
```

## Buck - Plano de orcamento

```text
Usa Buck para criar plano de orcamento. Le ads/contexto.md, ads/regras.md, dados em ads/data/ e diagnosticos recentes. Recomenda onde manter, reduzir, aumentar, pausar manualmente ou testar novo orcamento. Inclui risco, impacto esperado, prioridade e acoes para aprovacao humana. Nao executar alteracoes.
```

```text
Usa Buck para criar um plano conservador de redistribuicao de verba para a proxima semana. Considera CPA maximo, ROAS minimo, volume de dados e risco de aprendizagem. Termina com lista de decisoes que precisam de aprovacao humana.
```

## Cris - Revisao criativa

```text
Usa Cris para rever os criativos. Le ads/contexto.md, ads/regras.md, dados em ads/data/ e materiais em ads/creatives/. Avalia frequencia, CTR, thumbstop rate se existir, hook, clareza da oferta, correspondencia com landing page, saturacao e sinais qualitativos. Entrega criativos fortes, saturados, fracos, hipoteses do porque, melhorias e novos angulos.
```

```text
Usa Cris para identificar fadiga criativa. Procura queda de CTR, aumento de frequency, aumento de CPC/CPA e queda de ROAS. Sugere melhorias e novos angulos para teste, sem publicar nada.
```

## Rex - Relatorio para cliente

```text
Usa Rex para gerar relatorio semanal. Le ads/contexto.md, ads/regras.md, dados em ads/data/ e analises recentes. Escreve em portugues de Portugal. Inclui resumo da semana, principais resultados, o que funcionou, o que nao funcionou, decisoes recomendadas, proximos passos, versao curta para WhatsApp e versao completa para email/documento.
```

```text
Usa Rex para transformar este diagnostico num email profissional para o cliente. Mantem linguagem clara, sem promessas exageradas, e separa factos, hipoteses e recomendacoes.
```

## Ada - Novas copies

```text
Usa Ada para criar novas copies. Le ads/contexto.md, ads/regras.md, landing page e dados de anuncios vencedores. Cria 5 headlines, 5 primary texts, 5 CTAs, 3 variacoes completas de anuncio e matriz de angulos para teste A/B. Foca venda de piscinas, escolha de modelos, catalogo, acabamentos e pedido de orcamento. Usa instalacao apenas como conteudo educativo ou apoio a decisao. Nao prometer nada que a landing page nao sustente.
```

```text
Usa Ada para criar copies focadas em objecoes do publico. Para cada copy, indica objecao trabalhada, angulo, hipotese e metrica de validacao.
```

## Cleo - Briefs criativos

```text
Usa Cleo para criar 3 briefs de video. Le ads/contexto.md, ads/regras.md, landing page, dados em ads/data/ e analises de Cris/Trace, se existirem. Cada brief deve incluir conceito, objetivo, formato, roteiro, hook dos primeiros 3 segundos, cenas, texto no ecra, direcao visual, CTA final e variacoes para teste. Foca venda de piscinas; se criares video de instalacao, enquadra como guia educativo.
```

```text
Usa Cleo para criar briefs de UGC alinhados com a landing page. Criar variacoes por dor, prova, objecao e transformacao. Cada variacao deve ter hook, roteiro curto, cenas e CTA.
```

## Iris - Geracao de imagens

```text
Usa Iris para gerar 3 imagens para Meta Ads a partir dos briefs mais recentes em ads/creatives/. Le ads/contexto.md e ads/regras.md. Cria 3 conceitos visuais, gera 1 imagem por conceito, guarda cada imagem em ads/creatives/ e cria um ficheiro .md ao lado com objetivo, prompt usado, formato, copy sugerida, CTA, hipotese de teste e recomendacao de uso. Nunca publiques nem subas nada para a Meta.
```

```text
Usa Iris para criar um criativo feed 1080x1080 para Instagram. O objetivo e gerar pedidos de orcamento. Mantem coerencia com a landing page, usa texto curto e legivel, contraste forte e CTA claro.
```

```text
Usa Iris para criar um carrossel 1080x1080 sobre modelos de piscinas. Criar estrutura, copy curta por slide, gerar as imagens e guardar tudo em ads/creatives/carousels/.
```

```text
Usa Iris para criar um story/reels cover 1080x1920 com foco em orcamento gratuito. Guardar em ads/creatives/stories/ com o prompt usado e recomendacao de uso.
```

```text
Usa Iris para criar um criativo educativo sobre instalacao de piscinas. Le o guia corrigido em ads/contexto.md. Usa texto curto, portugues de Portugal sem erros, e deixa claro que e conteudo informativo para compradores. Nao vender instalacao como oferta principal.
```

## Plano de acao completo

```text
Le ads/contexto.md e ads/regras.md. Usa Trace para diagnosticar performance, Cris para rever criativos, Buck para plano de orcamento, Ada para novas copies e Cleo para briefs criativos. No final, cria um plano de acao para aprovacao humana e indica onde cada output deve ser guardado: reports, copies, creatives ou action-plans.
```

## Quando faltam dados

```text
Antes de concluir, verifica se faltam dados importantes. Se faltar informacao, lista exatamente que dados faltam, porque importam e como posso exportar ou fornecer esses dados. Nao inventes metricas.
```

## Checklist de aprovacao humana

```text
Cria uma checklist de aprovacao humana para este plano. Separar acoes de baixo, medio e alto risco. Para cada acao, incluir metrica que justifica, impacto esperado, risco e decisao necessaria.
```
