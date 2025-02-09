select projects.project, COUNT(employees.empid) from projects join employees on projects.empid = employees.empid group by projects.project;
