FROM postgres:13-alpine
WORKDIR /docker-entrypoint-initdb.d
COPY ./.dockerfiles/init_db.sql /docker-entrypoint-initdb.d/
EXPOSE 5432