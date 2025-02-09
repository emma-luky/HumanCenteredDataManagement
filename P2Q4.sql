select company.country, count(product.category) as gadgets from product join company on product.manufacturer = company.cname where product.category = 'Gadgets' group by company.country;
