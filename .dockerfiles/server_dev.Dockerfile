FROM node:14.4
WORKDIR /usr/server
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

EXPOSE 9000
CMD ["npm", "run-script", "dev"]