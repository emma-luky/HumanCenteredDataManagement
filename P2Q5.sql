select product.category, COUNT( distinct company.country) from product join company on product.manufacturer = company.cname group by product.category;
