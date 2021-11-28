FROM node:16.13.0-alpine

WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .

EXPOSE 5001

CMD ["npm", "start"]