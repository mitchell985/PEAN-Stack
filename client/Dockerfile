# stage 1
FROM node:16 as node
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/todo /usr/share/nginx/html