module.exports = {
    addElement: (req, res) => {
        let db = req.app.get('db');
        let {
            data,
            e_type,
            e_name
        } = req.body;

        db.elements.insert({
                pad_id: req.params.id,
                data,
                e_type,
                e_name
            })
            .then(() => {
                db.elements.find({
                    pad_id: req.params.id
                }).then(
                    elements => {
                        console.log(elements);
                        res.status(200).send(elements);
                    })
            })
            .catch(err => console.log(err))
    },

    getAllElements: (req, res) => {
        let db = req.app.get('db');

        db.sketchpads.display_elements([req.params.id]).then(response => {
            res.status(200).send(response);
        }).catch((err) => res.status(500).send(console.log(err)));

    },

    renameElement: (req, res) => {
        let db = req.app.get('db');

        db.sketchpads.rename_element([req.params.id, req.params.name, req.params.pad_id]).then(response => {
            res.status(200).send(response);
        }).catch((err) => res.status(500).send(console.log(err)));
    },

    deleteElement: (req, res) => {
        let db = req.app.get('db');

        db.sketchpads.delete_element([req.params.id, req.params.pad]).then(response => {
            res.status(200).send(response);
        }).catch((err) => res.status(500).send((err)));
    },

}