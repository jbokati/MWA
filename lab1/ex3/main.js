const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200
}


function applyCoupon(item){
    function processDiscount(discount){
        this.price = this.price - (this.price*discount/100);
        return this;
    }
    return processDiscount.bind(item);
}

console.log(applyCoupon(item)(10).price === 180);
 