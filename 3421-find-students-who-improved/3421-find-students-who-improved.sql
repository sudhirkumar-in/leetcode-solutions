# Write your MySQL query statement below
with student_improvement as (
    select distinct
        student_id,
        subject,
        count(subject)over(partition by student_id,subject) as times,
        FIRST_VALUE(score)over(partition by student_id,subject order by exam_date ) as first_score,
        LAST_VALUE(score)over(partition by student_id,subject order by exam_date ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as latest_score
    from Scores
)
    select distinct
        student_id,
        subject,
        first_score,
        latest_score
    from student_improvement
    where times >=2 and first_score < latest_score
order by student_id