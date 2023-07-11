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

- :ballot_box_with_check: O usuário deve poder listar todos os personagens ;
- :ballot_box_with_check: O usuário deve poder listar todos os clãs;
- :ballot_box_with_check: O usuário deve poder adicionar e remover dos favoritos os personagens e os clãs;
- :ballot_box_with_check: O usuário deve poder listar os personagens e os clãs favoritos;
- :ballot_box_with_check: O usuário deve poder consultar um personagem, caso o personagem tenha clã, deve ser retornado a informações do clã.
- :ballot_box_with_check: O usuário deve poder consultar um clã, e retornar todos os personagens vinculados ao clã;
- :ballot_box_with_check: O usuário deve poder filtrar o personagem por estado(vivo/morto), sexo, nome, clã (quando disponível);
- :ballot_box_with_check: O usuário deve poder ver o perfil de outro usuário;
- :ballot_box_with_check: O usuário deve poder editar os personagens/clãs, e gerenciar os usuários do sistema (usuário com outro nível de permissão);
- :ballot_box_with_check: O usuário deve poder se cadastrar na aplicação;
- :ballot_box_with_check: O usuário deve poder fazer upload de uma foto de perfil;

## Extra

- :ballot_box_with_check: Logs das requisições para api;
- :ballot_box_with_check: Documentação da API;
- :ballot_box_with_check: Rate limiting;
- :ballot_box_with_check: Exportação dos favoritos em CSV para análise de dados;
- :ballot_box_with_check: Aplicação de testes unitários, integração e e2e;
- :ballot_box_with_check: Uso de algum serviço para arquivos estáticos;
- :ballot_box_with_check: Deploy da aplicação

## Start

Para facilitar o consumo da API, baixe o arquivo **apinaruto.json**, ele contém todas as rotas disponiveis na API, após baixar o arquivo importe no imsomnia.

## Documentação da API

Link da documentação da API com as rotas e modelos de request:
https://api-naruto-w2uc.onrender.com/docs

## Tecnologias

- :star: Node.js
- :star: Typescript
- :star: Prisma ORM
- :star: PostgreSQL
- :star: AWS S3

## Ambiente

- :desktop_computer: Visual Studio Code para codificação
- :desktop_computer: MongoDB Compass para gerenciamento de banco de dados
- :desktop_computer: Insomnia para testes de API
- :desktop_computer: Git para versionamento de código
- :desktop_computer: Spotify para focar
- :desktop_computer: Stack Overflow para debug
