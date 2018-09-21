



## **Postgres_SET_3:**


1. SQL to find the missing ids from dep
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
SELECT m1.Manager_name,m1.jd,m2.sd
FROM(
    SELECT DISTINCT m2.name AS Manager_name,FIRST_VALUE(CONCAT(m1.name,'-',m1.joining_date)) OVER(PARTITION BY m1.mgr_id ORDER BY     m1.joining_date) 
   AS jd
   FROM employee m1, employee m2
   WHERE m2.emp_id=m1.mgr_id)m1
   INNER JOIN(
              SELECT DISTINCT m2.name AS Manager_name,FIRST_VALUE(CONCAT(m1.name,'-',m1.salary)) OVER (PARTITION BY m1.mgr_id ORDER BY m1.salary) AS sd 
              FROM employee m1, employee m2
              WHERE m2.emp_id=m1.mgr_id)m2
              ON m1.Manager_name=m2.Manager_name;

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
SELECT CONCAT(a.i,'-',b.i) AS Missing_Data
FROM
(
SELECT i 
FROM generate_series(
                   (SELECT MIN(start_date) 
                   FROM sh),
                   (SELECT MAX(start_date) 
                   FROM sh)) AS t(i)
WHERE NOT EXISTS(
                 SELECT 1 
                 FROM sh
                 WHERE sh.start_date=t.i)
) a

INNER JOIN (
SELECT i 
FROM generate_series(
                   (SELECT MIN(end_date) 
                   FROM sh),
                   (SELECT MAX(end_date) 
                   FROM sh)) AS t(i)
WHERE NOT EXISTS(
                 SELECT 1 
                 FROM sh
                 WHERE sh.end_date=t.i)
)b

ON  b.i-a.i>1;

```


