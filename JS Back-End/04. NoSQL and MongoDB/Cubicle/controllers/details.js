module.exports = {
    details: async (req, res) => {
        const id = req.params.id;
        const cubicle = await req.storage.getItemById(id);
        if (cubicle === undefined) {
            return res.redirect('/404');
        }
        res.render('details', { title: 'Cubicle', cubicle });
    },
    async attach(req, res) {
        const id = req.params.cubeId;
        const cubicle = await req.storage.getItemById(id);
        const accessories = await req.storage.getAccessories(cubicle.accessories.map(a => a._id));

        res.render('attach', { title: 'Attach Accessories', cubicle, accessories });
    },
    async attachPost(req, res) {
        await req.storage.attachAccessory(req.params.cubeId, req.body.accessory);
        res.redirect(`/details/${req.params.cubeId}`);
    }
};