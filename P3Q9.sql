select actor.fname, actor.lname, COUNT(movie.id) from actor
  join casts on actor.id = casts.pid
  join movie on casts.mid = movie.id
  join genre on movie.id = genre.mid
  where genre = 'Thriller'
  group by actor.fname, actor.lname
  having count(movie.id) >= 40
  ORDER BY count(movie.id) desc;
