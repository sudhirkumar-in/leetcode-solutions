WITH rank_per_reviews AS (
    SELECT
        employee_id,
        review_date,
        rating,
        ROW_NUMBER() OVER (
            PARTITION BY employee_id
            ORDER BY review_date DESC
        ) AS rn
    FROM performance_reviews
),
last_three_reviews AS (
    SELECT
        employee_id,
        MAX(CASE WHEN rn = 1 THEN rating END) AS latest_rating,
        MAX(CASE WHEN rn = 2 THEN rating END) AS middle_rating,
        MAX(CASE WHEN rn = 3 THEN rating END) AS earliest_rating
    FROM rank_per_reviews
    WHERE rn <= 3
    GROUP BY employee_id
),
improvement_score AS (
    SELECT
        employee_id,
        latest_rating - earliest_rating AS improvement_score
    FROM last_three_reviews
    WHERE latest_rating > middle_rating
      AND middle_rating > earliest_rating
)
SELECT
    e.employee_id,
    e.name,
    i.improvement_score
FROM employees e
JOIN improvement_score i
    ON e.employee_id = i.employee_id
ORDER BY
    i.improvement_score DESC,
    e.name ASC;