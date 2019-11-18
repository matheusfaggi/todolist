cd ..
docker exec -it server-side yarn sequelize db:migrate
docker exec -it server-side yarn sequelize seed:generate