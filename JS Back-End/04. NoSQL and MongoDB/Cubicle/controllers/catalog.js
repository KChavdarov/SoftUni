module.exports = {
    catalog: (req, res) => {
        const query = req.query;
        const cubicles = req.storage.getAllItems(query);

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