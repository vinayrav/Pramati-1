## **Questions:**

1. Manager Name, Count of Employees whose start date is after 2013
2. Manager Name, Min(emp salary) where manager start date is after 2013
3. Manager name who atleast has two employees started after 2013
4. Dept Name, Count of Employees whose start date is after 2013
5. Dept Name, Min(emp salary) where manager start date is after 2013
6. Dept Name who atleast has two employees started after 2013
7. Number of employees per year
8. Number of employees per year, per department
9. List of Months (Say, Jan-2018) where number of employees joined is more than 2
10. List of Managers who has employees from more than one department
11. List of Departments who has atleast two managers
12. Employee Names who joined after 2013 and his manager has more than two reportees

## **Queries:**
```
1.  SELECT b.name as  Mgr_Name,count(a.name) as Emp_count FROM employee a, employee b WHERE b.emp_id = a.mgr_id and a.joining_date>'01-01-2013' group by b.name order by b.name;

2. SELECT b.name AS "Mgr_Name",min(a.salary) AS "Emp_salary" FROM employee a, employee b WHERE b.emp_id = a.mgr_id and  b.joining_date>'01-01-2013' group by b.name;

3. 2 types to display manager name and count 

 *  SELECT b.name as  Mgr_Name,count(a.name) as Emp_count FROM employee a, employee b WHERE b.emp_id = a.mgr_id and a.joining_date>'01-01-2013' group by b.name  having count(a.name) >=2;
 *  SELECT b.name as  Mgr_Name FROM employee a, employee b WHERE b.emp_id = a.mgr_id and  a.joining_date>'01-01-2013' group by b.name  having count(a.name) >=2;

4. select d.name,count(e.name) from employee e,dept d  where d.dept_id=e.dept_id and e.joining_date>'01-01-2013' group by d.name;

5. select d.name,min(a.salary) from employee a,employee b,dept d  where d.dept_id=a.dept_id and d.dept_id=b.dept_id and b.emp_id=a.mgr_id and  b.joining_date>'01-01-2013' group by d.name;

6.  select d.name,count(e.name) from employee e,dept d  where d.dept_id=e.dept_id and e.joining_date>'01-01-2013' group by d.name having count(e.name)>=2;

7. select extract(year from joining_date) ,count(emp_id) from employee group by extract(year from joining_date);

8. select extract(year from e.joining_date) ,d.name,count(e.emp_id) from employee e,dept d where e.dept_id=d.dept_id group by extract(year from e.joining_date),d.name order by d.name;

9. select extract(year from joining_date) as YEAR,extract(month from joining_date) as Month ,count(emp_id) as Count from employee group by extract(year from joining_date),extract(month from joining_date) having count(emp_id)>2;


10. select m.name from employee e,employee m,dept d where e.mgr_id=m.emp_id and e.dept_id=d.dept_id group by m.name having count(distinct d.name)>1;

11. select d.name,count(distinct m.name) from employee e,employee m,dept d where e.mgr_id=m.emp_id and m.dept_id=d.dept_id group by d.name having count(distinct m.name)>=2;

12. select a.name employee from employee a,employee b where b.emp_id=a.mgr_id and a.joining_date>'01-01-2013'and (select count(a.name) from employee a,employee b where b.emp_id = a.mgr_id )>2;

13. 
 SELECT generate_series(
                  (SELECT MIN(dept_id) 
                   FROM dept),
                  (SELECT MAX(dept_id) 
                   FROM dept)) 
AS MissingID 
EXCEPT SELECT dept_id 
FROM dept ORDER BY MissingID ;


14. Manager Name, Reportee who joined first (Reportee Name - doj), Reportee who draws less sal (Reportee Name - salary)
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


15) Question 3:
* Fiddle: sqlfiddle.com/#!4/ffc645
* Same phase information is duplicated in consecutive days given table phase_data. Write a SQL to fetch the phase duration where same phase in consecutive days to be merged into a single row
phase       start_date   end_date
Phase_0        2010-03-17     2010-03-27
Phase_1        2010-03-27     2010-05-11
Phase_0        2010-05-11

salary_history
id,name,start_date,end_date,salary
1,Aneesh,2010,2011,1000
1,Aneesh,2011,2012,1100--1,Aneesh,2011,2014,1100
1,Aneesh,2014,2015,1200
1,Aneesh,2015,null,1200

INSERT INTO salary_history 
VALUES( 1,'Aneesh',

16) Find the list of employee records where salary data is missing
With the above example, we don’t have salary information from 2012 to 2014

Assume, if above data is as commented, then there is no missing as there is no gap

