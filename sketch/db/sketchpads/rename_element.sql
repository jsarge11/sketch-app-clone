UPDATE elements
SET e_name = $2
WHERE eid = $1;

SELECT e.eid, e.e_name, e.e_type FROM elements e
WHERE pad_id = $3;