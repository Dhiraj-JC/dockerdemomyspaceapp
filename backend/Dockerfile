# specific base image
FROM node:alpine

# working directory
WORKDIR /app


# Copy the file required to install project dependencies
COPY ./package.json .


# Install the project dependencies
RUN npm install


# Copy the source code
COPY . .


# Startup command
CMD ["npm", "start"]
