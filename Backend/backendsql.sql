CREATE DATABASE litter_tracer;
CREATE USER 'Ansh'@'localhost' IDENTIFIED BY 'mysql';
GRANT ALL PRIVILEGES ON litter_tracer.* TO 'Ansh'@'localhost';
FLUSH PRIVILEGES;
