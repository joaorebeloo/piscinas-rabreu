# Piscinas R Abreu

Landing page premium em Next.js para captação de pedidos de orçamento e apresentação de catálogo de piscinas, coberturas e sistemas de aquecimento.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Desenvolvimento local

```bash
npm install
npm run dev
```

Depois abre `http://localhost:3000`.

## Configuração Para Produção

Define estas variáveis no ambiente de deploy:

- `NEXT_PUBLIC_SITE_URL`: domínio final HTTPS, por exemplo `https://piscinasrabreu.pt`.
- `LEAD_WEBHOOK_URL`: endpoint HTTPS que recebe a lead por `POST`.
- `LEAD_WEBHOOK_SECRET`: bearer token opcional enviado no header `Authorization`.

Sem `LEAD_WEBHOOK_URL`, a rota de leads devolve erro em produção para não simular sucesso sem entregar o pedido. Em desenvolvimento local, a rota aceita o pedido e regista apenas metadados sem dados pessoais.

## Assets

Os ficheiros em `public/images` e `public/videos` são placeholders ou caminhos preparados para substituição. Troca por assets finais mantendo os mesmos nomes para evitar alterações no código:

- `public/videos/hero-piscina.mp4`
- `public/images/hero-piscina.jpg`
- `public/images/before-1.jpg`
- `public/images/after-1.jpg`

Os produtos usam imagens em `public/images/placeholders`. Podes substituir por fotografias reais e atualizar `data/products.ts`.

## Leads

O formulário envia dados para `app/api/leads/route.ts`. A rota valida origem, tipo e tamanho do pedido, aplica rate limit básico, rejeita honeypot de bots, limita tamanho dos campos e envia a lead para o webhook configurado antes de responder com sucesso.
