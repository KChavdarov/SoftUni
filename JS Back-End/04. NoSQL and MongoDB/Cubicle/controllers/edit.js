module.exports = {
    edit: (req, res) => {
        const id = req.params.id;
        const cubicle = req.storage.getItemById(id);
        cubicle[`dif${cubicle.difficulty}`] = true;
        if (cubicle === undefined) {
            return res.redirect('/404');
        }
        res.render('edit', { title: 'Edit Cubicle', cubicle });

    },
    update: (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            req.storage.updateItem(id, data);
            res.redirect('/details/' + id);
        } catch {
            res.redirect('404');
        }
    }
};