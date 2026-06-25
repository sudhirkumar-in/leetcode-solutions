# Write your MySQL query statement below
with user_count as
(select 
    user_id , 
    tokens , 
    count(user_id)over(PARTITION BY user_id) as prompt_count ,
    avg(tokens)over(PARTITION BY user_id) as user_avg

    from prompts
)
select distinct user_id ,prompt_count , round(user_avg,2) as avg_tokens  from user_count
where prompt_count > 2 and tokens > user_avg
order by avg_tokens desc , user_id asc