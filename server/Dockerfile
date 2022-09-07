FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copys the directory
COPY . .
COPY production.env ../.env

# Install app dependencies
RUN yarn
# Build production version of the application
RUN yarn build

EXPOSE 5000
CMD [ "node", "build/app.js" ]