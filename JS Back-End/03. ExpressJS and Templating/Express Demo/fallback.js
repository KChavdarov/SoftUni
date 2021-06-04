function fallback(err, req, res, next) {
    console.error(err.message);
    console.error(err.stacl);
    res.status(500).send('500 Server Error');
}

module.exports = fallback;