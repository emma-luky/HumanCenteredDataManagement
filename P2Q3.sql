select product.pname, sum(sales.sold) from sales join product on sales.pname = product.pname group by product.pname having sum(sales.sold) > 2;
