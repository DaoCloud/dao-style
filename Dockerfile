FROM node:8.12-alpine as builder

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod

COPY . /app
RUN npm run docs

FROM nginx:alpine

COPY --from=builder /app/docs/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g "daemon off;"
