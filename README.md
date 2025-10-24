
# KarmaFlow - Team Feedback & Engagement System / Sistema de Feedback e Engajamento de Equipe



## 🎬 Overview / Visão Geral

**KarmaFlow** is a lightweight, responsive, and ambitious project designed to manage team feedback and engagement. Its core idea is simple: allow team members to submit feedback weekly, either anonymously or publicly, and generate engagement insights through dashboards.

O **KarmaFlow** é um projeto leve, responsivo e ambicioso, projetado para gerenciar feedback e engajamento de equipes. A ideia central é simples: permitir que membros da equipe enviem feedback semanalmente, de forma anônima ou pública, e gerar insights de engajamento através de dashboards.

> ⚠ **Status:** Project is currently non-functional. Critical setup and configuration issues prevent proper execution.  
> ⚠ **Status:** Projeto atualmente não funcional. Problemas críticos de configuração impedem a execução correta.



## 🛠 Stack & Technologies / Tecnologias e Stack

| Layer / Camada        | Technology / Tecnologia                   |
|-----------------------|------------------------------------------|
| Frontend              | Next.js 16.0.0, React, TypeScript       |
| Styling / Estilos     | TailwindCSS, PostCSS, Autoprefixer      |
| Database / Banco      | MongoDB (Secrets for connection)        |
| Server / Backend      | Node.js, Mongoose                       |
| Deployment / Deploy   | Vercel (currently broken)               |
| Version Control       | Git + GitHub                             |



## 🧩 Features / Funcionalidades

- Team-wide feedback submission / Submissão de feedback para toda a equipe  
- Anonymous or public feedback / Feedback anônimo ou público  
- Feedback lists and filters / Listas de feedback com filtros  
- Engagement ranking (planned) / Ranking de engajamento (planejado)  
- Dark theme responsive UI / Interface responsiva com tema escuro  


## 📁 Project Structure / Estrutura do Projeto

```

karmaflow/
│
├── pages/
│   ├── index.js           # Main page / Página principal
│   ├── api/
│   │   └── feedback.js    # API route / Rota da API de feedback
│   └── _app.tsx           # App wrapper for global styles / Wrapper do App para estilos globais
│
├── components/
│   ├── FeedbackForm.js    # Form component / Componente de formulário
│   └── FeedbackList.js    # List component / Componente de lista
│
├── lib/
│   └── db.js              # MongoDB connection / Conexão MongoDB
│
├── styles/
│   └── globals.css        # Tailwind global styles / Estilos globais Tailwind
│
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md

````

---

## 🚨 Known Issues / Problemas Conhecidos

1. **TailwindCSS Not Loading / TailwindCSS não carrega**  
   - `_app.tsx` parsing errors due to newline characters (`\n`)  
   - `globals.css` must be real CSS lines, not escaped strings  

2. **MongoDB Connection / Conexão MongoDB**  
   - `mongoose` module not found if not installed  
   - Requires proper GitHub Secrets: `MONGODB_URI`  

3. **Next.js Turbopack / Lockfile Conflicts**  
   - Multiple lockfiles cause warnings  
   - Potential dependency mismatch  

4. **Deployment Issues / Problemas de Deploy**  
   - Site may load blank page  
   - Styles and API fail on Vercel due to Tailwind/MongoDB misconfiguration  

5. **General Parsing / Parsing Geral**  
   - `_app.tsx` errors: `Expected unicode escape` if incorrect line breaks  

---

## 🛠 Troubleshooting Guide / Guia de Solução de Problemas

### 1️⃣ TailwindCSS

**Symptoms / Sintomas:**  
- Site loads but no styles  
- Errors in `_app.tsx` or `globals.css`

**Fix / Correção:**  
```bash
# Install tailwind + dependencies
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

# Ensure correct globals.css
echo "@tailwind base;\n@tailwind components;\n@tailwind utilities;" > styles/globals.css

# Ensure _app.tsx imports it
cat > pages/_app.tsx <<EOL
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
EOL
````

---

### 2️⃣ MongoDB Connection

**Symptoms / Sintomas:**

* `Module not found: Can't resolve 'mongoose'`
* API routes fail

**Fix / Correção:**

```bash
npm install mongoose
# Set GitHub secret: MONGODB_URI=<your connection string>
```

---

### 3️⃣ Next.js Turbopack Lockfiles

**Symptoms / Sintomas:**

* Warnings: “Detected additional lockfiles”
* Compilation issues

**Fix / Correção:**

* Remove unnecessary `package-lock.json` in subdirectories
* Keep one root `package-lock.json` only

---

### 4️⃣ Running Development / Rodando local

```bash
npm run dev
# Should start server at http://localhost:3000
```

> ⚠ May render page without styles or functionality until Tailwind/MongoDB are fixed

---

## ⚡ Recommended Next Steps / Próximos Passos

1. Fix Tailwind compilation properly / Corrigir compilação Tailwind
2. Verify `_app.tsx` structure / Verificar estrutura do `_app.tsx`
3. Configure MongoDB secrets / Configurar secrets do MongoDB
4. Clean lockfiles / Limpar lockfiles
5. Implement authentication and engagement ranking / Implementar autenticação e ranking de engajamento
6. Add tests and CI/CD pipeline / Adicionar testes e pipeline CI/CD

---

## 📊 Troubleshooting Flow / Fluxo de Solução de Problemas

```text
[Site loads?] -> No -> Fix Tailwind, _app.tsx, globals.css
          |
          Yes
          v
[API working?] -> No -> Check mongoose, MongoDB URI secret
          |
          Yes
          v
[Deployment OK?] -> No -> Clean lockfiles, verify Vercel environment
```

---

## 📌 Notes / Observações

* All global CSS must be in `_app.tsx` / Todo CSS global deve estar em `_app.tsx`
* Do not commit secrets / Não commite secrets no repo
* Use Codespaces or local environment / Use Codespaces ou ambiente local
* Large `.next/` folders are generated; no need to commit / Pastas `.next/` são geradas automaticamente, não commite


## 💡 Contact / Contato

* Maintainer / Mantenedor: Tauã Miguel ([GitHub](https://github.com/tauamiguelofc))
* Status: Experimental, development halted until configuration issues resolved

```
