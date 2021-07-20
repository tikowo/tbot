module.exports = function makeShopController({ shopService }) {
    return Object.freeze({
        store,
        show,
        update,
        index
    })

    async function index() {
        const shops = await shopService.all();
        return {
            statusCode: 200,
            body: shops
        }
    }

    async function show(httpRequest) {
        const shop = await shopService.getShopById(httpRequest.params.id);

        return {
            statusCode: 200,
            body: shop
        }
    }

    async function update(httpRequest) {
        const shop = await shopService.updateShop(httpRequest.params.id, httpRequest.body);

        return {
            statusCode: 200,
            body: shop
        }
    }

    async function store(httpRequest) {
        const shop = await shopService.addShop(httpRequest.body);

        return {
            statusCode: 201,
            body: shop
        }
    }
}