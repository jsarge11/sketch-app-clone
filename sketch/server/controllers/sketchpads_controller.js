module.exports ={

    sketchpadsByUser: (req, res) => {
        const db = req.app.get('db');
        db.sketchpads.sketchpads_by_user([req.session.user.id]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    }, 
}