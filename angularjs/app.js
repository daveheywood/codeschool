//var app = angular.module('store',[]);

(function () 
{
    var app = angular.module('gemStore', []);


    app.directive('productTitle', function(){
        return {
            restrict:'E',
            templateUrl:'product-title.html'
        };
    });

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

    app.controller('PanelController', function(){
        this.tab=1;

    this.selectTab = function(setTab)
    {
        this.tab = setTab;
    };

    this.isSelected = function(checkTab)
    {
        return this.tab==checkTab;

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
]
}
)();