WITH daily AS (
    SELECT
        user_id,
        action_date,
        action,
        COUNT(*) OVER (
            PARTITION BY user_id, action_date
        ) AS actions_per_day
    FROM activity
),
valid_days AS (
    SELECT
        user_id,
        action_date,
        action
    FROM daily
    WHERE actions_per_day = 1
),
grouped AS (
    SELECT
        user_id,
        action,
        action_date,
        DATE_SUB(
            action_date,
            INTERVAL ROW_NUMBER() OVER (
                PARTITION BY user_id, action
                ORDER BY action_date
            ) DAY
        ) AS grp
    FROM valid_days
),
streaks AS (
    SELECT
        user_id,
        action,
        COUNT(*) AS streak_length,
        MIN(action_date) AS start_date,
        MAX(action_date) AS end_date
    FROM grouped
    GROUP BY user_id, action, grp
),
ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY user_id
            ORDER BY streak_length DESC
        ) AS rn
    FROM streaks
)
SELECT
    user_id,
    action,
    streak_length,
    start_date,
    end_date
FROM ranked
WHERE rn = 1
  AND streak_length >= 5
ORDER BY
    streak_length DESC,
    user_id ASC;