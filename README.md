# 🧠 KarmaFlow

Sistema de **feedback anônimo** para equipes.  
Construído com **Next.js**, **MongoDB** e **TailwindCSS**, com tema escuro e deploy instantâneo no **Codespaces**.  
Sem segredos no código — tudo gerenciado via **GitHub Secrets**.

---

## 🚀 Funcionalidades
- Envio de feedback anônimo ou identificado  
- Listagem dinâmica de mensagens  
- Visual escuro, responsivo e limpo  
- Integração com **MongoDB Atlas** via Secrets  
- Sem dependências desnecessárias

---

## ⚙️ Variáveis de ambiente (Secrets)

| Nome         | Descrição                  |
|---------------|----------------------------|
| `MONGODB_URI` | URI completa do seu MongoDB |

Configure em **Settings → Secrets → Actions** do repositório.

---

## 💻 Rodar no Codespaces
```bash
npm install
npm run dev
