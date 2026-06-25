# Write your MySQL query statement below

with empman as (
    select x.id, x.name , x.salary , x.managerId,
    e.id as m_id,e.name as m_name, e.salary as m_salary
    from Employee x CROSS JOIN Employee e 
),
emp_man_only as(
    select * from empman e where e.managerid = e.m_id and e.salary > e.m_salary
)
select name as Employee from emp_man_only