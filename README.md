# Simple NestJS Social Media Server

... for practicing NestJS and TypeScript

This Repo should contain the same features like the [Symfony Version](https://github.com/ColiZei/symfony-social-media)

Why two repositorys?

I'd would like to imporove my Symfony and NestJS skills.
You too? Feel free to join!

# Contribute

Please use [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.html) and create Pull-Requests

# Start Database

```bash
docker-compose up -d
```

Visit phpMyAdmin at `http://localhost:8088/`

# Stop Database

```bash
docker-compose down
```

## Installation

```bash
$ npm install
$ npm db:install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## NestJS Documentation

[Nest](https://github.com/nestjs/nest) framework.
