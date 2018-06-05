SELECT e.id, e.e_name, e.e_type, e.pad_id, e.body FROM elements e
WHERE pad_id = $1;