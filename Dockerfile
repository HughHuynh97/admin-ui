FROM node:17.3.1-slim as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
FROM nginx:latest
COPY --from=build /app/dist/app-admin /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
