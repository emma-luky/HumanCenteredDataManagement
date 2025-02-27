select DISTINCT name from projects join employees on employees.empid = projects.empid where employees.empid = 1 order by name ASC;
