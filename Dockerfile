FROM andrewstech/alexa-baseplate:latest
WORKDIR /app
COPY entrypoint.sh entrypoint.sh
RUN mkdir /data
COPY data.sh data.sh
RUN chmod 777 entrypoint.sh
RUN chmod 777 data.sh
COPY /thealphavideo /app
EXPOSE 5000
ENV FLASK_ENV=development
ENV FLASK_APP=__main__.py
ENV public=false
ENV subdomain=nope
RUN chmod 777 /app/entrypoint.sh
COPY supervisord.conf /etc/supervisor/supervisord.conf
ENTRYPOINT ["./entrypoint.sh"]
