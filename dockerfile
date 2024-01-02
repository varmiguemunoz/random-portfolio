FROM node:18.15.0

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src"]

RUN npm run build

RUN npm run start

EXPOSE 80

CMD ["node",  "npx", "nodemon",  "src/index.js"]







