UPDATE sketchpads SET pad_name = $3, pad_date = $4
WHERE pad_id = $1 AND uid = $2;