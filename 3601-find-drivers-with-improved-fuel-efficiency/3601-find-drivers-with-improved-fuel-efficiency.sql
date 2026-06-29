# Write your MySQL query statement below
with trip_avg as (
    select 
        driver_id,
        trip_date,
        distance_km/fuel_consumed as tavg 
    from trips
)
,avg_sum as(
    select 
        driver_id,
        trip_date,
        tavg,
        case when month(trip_date) in (1,2,3,4,5,6) then tavg end as first_half,
        case when month(trip_date) in (7,8,9,10,11,12) then tavg end as second_half
    from trip_avg
)
,first_secode_half_avg as (
    select 
        driver_id ,
        avg(first_half) as first_half_avg,
        avg(second_half) as second_half_avg
    from avg_sum
    group by driver_id
)
select 
    d.driver_id,
    d.driver_name,
    round(fs.first_half_avg,2) as first_half_avg,
    round(fs.second_half_avg,2) as second_half_avg,
    round(second_half_avg - first_half_avg,2) as efficiency_improvement
from first_secode_half_avg fs join drivers d on fs.driver_id = d.driver_id
where second_half_avg > first_half_avg and first_half_avg is not null and second_half_avg is not null
order by efficiency_improvement desc ,driver_name