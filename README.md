# 🧠 TLDRify — Resumo Automático de Artigos

TLDRify é uma extensão para navegadores que **extrai e resume automaticamente artigos da web**, ajudando você a entender conteúdos longos de forma rápida, clara e objetiva.

Ideal para estudantes, pesquisadores e curiosos que querem **menos rolagem e mais compreensão**.

---

## ✨ Funcionalidades

* 📄 Extração inteligente de conteúdo (foco em artigos reais)
* 🧠 Geração automática de resumos por relevância de palavras
* 🎚️ Múltiplos níveis de resumo:

  * TL;DR
  * Resumo médio
  * Resumo detalhado
* 🪟 Interface simples, limpa e intuitiva
* 💾 Estrutura pronta para histórico de resumos

---

## 🧩 Tecnologias utilizadas

* JavaScript (ES6+)
* HTML5 & CSS3
* Chrome Extensions API (Manifest V3)
* NLP básico (frequência de palavras)

---

## 📁 Estrutura do projeto

```
resumo-artigos/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
├── style.css
└── utils/
    ├── textCleaner.js
    └── summarizer.js
```

---

## 🚀 Como instalar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/tldrify.git
```

2. Abra o navegador Chrome ou Edge e acesse:

```
chrome://extensions
```

3. Ative o **Modo do desenvolvedor**
4. Clique em **Carregar sem compactação**
5. Selecione a pasta do projeto

Pronto 🎉 A extensão já estará funcionando.

---

## 🧠 Como funciona

1. A extensão identifica e extrai o texto principal da página
2. O conteúdo é limpo e normalizado
3. Um algoritmo de pontuação seleciona as frases mais relevantes
4. O resumo é exibido no popup conforme o nível escolhido

---

## 🌱 Próximos passos (roadmap)

* 🤖 Integração com APIs de IA
* 📝 Resumos em bullet points
* ❓ Geração automática de perguntas
* ⭐ Favoritar e exportar resumos
* ☁️ Sincronização entre dispositivos

---

## 🎯 Objetivo do projeto

Este projeto foi criado com foco em:

* aprendizado prático de extensões para navegador
* arquitetura modular em JavaScript
* processamento básico de linguagem natural
* construção de um produto real para portfólio

---

## 📜 Licença

Este projeto está sob a licença MIT.

---

✨ *Leia menos. Entenda mais.*
