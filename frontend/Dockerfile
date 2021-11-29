FROM node:16.13.0-alpine as builder

WORKDIR /frontend
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /frontend/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]