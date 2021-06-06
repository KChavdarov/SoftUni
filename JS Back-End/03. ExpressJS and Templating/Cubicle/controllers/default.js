module.exports = {
    defaultHandler: (req, res) => {
        res.render('404',{title:'Page Not Found'});
    }
};