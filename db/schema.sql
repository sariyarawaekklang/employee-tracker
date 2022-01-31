DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE job (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_job
    FOREIGN KEY (job_id)
    REFERENCES job(id)
    ON DELETE SET NULL
);