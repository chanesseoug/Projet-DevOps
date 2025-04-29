FROM node:18-slim AS build
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get install -y openssl \
    && npm install
COPY . .
RUN npx prisma generate
FROM node:18-slim
WORKDIR /app
RUN apt-get update && apt-get install -y openssl
COPY --from=build /app /app
RUN npm install --omit=dev
EXPOSE 5000
CMD ["npm", "run", "dev"]
