# Write your MySQL query statement below
with sumdis as (
    select 
        user_id , sum(distance) as distance 
    from Rides
    group by user_id
)
select
    u.name,
    COALESCE(ct.distance,0) as travelled_distance
from Users u LEFT JOIN  sumdis ct ON u.id = ct.user_id
order by ct.distance  desc, u.name asc

