select directors.fname, directors.lname, COUNT(movie.id) from directors
  join movie_directors on directors.id = movie_directors.did
  join movie on movie_directors.mid = movie.id
  join genre on movie.id = genre.mid
  where genre = 'Thriller'
  group by directors.fname, directors.lname
  having COUNT(movie.id) >= 40
  ORDER BY COUNT(movie.id) DESC;
