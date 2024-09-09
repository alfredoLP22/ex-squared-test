# Project Name

## Description

This project is a Node.js application built with Express that interacts with external APIs, uses Redis for caching, and MongoDB for data storage. It includes Docker configuration for containerization.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Without Docker](#without-docker)
  - [With Docker](#with-docker)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Prerequisites

- Node.js 18 or higher
- Docker (if using Docker)
- Docker Compose (if using Docker)

## Setup Instructions

### Without Docker

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

   ```

2. Install dependencies:
   npm install

3. Set environment variables:

Create a .env file in the root directory of your project and add the following environment variables:

REDIS_HOST=localhost
REDIS_PORT=6379
MONGO_URI=
VEHICLE_API_BASE_URL=

4. Run the application:
   npm run dev

With Docker

RENAME THE FILE docker-compoose.dev to docker-compoose and set the env variables 

1. Build and start the containers:
   docker-compose up --build

This command will build the Docker images and start the containers defined in docker-compose.yml.

2. Access the application:

Open your postman and try in the port are you using.

Configuration
Environment Variables
REDIS_HOST: The hostname or IP address of the Redis server (default is redis when using Docker).
REDIS_PORT: The port on which Redis is running (default is 6379).
MONGO_URI: The URI for connecting to MongoDB 
VEHICLE_API_BASE_URL: The base URL for the vehicle API (e.g., https://vpic.nhtsa.dot.gov/api/vehicles).
These variables can be configured in the .env file for local development or in the Docker Compose configuration for containerized environments.

API Endpoints
Get All Makes
URL: /api/makes
Method: GET
Description: Fetches all vehicle makes. The response is cached in Redis for improved performance.
Get Vehicle Types by ID
URL: /api/vehicle-types/:id
Method: GET
Description: Fetches vehicle types for a specific make ID. The data is retrieved from the API and transformed from XML to JSON.
Error Handling
Ensure Redis and MongoDB are running. For Docker, check that the containers are up and running.
If you encounter errors, check the logs for more information:
For Docker: Use docker-compose logs to view logs.
For Local Development: Check the terminal output where you run the application.