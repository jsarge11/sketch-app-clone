INSERT INTO sketchpads (uid, pad_name, pad_date) 
VALUES ($1, $2, $3);

SELECT * FROM sketchpads
WHERE uid = $1;