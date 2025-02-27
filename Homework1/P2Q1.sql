select month from sales join product on sales.pname = product.pname join company on product.manufacturer = company.cname where country = 'USA';
