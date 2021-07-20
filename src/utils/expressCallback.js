module.exports = function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent')
            }
        }
        controller(httpRequest)
            .then(response => {
                if (response.headers) {
                    res.set(response.headers)
                }
                res.type('json');
                res.status(response.statusCode).send(response.body);
            })
            .catch(e => {
                res.status(500).send({ error: e.message })
            })
    }
}