# todolist

O intuito desta aplicação é realizar o desafio proposto em uma entrevista na BR MEDIA Group.
Implantei no projeto alguns códigos, baseados em cursos e video-aulas que venho assistindo, e que com o Docker
estou tentando criar uma applicação completa.
#### desafio
Criar uma lista de tarefas, com CRUD completo.

### tasklist
- [x] criar API com Sequelize
- [x] configurar arquivos Docker (docker-compose e Dockerfile)
- [ ] implementar front-end (microservice com webpack)



###  Ferramentas/tecnologias utilizadas
* node
* nodemon
* express
* webpack
* postgres
* sequelize
* docker
* ES6
* sucrase

### Como subir a aplicação?

#### Requisitos
- Docker instalado no computador

Entre na pasta do projeto e digite os seguinte comandos
```
docker-compose up -d --build
docker exec -it <id container todolist_node> bash
root@c11f42b3bd8e:/app# yarn sequelize db:migrate
```




