# Write your MySQL query statement below
with symmetric as  (
    (select employee_id from Employees except select employee_id from Salaries)
        union all
    (select employee_id from Salaries except select employee_id from Employees)
)
select * from symmetric order by employee_id