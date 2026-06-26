# Write your MySQL query statement below
with 
y19 as (
    select * from Sales where sale_date between '2019-01-01' and '2019-03-31'
),
next as (
    select * from Sales where sale_date not between '2019-01-01' and '2019-03-31'
),
firstQ as (
    select distinct product_id from y19 where product_id not in ( select product_id from next )
)
select distinct p.product_id , p.product_name from Product p JOIN  firstQ f where p.product_id = f.product_id