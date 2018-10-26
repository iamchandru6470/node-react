FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN cd client && npm install

RUN npm run build

RUN cd ..

CMD ["npm", "start"]

EXPOSE 3000