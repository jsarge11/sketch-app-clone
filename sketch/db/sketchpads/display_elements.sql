SELECT e.id, e.e_name, e.e_type, e.pad_id FROM elements e
WHERE pad_id = $1;