UPDATE elements
SET e_name = $2
WHERE id = $1;

SELECT e.id, e.e_name, e.e_type, e.pad_id, e.body FROM elements e
WHERE pad_id = $3;
