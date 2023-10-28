# Base stage for development
FROM node:20.8-bullseye-slim as dev

WORKDIR /app

COPY package*.json ./

# Install development dependencies
RUN npm install

COPY . .

# Start your application in development mode
RUN npm run dev

# Production stage
FROM node:20.8-bullseye-slim as production

WORKDIR /app

COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

COPY . .

# Build your production-ready application
RUN npm run build

# Start your application in production mode
CMD ["npm", "start"]

# Choose the stage based on NODE_ENV
ARG NODE_ENV

# Use development stage if NODE_ENV is not 'production'
FROM development as builder
# This is just a placeholder stage to satisfy the syntax

# Use production stage if NODE_ENV is 'production'
FROM production as final
