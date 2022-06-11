FROM node:17.3.1-slim as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/app-admin /usr/share/nginx/html
