module.exports = {
    details: (req, res) => {
        const id = req.params.id;
        const cubicle = req.storage.getItemById(id);
        if (cubicle === undefined) {
            return  res.redirect('/404');
        }
        res.render('details', { title: 'Cubicle', cubicle });
    }
};