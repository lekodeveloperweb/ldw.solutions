FROM node:alpine as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn install

COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/src/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80