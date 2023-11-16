### STAGE 1: BUILD ###
FROM node:16.16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build --prod

### STAGE 2: RUN ###
FROM nginx:latest AS ngi
COPY --from=build /app/dist/crudtuto-Front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
