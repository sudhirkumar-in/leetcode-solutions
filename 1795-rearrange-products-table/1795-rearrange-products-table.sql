# Write your MySQL query statement below
with product_store_price as (
    select product_id , 'store1' as store , store1 as price from Products 
        union all
    select product_id , 'store2' as store , store2 from Products 
        union all
    select product_id , 'store3' as store , store3 from Products 
)
select * from product_store_price where price is not null