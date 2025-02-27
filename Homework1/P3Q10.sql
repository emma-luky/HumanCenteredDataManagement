select max(thriller_count) from
  (select directors.id, count(movie.id) as thriller_count from directors
      join movie_directors on directors.id = movie_directors.did
      join movie on movie_directors.mid = movie.id
      join genre on movie.id = genre.mid
      where genre = 'Thriller'
      group by directors.id
  );
