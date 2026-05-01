# Mentoria Mental para Atletas 🏅

Landing page para venda de mentoria online em psicologia do esporte.

---

## Sobre o projeto

Página criada para apresentar e comercializar a mentoria online de 1 mês voltada para atletas, desenvolvida com foco em design premium e responsividade para celular e notebook.

---

## Tecnologias

- **React** — biblioteca para construção da interface
- **Vite** — ferramenta de build e servidor de desenvolvimento
- **Tailwind CSS** — estilização utilitária
- **Google Fonts** — tipografia (Cormorant Garamond + DM Sans)

---

## Como rodar o projeto

**1. Instale as dependências:**
```bash
npm install
```

**2. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

**3. Acesse no navegador:**
```
http://localhost:5173
```

---

## Estrutura de arquivos

```
src/
├── App.jsx                  # Componente raiz
├── index.css                # Importação do Tailwind
├── main.jsx                 # Ponto de entrada da aplicação
└── mentoria-psicologa.jsx   # Página principal (edite aqui)
```

---

## Como personalizar

Abra o arquivo `src/mentoria-psicologa.jsx` e atualize:

- **Link do WhatsApp** — localize `https://wa.me/` e adicione o número com DDD e DDI, ex:
  ```
  https://wa.me/5548999999999
  ```
- **Nome no footer** — no final do arquivo, substitua o texto do rodapé pelo nome da psicóloga
- **Título da aba** — no `index.html`, edite a tag `<title>`

---

## Seções da página

| Seção | Descrição |
|-------|-----------|
| Hero | Apresentação, preço e botão de ação principal |
| Como funciona | Os 9 itens incluídos na mentoria |
| Para quem é | Posicionamento e habilidades trabalhadas |
| CTA final | Chamada para contato via WhatsApp |

---

## Informações da mentoria

- **Duração:** 1 mês
- **Valor:** R$ 850,00 via PIX
- **Parcelamento:** via link do Mercado Pago (cartão de crédito)
- **Plataforma:** Google Meet (4 encontros de 1h)
- **Suporte:** WhatsApp durante 1 mês
