FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y apache2 nodejs npm && \
    a2enmod proxy proxy_http && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY app.js /app/app.js
COPY apache.conf /etc/apache2/sites-available/000-default.conf
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]