# Como Instalar este Projeto

## Pré Requisito
 - Ter Instalado o node.js na sua máquina
 - Pode realizar o download por aqui: https://nodejs.org/en/download/

## Após ter instalado node

1º passo: clonar o projeto do github
2º passo: npm install para installar todas as depencias do projeto

## Váriaveis de Ambiente 
 - Nesses testes tratamos de conteúdos sensiveis, então se viu a necessidade de criar as variaveis de ambiente
 - Na raiz do projeto, criar o arquivo com o nome: cypress.env.json;
 - Neste arquivo deve ser adicionadas o padrão de estrutura apresentada no arquivo "cypress.env.exemple.txt"

 TIMEOUT: deve passar um tempo em milisegungos, exemplo: 10000, para aguardar em até 10s
 EMAIL: deve ter uma conta pré criada, informar seu email aqui
 SENHA: informar a senha correta do respectivo email

 OBS: Fique tranquilo(a), este arquivo estará visivel apenas em sua máquina 

# Como executar os testes

## Modo Open
    - Para acompanhar a execução, no terminal execute o comando:

    ```bash
    npm run test:open
    ```
    

## Modo Headless
- Para acompanhar a execução, no terminal execute o comando:
    
    ```bash
    npm run test:headless
    ```

# Cenários contemplados nessa automação
![login](./readme-img/login.png)

![flow](./readme-img/flow.png)

![allspecs](./readme-img/allspecs.png)
