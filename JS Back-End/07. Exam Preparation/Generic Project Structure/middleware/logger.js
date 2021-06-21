module.exports = () => {
    return (req, res, next) => {
        if (!req.url.includes('favicon')) {
            console.log('>>>', req.method, req.url);
            if (req.user) {
                console.log('Known user ', req.user.username);
            }
        }
        next();
    };
};