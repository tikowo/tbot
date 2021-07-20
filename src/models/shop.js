module.exports = function buildMakeShop({ }) {
    return function makeShop({ name, owner }) {
        if (!name) {
            throw new Error('Name is required');
        }

        return Object.freeze({
            getName: () => name,
            getOwner: () => owner
        })
    }
}