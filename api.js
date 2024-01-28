// const moviedb = require('./database.json')
// //console.log(moviedb.movie1.duration)
// console.log(moviedb.length)

// class Movie{
//     constructor(id,name,duration, rating){
//         this.id = id
//         this.name = name
//         this.duration = duration
//         this. rating = rating 

//     }
//     getmovieList(){
           
//         console.log(this)
//     }
// }

// const movie1 = new Movie(moviedb.movie1.id,moviedb.movie1.name,moviedb.movie1.duration,moviedb.movie1.rating)
const express = require('express');
const app = express();

app.use(express.json());

app.get('/movies', (req, res) => {
    res.json(movies);
  });
  

app.put('/movies/rent/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === movieId);
  
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
  
    if (movie.rented) {
      return res.status(400).json({ error: 'Movie is already rented' });
    }
  
    movie.rented = true;
    res.json({ message: 'Movie rented successfully', movie });
  });
  
  // Return a rented movie
  app.put('/movies/return/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === movieId);
  
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
  
    if (!movie.rented) {
      return res.status(400).json({ error: 'Movie is not rented' });
    }
  
    movie.rented = false;
    res.json({ message: 'Movie returned successfully', movie });
  });