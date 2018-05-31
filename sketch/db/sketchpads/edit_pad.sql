UPDATE sketchpads SET pad_name = $3, pad_date = $4
WHERE pad_id = $2 AND uid = $1;

SELECT * FROM sketchpads
WHERE uid = $1;