# INTRODUÇÃO A TESTES

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=SEMPRE%20PODE%20MELHORAR&color=RED&style=for-the-badge" #vitrinedev/>
</p>

### Tópicos 

- [Descrição](#Descrição)
- [Padrão_MVC](#Padrão_MVC)
- [Funcionalidades](#Funcionalidades)
- [Rotas Utilizadas para testes](#Rotas_utilizadas_para_testes)
- [Roteiro da atividade](#Roteiro_da_atividade)
- [Orientadora](#Orientadora)
- [Autor(a)](#Autor(a))
 
## Descrição

O desafio da semana 15 foi apresentado pela professora Tereza Oliveira.O desafio proposto visava a criação de testes automatizados em API da nossa escolha.
A execução da atividade, proposta se deu na pasta para casa e seguiram os passos descritos a seguir:
## Padrão_MVC

As seguintes pastas foram criadas dentro do SRC para rodar a aplicação:

- Controllers:
   * arquivos: controlesprojController e gamesprojController
- Model 
   * arquivos: consolesprojModel e gamesprojModel
- Routes 
   * arquivos: consoleprojRoute, gamesprojRoute e index.js
- Database
   * arquivo: dbConnectproj
- Test
   *  arquivo: apiconsole.test e apigames.test

Além dos arquivos:
- Arquivo app.js 
- Arquivo server.js
- .env
- .env.example
## Funcionalidades:

A API, permitirá a troca de informações entre a aplicação e o banco de dados(Mongo BD).
As principais funcionalidade da aplicação são a listagem de games e consoles existentes no bd, a filtragem por parametros como:

:heavy_check_mark: `Funcionalidade 1:` Realizar a inclusão de novos games, no banco de dados.

:heavy_check_mark: `Funcionalidade 2:` Armazenar dados do games, como nome, desenvolvedor, data de criação, gênero, descrição e a conexão com o console que também terá suas informações armazenadas no banco.

:heavy_check_mark: `Funcionalidade 3:` Filtragem por parametros específicos como nome, data, desenvolvedor, além da consulta por Id.

:heavy_check_mark: `Funcionalidade 4:` Conexão com banco de dados NoSQL, Mongo DB.


## Rotas_utilizadas_para_testes

- [x] Listar tudos os games(all)
- [x] Listar game: por nome, id
- [x] Criar novo game
- [x] Excluir game
- [x] Listar tudos os consoles(all)
- [x] Listar console: por id, developer
- [x] Criar novo console
- [x] Excluir console

## Roteiro_da_atividade

- [x] Criar pastas e arquitetura do projeto de testes
- [x] Escolher API para criação dos testes
- [x] Baixar dependências
- [x] Criar testes e utilizar jest/supertest


### Dependências utilizadas depois de iniciar o repositório com *npm init -y*:

* npm i express cors
* npm i nodemon -D
* npm i mongoose
* npm install dotenv-safe --save
* npm install eslint
* configuração utilizada eslint-config-airbnb-base
* npm install jest
* npm supertest

## Orientadora

 - [TEREZA OLIVEIRA - LINKEDIN](https://www.linkedin.com/in/tereza-oliveira/)
 - [TEREZA OLIVEIRA - GITHUB](https://github.com/Tereza25)

## Autor(a)
<h4 align="center">
Feito com ❤️ por Roberta Souza 👋🏽!
</h4>

<p>
</p>

<h4 align="center"> 
	🚧  Em construção...🚀  🚧
</h4>









