FROM node:6.3.0-wheezy

ENV NGINX_VERSION 1.7.12-1~wheezy

RUN apt-key adv --keyserver pgp.mit.edu --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62  && \
    echo "deb http://nginx.org/packages/mainline/debian/ wheezy nginx" >> /etc/apt/sources.list  && \
    apt-get update && \
    apt-get install -y ca-certificates nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*  && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    npm install -g webpack

EXPOSE 80

WORKDIR /app

COPY ./package.json /app/

RUN npm install --allow-root

COPY . /app/

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN npm run dev && \
    cp -r ./examples/dist/* /usr/share/nginx/html/ && \
    rm -rf /app

CMD nginx -g "daemon off;"
