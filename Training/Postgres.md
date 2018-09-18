# **POSTGRESQL:**

## **Questions:**
1. Employee_Name and Manager_Name.
2.  Employee name, emp doj, manager name, manger doj. 
3.  Employee name, Emp Dept, Mgr Dept.
4.  List of employees without a manager.
5.  List of terminated manager names.
6.  List of department names where we have a terminated employee.
7.  List of department names where we have a terminated Manager.
8.  List of employees whose manager's salary is less then employee salary.
9.  List of employees whose doj is earlier than manager.
10.  List of employees whose name has a vowel.
11.  List of employees whose's manager name has a vowel and employee salary is less than 20000.
12.  List of employees who has joined in Jan/Feb and Nov

## **Queries:**
1. SELECT b.name AS "Mgr_Name",a.name AS "Emp_Name" FROM employee a, employee b WHERE b.emp_id = a.mgr_id;
2. SELECT b.name Mnager_name , b.joining_date manager_doj,a.name employee_name ,a.joining_date empployee_doj  FROM employee a, employee b WHERE b.emp_id = a.mgr_id;
3.  SELECT a.name Emp_Name,ad.name Employee_dept ,bd.name Manager_dept FROM employee a, employee b ,dept ad,dept bd WHERE b.emp_id = a.mgr_id and a.dept_id=ad.dept_id and b.dept_id=bd.dept_id;

4. select name from employee where mgr_id is null;

5. select distinct b.name AS manager_names from employee a,employee b where a.mgr_id=b.emp_id and b.termination_date<now()::date;
6. 2 types with employee name and without:
  * select distinct a.name AS employee_names ,ad.name Dept_name from employee a,employee b,dept ad,dept bd  where a.mgr_id=b.emp_id and      b.termination_date<now()::date and ad.dept_id=a.dept_id and bd.dept_id=b.dept_id;

  * select distinct ad.name Dept_name from employee a,employee b,dept ad,dept bd  where a.mgr_id=b.emp_id and b.termination_date<now()::date and ad.dept_id=a.dept_id and bd.dept_id=b.dept_id;
 
7. select distinct bd.name Dept_name from employee a,employee b,dept ad,dept bd  where a.mgr_id=b.emp_id and b.termination_date<now()::date and ad.dept_id=a.dept_id and bd.dept_id=b.dept_id;

8. SELECT a.name AS "Emp_Name" FROM employee a, employee b WHERE b.emp_id = a.mgr_id and b.salary<a.salary;
9. SELECT a.name AS "Emp_Name" FROM employee a, employee b WHERE b.emp_id = a.mgr_id and a.joining_date<b.joining_date;

10. SELECT name FROM employeeWHERE name LIKE '%A%'OR name LIKE '%E%'OR name LIKE '%I%'OR name LIKE '%O%'OR name LIKE '%U%'OR name LIKE '%a%'OR name LIKE '%e%'OR name LIKE '%i%'OR name LIKE '%o%'OR name LIKE '%u%'

11. SELECT b.name AS "Emp_Name" FROM employee a, employee b WHERE a.emp_id = b.mgr_id and b.salary < 20000 and (b.name LIKE '%A%' OR b.name LIKE '%E%' OR b.name LIKE '%I%' OR b.name LIKE '%O%' OR b.name LIKE '%U%' OR b.name LIKE '%a%' OR b.name LIKE '%e%' OR b.name LIKE '%i%' OR b.name LIKE '%o%' OR b.name LIKE '%u%');

12. select name from employee WHERE to_char(joining_date, 'mm') = '02'OR to_char(joining_date, 'mm') = '01'OR to_char(joining_date, 'mm') = '11';
