FROM node:20

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]