# Use the official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the Next.js project files to the container
COPY . .

# Build the Next.js project
RUN npm run build

# Use a smaller image to serve the production build
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the port on which the app will run
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
