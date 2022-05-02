USE business_db;

INSERT INTO department (id, name)
VALUES (1,"Joe"),
        (2, "Jim"),
        (3, "John"),
        (4, "Jake"),
        (5, "Josh"),
        (6, "tim"),
        (7, "elana"),
        (8, "emma");


INSERT INTO role (id, title, salary, department_id)
VALUES (1, "hr", 300.00, 2),
        (2, "front dev", 400.00, 1),
        (3, "back dev", 500.00, 1),
        (4, "tester", 320.00, 1),
        (5, "node.js dev", 300.00, 3),
        (6, "manager", 2300.00, 1),
        (7, "it", 3100.0
        (8, "cyber sceruity", 3200.00, 4),
        (9, "lunch", 3300.00, 3),
        (10, "vender", 3040.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "joe", "smith", 2 , 1),
    (2, "jack", "doe", 2 , 2),
    (3, "tim", "short", 3, 3),
    (4, "emma", "quin", 5, 4),
    (5, "jordan", "doyen", 4, , 2),
    (6, "elana", "nolan", 3, 3);

