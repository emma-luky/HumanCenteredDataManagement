select movie.year, count(movie.id) from movie where year >= 1890 and year <= 1899 group by movie.year;
