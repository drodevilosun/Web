var VueInstane = new Vue({
    el: "#app",
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 10000,
        cartNumber: 1,
        listProduct: [
            {
                image: './images/black.jpg',
                textColor: 'Black',
                quantity: 0
            },
            {
                image: './images/blue.jpg',
                textColor: 'Blue',
                quantity: 3
            },
            {
                image: './images/red.jpg',
                textColor: 'Red',
                quantity: 10
            }
        ],

        listDescription: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ]
        
    },

    methods: {
        formatPrice(){
            var number = this.price;
            
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number);
        }

    },
    computed: {
        getProduct()
        {
            return this.listProduct[0];
        },
        handle_add_to_cart()
        {
            this.cartNumber = this.cartNumber + 1;
        }
    }
});