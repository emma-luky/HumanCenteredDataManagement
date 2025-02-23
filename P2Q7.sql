select pname, month
from (select 
        pname,
        month,
        ROW_NUMBER() OVER (PARTITION BY pname order by SUM(sold) desc) as rank
    from sales
    group by pname, month)
where rank = 1;
