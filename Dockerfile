FROM nginx:latest
WORKDIR /app
COPY . .
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

# RUN rm -rf /usr/share/nginx/html

# COPY . /usr/share/nginx/html

# EXPOSE 3006

# CMD nginx -g 'daemon off;'



