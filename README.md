# Employee CI/CD Project

A Dockerized Node.js Employee Management API built for learning DevOps, Docker, Git, and CI/CD concepts.

## Features

* Employee API using Node.js and Express
* Dockerized application
* Docker Compose support
* REST API endpoints
* Git and GitHub integration

## Tech Stack

* Node.js
* Express.js
* Docker
* Docker Compose
* Git
* GitHub

## Project Structure

```text
employee-cicd-project/
│
├── README.md
├── docker-compose.yml
├── .gitignore
│
└── app/
    ├── Dockerfile
    ├── package.json
    └── server.js
```

## Run Project

### Clone repository

```bash
git clone <repo-url>
cd employee-cicd-project
```

### Start using Docker Compose

```bash
docker compose up -d
```

### Access Application

```text
http://localhost:3001
```

### Employee Endpoint

```text
http://localhost:3001/employees
```

## Learning Goals

This project is built to practice:

* Docker image creation
* Containerization
* Docker Compose
* Git workflow
* CI/CD pipeline setup
* DevOps fundamentals
