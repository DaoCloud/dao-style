FROM node:8.12-alpine as builder

WORKDIR /app
COPY . /app
RUN npm install --only=prod \
    && npm run docs

FROM nginx:alpine

COPY --from=builder /app/docs/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g "daemon off;"
