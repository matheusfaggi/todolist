
# TodoList --- Introdução

O intuito desta aplicação é realizar o desafio proposto em uma entrevista na empresa BR Media Group.
Implantei no projeto alguns códigos, baseados em cursos e vídeo-aulas que venho assistindo, e que com o Docker estou tentando criar uma aplicação completa.

#### Desafio
Criar uma lista de tarefas, com CRUD completo.

#### Tasklist
- [x] criar API com Sequelize
- [x] configurar arquivos Docker (docker-compose e Dockerfile)
- [ ] implementar front-end (microservice com webpack)
- [ ] implementar autenticação de usuários
- [ ] segmentar lista de tarefas por usuário

####  Ferramentas/tecnologias utilizadas
* node
* nodemon
* express
* webpack
* postgresql
* sequelize
* docker
* ES6
* sucrase (babel)

 Como subir a aplicação?
---
#### Requisitos
- Docker instalado no computador

#### Passo a passo
Clone o repositório utilizando a função recursiva, para seja feita a copia de todos os submodules da aplicação.
```
git clone --recursive -j8 https://github.com/matheusfaggi/todolist
```
Depois é só executar os arquivos de acordo com a função que você deseja executar.
Não esquecer de realizar a migration para que a API funcione.

## Arquivos .bat

* /scripts/up.bat
* /scripts/restart.bat
* /scripts/down.bat
* /scripts/migrations.bat

#### Rotas
Afim de esclarecer qual a finalidade de cada rota, segue o glossário das rotas disponíveis até então.

* GET/tasks - retorna todas as tarefas cadastradas no banco
* POST/task - insere nova tarefa no banco de dados
	* Body (parametros necessários)
		* task_description: STRING
* PUT/task - altera tarefa especificada via body
	* Body (parametros necessários)
		* id: INTEGER
		* task_description: STRING
		* is_done: BOOLEAN
* DELETE/task - deleta tarefa especificada via body
	* Body (parametros necessários)
		* id: INTEGER

Considerações finais
---
No decorrer do desenvolvimento do projeto, aprendi muito sobre Docker, como manipula-lo e configurar um ambiente de desenvolvimento containerizado. Ademais conheci de perto um ORM (Sequelize), que fez com que a qualidade do meu código melhorasse consideravelmente.

O projeto ainda não está concluído e acredito que tenho muito a aprender com ele.



