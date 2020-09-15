FROM node:alpine as build-stage
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --check-files
COPY . .
RUN yarn dev:build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html