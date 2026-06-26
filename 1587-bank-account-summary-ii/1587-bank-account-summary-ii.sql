# Write your MySQL query statement below
with ct as (
    select account, sum(amount) as total from Transactions 
    group by account
)
select u.name , ct.total as balance
from Users u JOIN ct ON u.account = ct.account
where ct.total > 10000