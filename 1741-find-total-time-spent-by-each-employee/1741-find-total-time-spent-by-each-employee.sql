# Write your MySQL query statement below
with ct as (
    select emp_id,event_day ,
    (out_time - in_time)  as total
    from Employees
)
select event_day as day ,
emp_id,
sum(total) as total_time
 from ct
group by event_day,emp_id