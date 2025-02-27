select count(role) from casts join movie on casts.mid = movie.id where name = 'The Shawshank Redemption';
