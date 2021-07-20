module.exports = function makeShopService({ shopDb, shopValidator }) {
    return Object.freeze({
        getShopById,
        updateShop,
        addShop,
        all
    });

    async function getShopById(shopId) {
        if (!shopId) {
            throw new Error('Please provide shop id');
        }

        const shop = await shopDb.findById(shopId);
        return shop;
    }

    async function updateShop(shopId, shop) {
        if (!shopId) {
            throw new Error('Please provide shop id');
        }
        await shopValidator.validateAsync(shop);

        return shopDb.replaceById(shopId, shop);
    }

    async function addShop(shop) {
        await shopValidator.validateAsync(shop);

        return shopDb.insert(shop);
    }

    async function all() {
        return shopDb.all();
    }
}