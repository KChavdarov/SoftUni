module.exports = {
    catalog: async (req, res) => {
        const query = req.query;
        const cubicles = await req.storage.getAllItems(query);

        const context = {
            title: 'Cubicle',
            cubicles,
            search: query.search || '',
            from: query.from || '',
            to: query.to || ''
        };
        res.render('index', context);
    }
};