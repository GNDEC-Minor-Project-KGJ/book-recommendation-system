import { useEffect, useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import "./App.css";

function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookGenre, setBookGenre] = useState("Non-Fiction");
  const [books, setBooks] = useState([]);

  const handleTitleClick = async () => {
    axios
      .post(
        "http://127.0.0.1:5000/content-based-filtering/recommend-by-title",
        {
          bookTitle,
          bookGenre,
        }
      )
      .then((response) => {
        setBooks(response.data.data);
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDescClick = async () => {
    axios
      .post(
        "http://127.0.0.1:5000/content-based-filtering/recommend-by-description",
        {
          bookTitle,
          bookGenre,
        }
      )
      .then((response) => {
        setBooks(response.data.data);
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="m-6 p-6 flex flex-col justify-center items-center">
        <Input
          size="lg"
          variant="static"
          label="Book Title"
          placeholder="Harry Potter"
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <div className="flex w-full justify-center">
          <Button
            onClick={handleTitleClick}
            className="mt-6 mx-2"
            variant="gradient"
            size="lg"
          >
            Recommend by title
          </Button>
          <Button
            onClick={handleDescClick}
            className="mt-6 mx-2"
            variant="gradient"
            size="lg"
          >
            Recommend by description
          </Button>
        </div>
      </div>
      <div className="m-6 p-6 flex flex-row flex-basis-auto justify-center items-center flex-wrap">
        {books && books.map((book) => (
          <Card className="w-96 m-6">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={book.url}
                alt="img-blur-shadow"
                className="w-full h-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {book.title}
              </Typography>
              <Typography>{book.desc.substr(0, 300) + "..."}</Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">{book.genre}</Typography>
              <Typography variant="small" color="grey" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                {book.author}
              </Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
