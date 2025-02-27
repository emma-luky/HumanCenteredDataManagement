select count(actors_1995.id) from 
  (select actor.id from actor join casts on actor.id = casts.pid join movie on casts.mid = movie.id where year = 1995) as actors_1995
  join
  (select actor.id from actor join casts on actor.id = casts.pid join movie on casts.mid = movie.id where year = 2010) as actors_2010
  on actors_1995.id = actors_2010.id;
