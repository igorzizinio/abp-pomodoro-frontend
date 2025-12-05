# 📘 ABP Pomodoro — Frontend

Aplicação web de Pomodoro desenvolvida em **React + TypeScript** utilizando **Vite** como ferramenta de build.

## 🚀 Tecnologias Utilizadas

### **Interface**

* **React 19**
* **TypeScript**
* **Vite**
* **TailwindCSS**

### **Ferramentas**

* **ESLint** (padronização de código)
* **npm** para scripts e gerenciamento de dependências

## 📂 Estrutura do Projeto

```bash
abp-pomodoro-frontend/
├── public/                  # Arquivos estáticos
├── src/
│   ├── lib
│   │    └── components/     # Componentes reutilizáveis
│   ├── main.tsx             # Entry point
|   └── App.tsx              # Começo da interface
├── vite.config.ts           # Configuração do Vite
├── package.json             # Configuração do projeto (deps)
└── README.md                # Este mesmo arquivo!
```

## 📥 Pré-requisitos

* **Node.js 22+**
* **npm**

Confirme sua versão:

```bash
node -v
npm -v
```

---

## 🛠️ Instalação

Instale as dependências:

```bash
npm install
```

---

## 🧪 Ambiente de Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Em seguida, abra a URL indicada pelo Vite, por padrão:

➡️ [http://localhost:5173](http://localhost:5173)

## 🏗️ Build de Produção

Gere o bundle otimizado:

```bash
npm run build
```

Os arquivos finais ficarão em:

```bash
dist/
```

## 🔍 Pré-visualizar o Build

Para testar o build localmente:

```bash
npm run preview
```

Isso inicia um servidor local servindo o conteúdo da pasta `dist/`.

---

## 🧹 Lint

Para executar a análise de código:

```bash
npm run lint
```

O ESLint aplicará as regras configuradas no projeto.

## 🧾 Funcionalidades da Aplicação

* ⏱️ Timer com modos:

  * Pomodoro
  * Pausa curta
  * Pausa longa
* ▶️ Controles:

  * Iniciar
  * Pausar
  * Resetar
* 📝 Lista de tarefas integrada

  * Criar tarefas
  * Concluir tarefas
  * Deletar tarefas
* 🌗 Interface moderna com TailwindCSS
* ♻️ Armazenamento local

## 🧑‍🏫 Sobre o Projeto

Este repositório faz parte do **projeto final da disciplina de Frontend (2025.2)** do curso de **Engenharia de Software**. O objetivo é aplicar boas práticas modernas de desenvolvimento web, incluindo:

* componentização
* uso de hooks
* gerenciamento de estado

🫂 **Alunos:** Guilherme Domingos, Igor S. Zizinio.
