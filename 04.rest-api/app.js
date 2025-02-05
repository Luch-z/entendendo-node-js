const express = require("express");
const app = express();

// Middleware
app.use(express.json());

let books = [
    { id: "1", title: "The Lord of the Rings" },
    { id: "2", title: "1984" },
    { id: "3", title: "Don Quixote" },
    { id: "4", title: "One Hundred Years of Solitude" },
    { id: "5", title: "The Little Prince" },
    { id: "6", title: "Crime and Punishment" },
    { id: "7", title: "Animal Farm" },
    { id: "8", title: "Pride and Prejudice" },
    { id: "9", title: "The Hobbit" },
    { id: "10", title: "The Art of War" },
];

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to our bookstore api",
    });
});

app.get("/get", (req, res) => {
    res.json(books);
});

// Find
app.get("/get/:id", (req, res) => {
    const book = books.find((item) => item.id === req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({
            message: "Book not found!",
        });
    }
});

// Add
app.post("/add", (req, res) => {
    const newBook = {
        id: Math.floor(Math.random() * 1000).toString(),
        title: `Book ${Math.floor(Math.random() * 1000)}`,
    };

    books.push(newBook);
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully",
    });
});

// Update
app.put("/update/:id", (req, res) => {
    const findCurrentBook = books.find(
      (bookItem) => bookItem.id === req.params.id
    );
    if (findCurrentBook) {
      findCurrentBook.title = req.body.title || findCurrentBook.title;
  
      res.status(200).json({
        message: `Book with ID ${req.params.id} updated successfully`,
        data: findCurrentBook,
      });
    } else {
      res.status(404).json({
        message: "Book not found",
      });
    }
  });

// Delete
app.delete("/delete/:id", (req, res) => {
    const findIndexOfCurrentBook = books.findIndex(
        (item) => item.id === req.params.id
    );
    if (findIndexOfCurrentBook !== -1) {
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            data: deletedBook[0],
        });
    } else {
        res.status(404).json({
            message: "Book not found",
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});
