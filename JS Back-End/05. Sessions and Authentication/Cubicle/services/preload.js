async function preloadCube(req, res, next) {
    const id = req.params.id;
    req.data = req.data || {};
    try {
        const cubicle = await req.storage.getItemById(id);
        if (cubicle) {
            req.data.cubicle = cubicle;
        }
    } catch (err) {
        console.error(err.message);
    }
    next();
}

module.exports = {
    preloadCube,

};