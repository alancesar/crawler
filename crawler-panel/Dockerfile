FROM node as webpack
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN npm i
RUN npm run build

FROM nginx
COPY --from=webpack /usr/app/dist /usr/share/nginx/html
EXPOSE 80
