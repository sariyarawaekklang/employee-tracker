INSERT INTO department (name)
-- these are obtained from Googling `example department names of a company`
VALUES
    ('Human Resources'),
    ('IT'),
    ('Accounting and Finance'),
    ('Marketing'),
    ('Research and Development')

INSERT INTO role (title, salary, department_id)
VALUES
    ('Recruiter', 55000, 1),
    ('Computer Programmer', 58000, 2),
    ('IT Technician', 74000, 2),
    ('Accountant', 55000, 3),
    ('Financial Advisor', 66000, 3),
    ('Public Relations Manager', 53000, 4),
    ('Data Scientist', 128000, 4),
    ('Business Analyst', 75000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Alisha', 'Robertson', 2, null),
    ('Kirsten', 'Rowe', 6, null),
    ('Kamryn', 'Lawrence', 5, 1)
    ('Lucas', 'Kirk', 3, null),
    ('Jenna', 'Mcintosh', 1, 2),
    ('Declan', 'Smith', 1, null),
    ('Rohan', 'Baker', 3, null),
    ('Jaden', 'Mcintosh', 2, 2),
    ('Addyson', 'Finley', 5, 1),
    ('Nathen', 'Church', 6, null),
    ('Taniya', 'Conrad', 4, null),
    ('Litzy', 'Calderon', 1, null)