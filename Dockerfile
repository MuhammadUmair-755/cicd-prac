# ============================================
# Stage 1: Build the React app with Node
# ============================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency manifests first so this layer is cached
# unless package.json / package-lock.json change
COPY package.json package-lock.json ./

# Clean, reproducible install based on the lockfile
RUN npm ci

# Copy the rest of the source code
COPY . .

# Produce the static production bundle in /app/dist
RUN npm run build

# ============================================
# Stage 2: Serve the static files with Nginx
# ============================================
FROM nginx:1.27-alpine

# Nginx config with SPA fallback (React Router routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the built output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
