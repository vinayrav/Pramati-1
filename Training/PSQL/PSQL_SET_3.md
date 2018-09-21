
## **Postgres_SET_3:**


1. SQL to find the missing ids from dep

* With generate_series function

```
SELECT generate_series(
                  (SELECT MIN(dept_id) 
                   FROM dept),
                  (SELECT MAX(dept_id) 
                   FROM dept)) 
AS MissingID 
EXCEPT SELECT dept_id 
FROM dept ORDER BY MissingID ;
```


```
Select
	*
FROM
	generate_series (
		(SELECT MIN(dept_id) FROM dept),
		(SELECT MAX(dept_id) FROM dept)
	) AS sn
LEFT JOIN dept ON dept.dept_id = sn
where dept_id is null
```




* Without generate series function

```

DO $$
BEGIN
   FOR i IN (SELECT MIN(dept_id) FROM dept)..(SELECT MAX(dept_id) FROM dept) LOOP
 insert into miss values (i);
   END LOOP;
END; $$ LANGUAGE plpgsql;


```
```

WITH RECURSIVE series AS (
	SELECT
		1 AS rn
	UNION ALL
		SELECT
			rn + 1 AS rn
		FROM
			series
		WHERE
			rn < 10
) SELECT
	*
FROM
	series

```

2. Manager Name, Reportee who joined first (Reportee Name - doj), Reportee who draws less sal (Reportee Name - salary)

* Without Window Function
```
SELECT a.name,a.doj AS "Reportee Name - doj",b.sal AS "Reportee Name - salary"
FROM
(SELECT b.name,CONCAT(a.name,'-',a.joining_date) AS doj 
         FROM employee a,employee b
         WHERE b.emp_id=a.mgr_id 
         AND EXISTS(
           SELECT 1
           FROM employee a_inr
           WHERE a_inr.mgr_id=b.emp_id
           HAVING min(a_inr.joining_date)=a.joining_date
          ) 
) a
INNER JOIN (
SELECT b.name,CONCAT(a.name,'-',a.salary) AS sal	
         FROM employee a,employee b
         WHERE b.emp_id=a.mgr_id
         AND EXISTS(
             SELECT 1
             FROM employee a_inr
             WHERE a_inr.mgr_id=b.emp_id
             HAVING min(a_inr.salary)=a.salary
              
           )
)b
ON a.name=b.name;

```
* With Window Fucntion
```
SSELECT DISTINCT
	M . NAME AS mgr_name,
	FIRST_VALUE (e. NAME) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.joining_date
	) AS first_emp_name,
	FIRST_VALUE (e.joining_date) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.joining_date
	) AS first_doj,
	FIRST_VALUE (e. NAME) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.salary
	) AS least_sal_emp_name,
	FIRST_VALUE (e.salary) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.salary
	) AS least_salary
FROM
	employee e
INNER JOIN employee M ON e.mgr_id = M .emp_id

```      


3. salary_history
id,name,start_date,end_date,salary
1,Aneesh,2010,2011,1000
1,Aneesh,2011,2012,1100--1,Aneesh,2011,2014,1100
1,Aneesh,2014,2015,1200
1,Aneesh,2015,null,1200

Find the list of employee records WHERE salary data is missing
With the above example, we don’t have salary information FROM 2012 to 2014

Assume, if above data is as commented, then there is no missing as there is no gap

* Without Window Function.

```
select * from (
SELECT
	sh.start_date,
	sh.end_date,
	LEAD (start_date, 1) OVER (ORDER BY start_date) AS next_start_date
FROM
	sh
ORDER BY
	start_date)t where next_start_date-end_date > 0

```



