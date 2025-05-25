# 📱 Projeto Expo App 

## 🔍 O que o projeto faz

Este projeto é um aplicativo mobile desenvolvido com **React Native usando Expo**, focado em navegação entre múltiplas telas com componentes reutilizáveis. O app permite a transição entre diferentes seções, cada uma com funcionalidades específicas. Ele também integra o Firebase, sugerindo que funcionalidades como autenticação, banco de dados ou notificações podem estar presentes ou em desenvolvimento.

---

## ⚙️ Como o projeto é feito (detalhes técnicos)

O aplicativo utiliza as seguintes tecnologias e boas práticas:

- **React Native com Expo**: Facilita o desenvolvimento, teste e deploy de aplicativos para Android e iOS.
- **JavaScript e JSX**: A base do código está em JS, com componentes escritos em JSX, incluindo arquivos como `telaA.jsx`, `TopDropDownMenu.jsx` e `_layout.js`.
- **Firebase**: O arquivo `firebaseConfig.js` conecta ao Firebase, para autenticação e armazenamento de dados.
- **Componentização**: A arquitetura usa componentes reutilizáveis, como menus suspensos (`TopDropDownMenu.jsx`).
- **Sistema de Rotas**: Usa a estrutura de roteamento do Expo Router (`_layout.js`), permitindo navegação entre telas com rotas organizadas por pastas.

---

## 🧪 Como rodar o projeto localmente

Siga os passos abaixo para executar o app no seu computador:

### 1. Pré-requisitos

- [Node.js](https://nodejs.org) (versão 16 ou superior recomendada)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```

### 2. Clonar o projeto

Se ainda não estiver em sua máquina:
```bash
git clone <link-do-repositório>
cd nome-do-projeto
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Rodar o app

```bash
npx expo start
```
