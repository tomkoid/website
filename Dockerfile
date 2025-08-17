# Output directory (adapter-static default: /app/build)
# This image just contains the built site

FROM node:24.6.0-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build (requires @sveltejs/adapter-static)
COPY . .
RUN npm run build
