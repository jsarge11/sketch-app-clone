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
    }
}