# Simple NestJS Social Media

... for practicing NestJS and TypeScript

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
