delete from elements
where eid = $1;

SELECT e.eid, e.e_name, e.e_type, e.pad_id FROM elements e
WHERE pad_id = $2;