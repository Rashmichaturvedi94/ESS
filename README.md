# ESS

The project will provide the platform to learner which will be available around the clock over the internet using mobile application. Students/learner will be able to access the materials available in the system uploaded by authors/educational institutions.the System will provide the post-secondary education which will be available in english language.

### Development Setup

The application is using React Native CLI. The code editor used is [Visual Studio Code](https://code.visualstudio.com/)

# Requirements

Docker Desktop software 3.3.3 [download link](https://www.docker.com/products/docker-desktop)

# Building instructions

Run command

```
docker-compose up --build
```

to start servers.

Run command

```
docker system prune -a
```

to cllear all image, vol, container and build new

backend will be available on
http://localhost:8000
swagger - http://localhost:8000/api/swagger
frontend - http://localhost:3000
