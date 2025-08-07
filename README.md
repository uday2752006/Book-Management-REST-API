#  Book Management REST API

A simple REST API to manage a list of books using Node.js and Express. This API supports basic CRUD operations (Create, Read, Update, Delete) with in-memory data storage.

---

##  Technologies Used

- Node.js
- Express.js
- Postman (for testing)

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
2. Install Dependencies
Make sure you have Node.js installed. Then install Express:

bash
Copy
Edit
npm install express
3. Run the Server
bash
Copy
Edit
node index.js
The server will start at:

arduino
Copy
Edit
http://localhost:3000
 . API Endpoints
 . GET /
Description: Welcome message
Response:

json
Copy
Edit
"Welcome to Library..."
. GET /books
Description: Fetch all books
Response: Array of book objects

. GET /books/:id
Description: Fetch a single book by ID
Example: /books/101

. POST /saveBook
Description: Add a new book
Body: (raw JSON)

json
Copy
Edit
{
  "bookId": 106,
  "bookName": "New Book",
  "author": "Author Name",
  "publisher": "Publisher Name",
  "year": "2025"
}
. PUT /booksupdate/:id
Description: Update a book by ID
Body: (raw JSON with updated fields)

. DELETE /deletebook/:id
Description: Delete a book by ID

. Sample Book Object Format
json
Copy
Edit
{
  "bookId": 101,
  "bookName": "Clean Code",
  "author": "Robert C. Martin",
  "publisher": "Prentice Hall",
  "year": "2008"
}
. Testing
Use Postman to test the API endpoints:

Set the request type (GET, POST, etc.)

For POST and PUT, go to the Body tab → select raw → choose JSON

. Folder Structure
pgsql
Copy
Edit
book-api/
├── index.js        # Main server file
├── package.json    # Project metadata & dependencies
 Notes
This project uses in-memory storage (all data will reset when server restarts).

Great for learning the basics of REST API and Express.js.

 Author
Created as part of a web development internship project.
[Uday Devu]
