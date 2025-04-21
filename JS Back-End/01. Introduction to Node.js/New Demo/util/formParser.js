module.exports = async function parse(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (data) => { body += data; });
        req.on('end', () => {
            try {
                const result = body
                    .replace(/\+/g, ' ')
                    .split('&')
                    .map(a => a.split('='))
                    .reduce((acc, [k, v]) => {
                        Object.assign(acc, { [k]: v })
                        return acc;
                    }, {});
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    })
}