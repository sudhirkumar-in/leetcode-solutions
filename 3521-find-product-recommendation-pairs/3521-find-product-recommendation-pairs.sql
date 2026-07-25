WITH pairs AS (
    SELECT
        p1.product_id AS product1_id,
        p2.product_id AS product2_id,
        p1.user_id
    FROM ProductPurchases p1
    JOIN ProductPurchases p2
        ON p1.user_id = p2.user_id
       AND p1.product_id < p2.product_id
)

SELECT
    pairs.product1_id,
    pairs.product2_id,
    pi1.category AS product1_category,
    pi2.category AS product2_category,
    COUNT(DISTINCT pairs.user_id) AS customer_count
FROM pairs
JOIN ProductInfo pi1
    ON pi1.product_id = pairs.product1_id
JOIN ProductInfo pi2
    ON pi2.product_id = pairs.product2_id
GROUP BY
    pairs.product1_id,
    pairs.product2_id,
    pi1.category,
    pi2.category
HAVING COUNT(DISTINCT pairs.user_id) >= 3
ORDER BY
    customer_count DESC,
    product1_id ASC,
    product2_id ASC;