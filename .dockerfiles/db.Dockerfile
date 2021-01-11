FROM postgres:13
RUN apt-get update
WORKDIR /docker-entrypoint-initdb.d
COPY ./.dockerfiles/init_db.sql /docker-entrypoint-initdb.d/
EXPOSE 5432