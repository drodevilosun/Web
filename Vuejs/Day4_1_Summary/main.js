var VueInstane = new Vue({
    el: "#app",
    data: {
        title: 'Quần thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 10000,
        cartNumber: 1,
        listProduct: [
            {
                image: './images/black.jpg',
                textColor: 'Red',
                quantity: 1
            },
            {
                image: './images/blue.jpg',
                textColor: 'Red',
                quantity: 1
            },
            {
                image: './images/red.jpg',
                textColor: 'Red',
                quantity: 1
            }
        ]
    },

    methods: {
        formatPrice(){
            var number = this.price;
            
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number);
        }

    },
    computed: {
        getProduct() {
            return this.listProduct[0];
        }
    }




});