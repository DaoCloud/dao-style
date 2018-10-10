FROM node:9.4.0-wheezy

ENV NGINX_VERSION 1.7.12-1~wheezy

RUN apt-key adv --keyserver pgp.mit.edu --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62  && \
    echo "deb http://nginx.org/packages/mainline/debian/ wheezy nginx" >> /etc/apt/sources.list  && \
    apt-get update && \
    apt-get install -y ca-certificates nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*  && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    npm i npm@latest -g

WORKDIR /app

COPY . /app/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

RUN npm install \
    && npm rebuild node-sass \
    && npm run docs \
    && cp -r ./docs/* /usr/share/nginx/html/ \
    && rm -rf /app

CMD nginx -g "daemon off;"