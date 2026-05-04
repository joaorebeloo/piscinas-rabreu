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

## Assets

Os ficheiros em `public/images` e `public/videos` são placeholders ou caminhos preparados para substituição. Troca por assets finais mantendo os mesmos nomes para evitar alterações no código:

- `public/videos/hero-piscina.mp4`
- `public/images/hero-piscina.jpg`
- `public/images/before-1.jpg`
- `public/images/after-1.jpg`

Os produtos usam imagens em `public/images/placeholders`. Podes substituir por fotografias reais e atualizar `data/products.ts`.

## Leads

O formulário envia dados para `app/api/leads/route.ts`. A rota faz validação mínima e `console.log` dos dados recebidos. O ponto de integração com email, CRM, Google Sheets ou webhook está assinalado no ficheiro.
