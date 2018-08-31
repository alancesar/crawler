FROM node
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN npm i
CMD ["npm", "start"]
EXPOSE 3000
