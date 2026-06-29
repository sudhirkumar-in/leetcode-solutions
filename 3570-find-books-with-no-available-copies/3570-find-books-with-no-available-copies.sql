# Write your MySQL query statement below
with current_borrowers_list as (
    select distinct
        book_id,
        -- borrower_name,
        -- borrow_date,
        -- return_date,
        -- if(return_date is null,1,0)as borrowed_copies_count,
        sum(if(return_date is null,1,0)) over(partition by book_id) as current_borrowers
    from borrowing_records
)
select 
    r.book_id, 
    r.title,
    r.author,
    r.genre,
    r.publication_year,
    l.current_borrowers
from library_books r JOIN current_borrowers_list l on r.book_id = l.book_id
where r.total_copies - l.current_borrowers = 0
order by current_borrowers desc , title