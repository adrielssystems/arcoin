# ---- Stage 1: Build ----
FROM node:20-alpine AS build

WORKDIR /app

# Copy the web folder context
COPY web/ ./

# Install dependencies and build
RUN npm ci
RUN npm run build

# ---- Stage 2: Serve ----
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
