select count(actor.id) from actor join casts on actor.id = casts.pid join movie on casts.mid = movie.id where year = 1995;
