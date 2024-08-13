# Presto

A RESTful API built with Express.js for managing presentations and slides. This API supports CRUD operations for presentations and slides, and is equipped with CORS support for cross-origin requests.

## Features

- **Presentation Management**: Create, retrieve, update, and delete presentations.
- **Slide Management**: Create, retrieve, update, and delete slides.
- **CORS Support**: Configured to allow requests from specific origins.
- **Error Handling**: Basic error handling for various operations.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (preferably version 14 or later).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DavidOhr96/presto-presentation-api.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd presto-presentation-api
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

### Configuration

1. **Environment Variables**

   Make sure you set up any required environment variables for your application. If you have a `.env` file, ensure it's properly configured.

2. **Database Connection**

   Ensure that your `db.service.mjs` file is configured to connect to your MongoDB instance.

### Usage

1. **Start the Server**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

2. **API Endpoints**

   - **Presentation Routes**
     - `POST /api/pres` - Add a new presentation
     - `GET /api/pres/:title` - Retrieve a presentation by title
     - `PUT /api/pres/:title` - Update a presentation by title
     - `DELETE /api/pres/:title` - Delete a presentation by title
     - `GET /api/pres` - Retrieve all presentations

   - **Slide Routes**
     - `POST /api/slide` - Add a new slide
     - `PUT /api/slide/:id` - Update a slide by ID
     - `DELETE /api/slide/:id` - Delete a slide by ID

### Error Handling

The API includes basic error handling, returning appropriate status codes and error messages for failed operations.



### Contact

For any questions or inquiries, please contact [our.david96@gmail.com](mailto:our.david96@gmail.com).
