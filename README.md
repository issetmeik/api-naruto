## Teste-Técnico(Semantix)

João tem um sistema legado, onde tem uma base de usuários que gostaria de migrar para o novo sistema. O novo sistema que o João idealizou é um Wikipédia de uma anime que ele é muito fã (Naruto).

## Indice

- [Teste Técnico-Semantix](<#Teste-Técnico(Semantix)>)
- [Índice](#indice)
- [Premissas Básicas](#premissas-básicas)
- [Start](#start)
- [Tecnologias](#tecnologias)
- [Ambiente](#ambiente)

## Premissas-Básicas

- Importação da base de usuários do sistema legado;
- Importação dos personagens e dos clãs;

## Requisitos funcionais

- O usuário deve poder listar todos os personagens;
- O usuário deve poder listar todos os clãs;
- O usuário deve poder adicionar e remover dos favoritos os personagens e os clãs;
- O usuário deve poder listar os personagens e os clãs favoritos;
- O usuário deve poder consultar um personagem, caso o personagem tenha clã, deve ser retornado a informações do clã.
- O usuário deve poder consultar um clã, e retornar todos os personagens vinculados ao clã;
- O usuário deve poder filtrar o personagem por estado(vivo/morto), sexo, nome, clã (quando disponível);
- O usuário deve poder ver o perfil de outro usuário;
- O usuário deve poder editar os personagens/clãs, e gerenciar os usuários do sistema (usuário com outro nível de permissão);
- O usuário deve poder se cadastrar na aplicação;
- O usuário deve poder fazer upload de uma foto de perfil;

## Extra

- Logs das requisições para api;
- Documentação da API;
- Rate limiting;
- Exportação dos favoritos em CSV para análise de dados;
- Aplicação de testes unitários, integração e e2e;
- Uso de algum serviço para arquivos estáticos;
- Deploy da aplicação

## Características

- Integrando o sistema Mockapi, recebendo todos os usuários.
- Integrando com mockapi, recebendo endereços de cada usuário.
- Integrando com mockapi, recebendo contatos de cada usuário.
- Processando os usuários, com seus endereços, e persistindo no MONGODB.

## Start

Para facilitar o consumo da API, o arquivo ![alt text](./apinaruto.json), contém todas as rotas disponiveis na API, baixo o arquivo e importe no imsomnia.

1. api/health:
   ![alt text](./imgs/health.jpeg)
2. api/users:
   ![alt text](./imgs/users.jpeg)
3. A rota **api/users** suporta parâmetros de paginação, que podem ser utilizados através da queryString para realizar a listagem completa de dados.
4. Para melhor funcionamento do sistema recomendamos que busquem apenas 10 usuários por vez.

## Tecnologias

- :star: Node.js
- :star: Nestjs
- :star: Moongose
- :star: MongoDB Atlas
- :star: Mockapi

## Ambiente

- :desktop_computer: Visual Studio Code para codificação
- :desktop_computer: MongoDB Compass para gerenciamento de banco de dados
- :desktop_computer: Insomnia para testes de API
- :desktop_computer: Git para versionamento de código
- :desktop_computer: Spotify para focar
- :desktop_computer: Stack Overflow para debug
