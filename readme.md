# Projeto Node.js

Este projeto utiliza Node.js, Yarn para gerenciar dependências e Docker Compose para rodar containers necessários, como banco de dados e outras dependências.

## Pré-requisitos

- **Node.js** e **Yarn** instalados na máquina
- **Docker** e **Docker Compose** configurados

## Instruções para executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

```bash
yarn install
```

### 3. Configurar as variáveis de ambiente

```bash
SECRET_KEY=
API_PORT=
```

### 4. Iniciar os containers Docker

```bash
docker-compose up -d
```

### 5. Rodar o projeto

```bash
yarn start
```

## Sobre o projeto

### Tecnologias Utilizadas

```
- Node.js
- Typescript
- Yarn
- Docker & Docker Compose
- MongoDb
- JWT

```
