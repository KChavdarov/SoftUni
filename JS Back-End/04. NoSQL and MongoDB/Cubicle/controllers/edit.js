module.exports = {
    edit: async (req, res) => {
        const id = req.params.id;
        const cubicle = await req.storage.getItemById(id);
        if (cubicle === undefined) {
            return res.redirect('/404');
        }
        cubicle[`dif${cubicle.difficulty}`] = true;
        res.render('edit', { title: 'Edit Cubicle', cubicle });
    },
    update: async (req, res) => {
        const id = req.params.id;
        const item = {};

        item.name = req.body.name;
        item.description = req.body.description;
        item.imageUrl = req.body.imageUrl;
        item.difficulty = Number(req.body.difficulty);
        try {
            await req.storage.updateItem(id, item);
            res.redirect('/details/' + id);
        } catch {
            res.redirect('404');
        }
    }
};