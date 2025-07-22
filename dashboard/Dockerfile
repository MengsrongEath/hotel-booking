FROM node:16-alpine
WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

ENV NODE_ENV production
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]