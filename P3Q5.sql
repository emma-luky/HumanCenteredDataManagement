select count(DISTINCT c1.pid) from casts as c1 join casts as c2 on c1.pid = c2.pid and c1.mid = c2.mid and c1.role != c2.role;
