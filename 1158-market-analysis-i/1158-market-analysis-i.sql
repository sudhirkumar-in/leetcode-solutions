# Write your MySQL query statement below
with orders_in_2019_table as (
    select 
        buyer_id,
        sum(case when year(order_date)=2019  then 1 else 0 end)as orders_in_2019
    from Orders
    group by buyer_id
)
select 
    u.user_id as buyer_id,
    u.join_date,
    IFNULL(o.orders_in_2019,0) as orders_in_2019
from Users u left JOIN  orders_in_2019_table o ON u.user_id = o.buyer_id
