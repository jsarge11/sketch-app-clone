UPDATE elements SET data = jsonb_set(
    data,
    ${path},
    $$
    {
        ${value}
    }
    $$
)
WHERE eid = $1;

