const express = require('express') 
var app = express(); 
app.use(express.json()); 
  
app.use((req, res, next) => { 
    const now = new Date(); 
    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`); 
    next(); // pass control to the next middleware or route 
}); 
  
const books = [ 
    { bookId: 101, bookName: 'Clean Code', author: 'Robert C. Martin', 
publisher: 'Prentice Hall', year: '2008' }, 
    { bookId: 102, bookName: 'You Don’t Know JS', author: 'Kyle 
Simpson', publisher: 'O’Reilly Media', year: '2014' }, 
    { bookId: 103, bookName: 'Eloquent JavaScript', author: 'Marijn 
Haverbeke', publisher: 'No Starch Press', year: '2018' }, 
    { bookId: 104, bookName: 'JavaScript: The Good Parts', author: 
'Douglas Crockford', publisher: 'O’Reilly Media', year: '2008' }, 
    { bookId: 105, bookName: 'Design Patterns', author: 'Erich Gamma 
et al.', publisher: 'Addison-Wesley', year: '1994' } 
  
] 
  
app.get('/',(req,res)=>{ 
    res.send("Welcome to Library...") 
}) 
  
/** Get all the books */ 
app.get('/books',(req,res)=>{ 
    res.json(books) 
}) 
  
/* Get Book By ID*/ 
app.get('/books/:id',(req,res)=>{ 
    const bookID = parseInt(req.params.id) 
    const book = books.find( b => b.bookId === bookID); 
  
    if(book) 
        res.json(book) 
                                                                                                                                                     Page No :  
 
    else 
        res.status(404).send("Book Not Found...") 
  
}) 
app.post('/saveBook', (request, response) => { 
    const book = request.body; 
    books.push(book); 
    response.status(200).send("Book Details Added successfully"); 
}); 
app.put('/booksupdate/:id',(req,res)=>{ 
   const bookId = parseInt(req.params.id); 
  const index = books.findIndex(b => b.bookId === bookId); 
  if (index !== -1) { 
    books[index] = { ...books[index], ...req.body }; 
    res.json(books[index]); 
  } else { 
    res.status(404).json({ message: 'Book not found' }); 
  }   
}); 
  
//  DELETE a book by ID 
app.delete('/deletebook/:id', (req, res) => { 
  const bookId = parseInt(req.params.id); 
  const index = books.findIndex(b => b.bookId === bookId); 
  if (index !== -1) { 
    const deleted = books.splice(index, 1); 
    res.json(deleted[0]); 
  } else { 
    res.status(404).json({ message: 'Book not found' }); 
  } 
}); 
  
var http = require('http') 
const server = http.createServer(app) 
server.listen(3000,(req,res)=>{ 
    console.log("Server started in port 3000") 
}) 