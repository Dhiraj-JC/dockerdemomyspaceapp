# specific base image
FROM node:alpine

# specific working directory
WORKDIR /app


# Copy project dependencies file
COPY ./package.json .


# Install dependencies
RUN npm install


# Build project
RUN npm build


# Startup command
CMD ["npm", "start"]