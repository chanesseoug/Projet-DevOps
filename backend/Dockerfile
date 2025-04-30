# Étape 1 : build avec dependencies Prisma
FROM node:18-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Générer Prisma client
RUN npx prisma generate

# Étape 2 : image finale (toujours Node slim)
FROM node:18-slim

# Installer openssl pour Prisma
RUN apt-get update && apt-get install -y openssl

WORKDIR /app
COPY --from=builder /app .

CMD ["node", "index.js"]
