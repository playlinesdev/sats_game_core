# Base image
FROM node:alpine3.10

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]


# FROM node:alpine3.10 AS builder

# WORKDIR /app

# COPY ./dist ./

# RUN npm run build

# FROM node:alpine3.10

# WORKDIR /app

# COPY --from=builder ./app /app

# CMD [ "node", "main" ]
# EXPOSE 3000