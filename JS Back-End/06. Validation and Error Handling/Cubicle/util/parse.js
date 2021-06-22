function parseErrorMessage(error) {
        if (error.name == 'ValidationError') {
            return Object.values(error.errors).map(e => e.properties.message);
        } else {
            return [error.message];
        }
};

module.exports = {
    parseErrorMessage,
};