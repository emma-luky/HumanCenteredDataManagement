SELECT COUNT(pname), category FROM Product GROUP BY category HAVING COUNT(pname) >= 2;
