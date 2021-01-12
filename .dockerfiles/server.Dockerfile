FROM node:14.4-alpine
WORKDIR /usr/server
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

COPY ./server/* ./
RUN npm install
COPY ./server/src ./src

EXPOSE 9000
CMD ["npm", "start"]