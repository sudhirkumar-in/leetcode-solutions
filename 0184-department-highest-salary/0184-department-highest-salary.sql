# Write your MySQL query statement below
with dep_sal as (
    select id , name , salary , departmentId,
    max(salary)over(partition by departmentId) as d_m_salary
    from Employee
)
select 
    d.name as Department,
    ds.name as Employee,
    ds.salary as Salary
from dep_sal ds JOIN  Department d ON d.id = ds.departmentId
where ds.d_m_salary = ds.salary
