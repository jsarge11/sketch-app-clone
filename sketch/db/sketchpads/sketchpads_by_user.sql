select * from sketchpads s
right join users u
on u.uid = s.uid
where s.uid = $1;

