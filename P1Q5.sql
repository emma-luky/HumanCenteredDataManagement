select name, project from projects join employees on employees.empid = projects.empid order by name ASC, project ASC;
