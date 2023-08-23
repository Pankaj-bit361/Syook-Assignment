
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true, unique: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'item', required: true },
    price: { type: Number, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true },
    deliveryVehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicle', required: true },
    isDelivered: { type: Boolean, default: false }
});

OrderSchema.pre('save', async function (next) {
    if (!this.orderNumber) {
        const latestOrder = await this.constructor.findOne({}, 'orderNumber', { sort: { orderNumber: -1 } });

        if (latestOrder) {
           
            const latestOrderNumber = parseInt(latestOrder.orderNumber, 10);
            const newOrderNumber = (latestOrderNumber + 1).toString().padStart(4, '0');
            this.orderNumber = newOrderNumber;
        } else {
           
            this.orderNumber = '0001';
        }
    }

    next();
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = {
    OrderModel
};
