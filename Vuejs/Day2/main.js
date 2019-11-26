var VueInstane = new Vue({
    el: "#app",
    data: {
        title: 'Quần thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 10000
    },

    methods: {
        formatPrice(){
            var number = this.price;
            
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number);
        }

    },
    listProductDetail: [
        {
            image: './images/red.jpg',
            quantity: 0,
            textColor: 'Màu Đỏ'
        }, {
            image: './images/blue.jpg',
            quantity: 8,
            textColor: 'Màu Xanh'
        }, {
            image: './images/black.jpg',
            quantity: 2,
            textColor: 'Màu Đen'
        }, 
    ]



});