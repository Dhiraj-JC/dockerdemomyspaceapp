# Stage 1 : Build

FROM node:alpine AS build

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2 : Serve

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]