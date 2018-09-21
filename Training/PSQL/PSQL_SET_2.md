## **Postgres_SET_2:**

1. Manager Name, Count of Employees whose start date is after 2013
```
SELECT b.name as  Mgr_Name,count(a.name) as Emp_count
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name 
ORDER BY b.name;
```


2. Manager Name, Min(emp salary) WHERE manager start date is after 2013
```
SELECT b.name AS "Mgr_Name",min(a.salary) AS "Emp_salary" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND b.joining_date>'01-01-2013' 
GROUP BY b.name;
```

3. Manager name who atleast has two employees started after 2013
```

SELECT b.name as  Mgr_Name,COUNT(a.name) as Emp_count 
FROM employee a, employee b WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name  
HAVING COUNT(a.name) >=2;
```
4. Dept Name, Count of Employees whose start date is after 2013
```
SELECT d.name,count(e.name) 
FROM employee e,dept d  
WHERE d.dept_id=e.dept_id 
AND e.joining_date>'01-01-2013' 
GROUP BY d.name;
```
5. Dept Name, Min(emp salary) WHERE manager start date is after 2013
```
SELECT d.name,min(a.salary) 
FROM employee a,employee b,dept d  
WHERE d.dept_id=a.dept_id and d.dept_id=b.dept_id 
AND b.emp_id=a.mgr_id 
AND  b.joining_date>'01-01-2013' 
GROUP BY d.name;
```

6. Dept Name who atleast has two employees started after 2013

```
SELECT d.name,count(e.name) 
FROM employee e,dept d  
WHERE d.dept_id=e.dept_id 
AND e.joining_date>'01-01-2013' 
GROUP BY d.name having COUNT(e.name)>=2;
```
7. Number of employees per year
```
SELECT extract(year FROM joining_date) ,COUNT(emp_id) 
FROM employee 
GROUP BY extract(year FROM joining_date);
```
8. Number of employees per year, per department
```

SELECT extract(year FROM e.joining_date) ,d.name,count(e.emp_id) 
FROM employee e,dept d 
WHERE e.dept_id=d.dept_id 
GROUP BY extract(year FROM e.joining_date),d.name 
ORDER BY d.name;
```

9. List of Months (Say, Jan-2018) WHERE number of employees joined is more than 2
```
SELECT extract(year FROM joining_date) as YEAR,extract(month FROM joining_date) as Month ,COUNT(emp_id) as Count 
FROM employee G
ROUP BY extract(year FROM joining_date),extract(month FROM joining_date) 
HAVING COUNT(emp_id)>2;
```

10. List of Managers who has employees FROM more than one department
```
SELECT m.name 
FROM employee e,employee m,dept d 
WHERE e.mgr_id=m.emp_id and e.dept_id=d.dept_id 
GROUP BY m.name 
HAVING COUNT(distinct d.name)>1;

```

11. List of Departments who has atleast two managers
```
SELECT d.name,count(distinct m.name) 
FROM employee e,employee m,dept d 
WHERE e.mgr_id=m.emp_id and m.dept_id=d.dept_id 
GROUP BY d.name 
HAVING COUNT(distinct m.name)>=2;
```

12. Employee Names who joined after 2013 and his manager has more than two reportees
```
SELECT a.name,a.* employee 
FROM employee a,
employee b 
WHERE b.emp_id=a.mgr_id 
AND a.joining_date>'01-01-2013'
AND exists(
    SELECT 1 
    FROM employee a_inr
    WHERE a_inr.mgr_id=a.mgr_id
    HAVING COUNT(distinct a_inr.name) > 2);
```

