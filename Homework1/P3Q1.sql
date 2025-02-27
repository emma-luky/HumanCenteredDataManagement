select name from movie join movie_directors on movie.id = movie_directors.mid join directors on movie_directors.did = directors.id where directors.fname = 'Frank' and directors.lname='Darabont';
