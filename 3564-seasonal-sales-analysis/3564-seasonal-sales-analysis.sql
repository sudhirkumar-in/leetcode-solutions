WITH sales_season AS (
    SELECT
        product_id,
        quantity,
        quantity * price AS revenue,
        CASE
            WHEN MONTH(sale_date) IN (12,1,2) THEN 'Winter'
            WHEN MONTH(sale_date) IN (3,4,5) THEN 'Spring'
            WHEN MONTH(sale_date) IN (6,7,8) THEN 'Summer'
            ELSE 'Fall'
        END AS season
    FROM Sales
),

category_sales AS (
    SELECT
        season,
        category,
        SUM(quantity) AS total_quantity,
        SUM(revenue) AS total_revenue
    FROM sales_season s
    JOIN Products p
        ON s.product_id = p.product_id
    GROUP BY season, category
),

ranked_sales AS (
    SELECT *,
           ROW_NUMBER() OVER(
               PARTITION BY season
               ORDER BY  total_quantity DESC,
                total_revenue DESC,
                category ASC
           ) AS rn
    FROM category_sales
)

SELECT
    season,
    category,
    total_quantity,
    total_revenue
FROM ranked_sales
WHERE rn = 1;