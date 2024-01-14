# Use the official Go image with Alpine Linux as the base image
FROM golang:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the local source files to the container's working directory
COPY . .

# Build the Go application
RUN go get -u github.com/gin-gonic/gin
RUN go build -o main

#Expose port
EXPOSE 8080
# Command to run the application
CMD ["/app/main"]
