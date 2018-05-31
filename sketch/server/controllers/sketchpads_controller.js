module.exports ={

    sketchpadsByUser: (req, res) => {
        const db = req.app.get('db');
        db.sketchpads.sketchpads_by_user([req.session.user.id]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },
    
    addPad: (req, res) => {
        let d = new Date();
        let time_stamp = d.toDateString();
        const db = req.app.get('db');
        db.sketchpads.add_pad([req.session.user.id, req.body.name, time_stamp]).then( response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    deletePad: (req, res) => {
        const db = req.app.get('db');
        db.sketchpads.delete_pad([req.params.id, req.session.user.id]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    editPad: (req, res) => {
        let d = new Date();
        let time_stamp = d.toDateString();
        const db = req.app.get('db');
        console.log('params', req.params.id);
        console.log('req.body', req.body.name);
        db.sketchpads.edit_pad([req.session.user.id, req.params.id, req.body.name, time_stamp]).then(response => {
            res.status(200).send(response)
        }).catch((err) => res.status(500).send(console.log(err)));
    }
}