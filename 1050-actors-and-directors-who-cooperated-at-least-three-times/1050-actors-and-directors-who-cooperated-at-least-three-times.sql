# Write your MySQL query statement below
with ct as(select 
actor_id,
director_id,
count(*)over(partition by actor_id,director_id) as total
from ActorDirector)
select distinct 
actor_id,
director_id
from ct where total >= 3 ;