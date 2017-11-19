

(function () 
{
    var app = angular.module('gemStore', ['store-products']);


    

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems =
    [ 
        {
        name: 'Dodecahedron',
        price: 2.5,
        description: 'this is the desc',
        canPurchase:true,
        soldOut:false,
        images:[
            {full:"http://lorempixel.com/100/100/cats/3"}
        ],
        reviews:[]
        },
        {
            name: 'Pentagon Gem',
            price: 5.95,
            description: 'this is the desc',
            canPurchase:true,
            soldOut:false,
            images:[
                {full:"http://lorempixel.com/100/100/cats/4"}
            ],
            reviews:[]
        }
    ];
}
)();