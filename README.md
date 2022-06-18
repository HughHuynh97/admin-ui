Prerequisites

Before you continue, ensure you meet the following requirements:

* You have installed Docker.
* You have installed node and npm.

## Step 1: Build Docker ##
    docker build -t trivip002/admin-ui .
## Step 4: create a network ##
    docker network create spring-net
## Step 5: link network with mysql ##
    docker network connect internal-network mysqldb
## Step 6: Run Docker Container ##
    docker run -p 4200:4200/tcp --name angular-app --net internal-network trivip002/admin-ui:latest
