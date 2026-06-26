# Write your MySQL query statement below

with ct as (select 
o.order_id,
s.sales_id ,
s.name  as red_name,
c.com_id,
c.name as cname
from  Orders o 
LEFT  JOIN Company c ON c.com_id = o.com_id
RIGHT JOIN SalesPerson s ON s.sales_id = o.sales_id
where  c.name = 'RED' 
)
select name from SalesPerson where name not in (select red_name from ct)
;