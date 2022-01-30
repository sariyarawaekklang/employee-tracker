INSERT INTO department (name)
-- these are obtained from Googling `example department names of a company`
VALUES
    ('Human Resources')
    ('IT')
    ('Accounting and Finance')
    ('Marketing')
    ('Research and Development'

INSERT INTO role (title, salary, department_id)
VALUES
    ('Employment Specialist', 38000, 1)
    ('Recruiter', 55000, 1)
    ('Computer Programmer', 58000, 2)
    ('Web Developer', 72000, 2)
    ('IT Technician', 74000, 2)
    ('Accountant', 55000, 3)
    ('Financial Advisor', 66000, 3)
    ('Financial Analyst', 69000, 3)
    ('Public Relations Manager', 53000, 4)
    ('Data Scientist', 128000, 4)
    ('Business Analyst', 75000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES