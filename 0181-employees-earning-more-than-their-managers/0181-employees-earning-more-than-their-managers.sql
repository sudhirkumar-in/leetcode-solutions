# Write your MySQL query statement below
select 
-- e.id,
e.name as Employee
-- e.salary,
-- e.managerId ,
-- m.id as m_id,
-- m.name as m_name,
-- m.salary as m_salary
from Employee e JOIN Employee m on e.managerId = m.id
where e.salary > m.salary