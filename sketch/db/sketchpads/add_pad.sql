INSERT INTO sketchpads (uid, pad_name) 
VALUES ($1, $2)
RETURNING *;