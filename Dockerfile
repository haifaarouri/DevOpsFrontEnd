FROM node:16.16-alpine AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install --force
RUN npm run build --prod
FROM nginx:latest AS ngi
COPY --from=build /dist/instructor-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
