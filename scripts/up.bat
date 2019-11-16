cd ..
docker-compose -f "docker-compose.yml" up
docker exec -it server-side yarn sequelize db:migrate