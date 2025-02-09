select product.pname, sum(sales.sold) from sales join product on sales.pname = product.pname where sales.sold > 2 group by product.pname;
