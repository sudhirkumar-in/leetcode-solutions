# Write your MySQL query statement below
with ct as (
    select 
        customer_number ,
        count(customer_number)over(partition by customer_number) as total_customer
        from Orders
)
select customer_number from ct 
order by total_customer desc 
limit 1
