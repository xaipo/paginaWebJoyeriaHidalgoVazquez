/**
 * Created by xaipo on 10/28/2016.
 */
/**
 * Created by xaipo on 10/28/2016.
 */
/**
 * Created by xaipo on 10/28/2016.
 */
app.controller('GalleryCtrl', function ($scope, Lightbox) {
    $scope.selectedImg={
        'codigo':'AOM-002',
        'caption': 'Anillo elaborado con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 4 gr y 6 gr.',
        'url': '/tesisJoyeria/images/Anillos/220-Btns3.png',
        'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns3.png' // used only for this example
    };
    $scope.show=[];
    $scope.inicio=0;
    $scope.fin=0;
    $scope.flag=false;
    $scope.flag2=true;
    $scope.images = [
        {
            'codigo':'AOM-002',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 4 gr y 6 gr.',
            'url': '/tesisJoyeria/images/Anillos/220-Btns3.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns3.png' // used only for this example
        },
        {
            'codigo':'AOM-003',
            'caption': 'Anillo elaborado con Oro de 18 kt con una Perla y con un Diamante y /o circ&#243n, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 5 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns5.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns5.png'
        },{
            'codigo':'AOM-004',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones de color y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 5 gr y 7 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns6.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns6.png' // used only for this example
        },
        {
            'codigo':'AOM-005',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones de color, diamantes y/o cualquier piedra preciosa, dise&#241o exclusivo para mujer, constando un peso aproximado entre 6 gr y 8 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns7.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns7.png'
        },
        {
            'codigo':'AOH-001',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones y/o diamantes, adem&#225s de una piedra &#243nix, dise&#241o exclusivo para hombre, constando un peso aproximado entre 8 gr y 10 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns8.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns8.png'
        },{
            'codigo':'AOM-006',
            'caption': 'Anillo elaborado con Oro de 18 kt y una piedra Agua Marina, dise&#241o exclusivo para mujer, constando un peso aproximado entre 5 gr y 8 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns9.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns9.png' // used only for this example
        },
        {
            'codigo':'AOM-002',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 4 gr y 6 gr.',
            'url': '/tesisJoyeria/images/Anillos/220-Btns12.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns12.png'
        },
        {
            'codigo':'AOM-007',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones, adem&#225s de una piedra Agua Marina, dise&#241o exclusivo para mujer, constando un peso aproximado entre 4 gr y 6 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns13.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns13.png'
        },{
            'codigo':'AOM-008',
            'caption': 'Anillo Solitario o de compromiso elaborado con Oro de 18 kt y un circ&#243n y/o diamante, dise&#241o exclusivo para mujer, constando un peso aproximado entre 4 gr y 6 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns14.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns14.png' // used only for this example
        },
        {
            'codigo':'AOH-002',
            'caption': 'Anillo elaborado con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para hombre, constando un peso aproximado entre 5 gr y 8 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns15.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns15.png'
        }, {
            'codigo':'AOH-003',
            'caption': 'Anillo elaborado con Oro de 18 kt y &#243nix, con un &#225guila elaborada a mano, dise&#241o exclusivo para hombre, constando un peso aproximado entre 10 gr y 12 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns16.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns16.png'
        },{
            'codigo':'AOM-009',
            'caption': 'Anillo solitario o compromiso, elaborado con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 5 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns17.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns17.png' // used only for this example
        },
        {
            'codigo':'AOM-010',
            'caption': 'Anillo solitario o de compromiso, elaborado con Oro de 18 kt y circ&#243n y/o diamante, dise&#241o exclusivo para mujer, constando un peso aproximado entre 4 gr y 6 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns18.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns18.png'
        },
        {
            'codigo':'AOM-011',
            'caption': 'Anillo o cintillo elaborado con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 6 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns19.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns19.png'
        },{
            'codigo':'AOM-012',
            'caption': 'Anillo elaborado con Oro de 18 kt. y circ&#243n y/o diamante, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 5 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns20.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns20.png' // used only for this example
        },
        {
            'codigo':'AOM-001',
            'caption': 'Anillo elaborado con Oro de 18 kt y Rub&#237s, dise&#241o exclusivo para mujer, constando un peso aproximado entre 5 gr y 8 gr',
            'url': '/tesisJoyeria/images/Anillos/220-Btns33.png',
            'thumbUrl': '/tesisJoyeria/images/Anillos/220-Btns33.png'
        }

    ];


    $scope.next1=function(){
        console.log('siguiente');
        console.log($scope.inicio+'inicio');
        console.log($scope.fin+'fin');


        if(!$scope.flag) {

            $scope.inicio = $scope.fin;
            $scope.fin += 9;
            $scope.show = [];
            for (var i = $scope.inicio; i < $scope.fin; i++) {
                console.log(i);
                if ($scope.images[i] != undefined) {
                    $scope.show.push($scope.images[i]);
                } else {

                    $scope.flag = true;
                    break;
                }
            }


            console.log($scope.show);

        }else{
            console.log('se termino');
        }
    }
    $scope.next=function(){
        console.log('siguiente');
        console.log($scope.inicio+'inicio');
        console.log($scope.fin+'fin');


        if(!$scope.flag) {
            $scope.flag2=false;
            $scope.inicio = $scope.fin;
            $scope.fin += 9;
            $scope.show = [];
            for (var i = $scope.inicio; i < $scope.fin; i++) {
                console.log(i);
                if ($scope.images[i] != undefined) {
                    $scope.show.push($scope.images[i]);
                } else {

                    $scope.flag = true;
                    break;
                }
            }


            console.log($scope.show);

        }else{
            console.log('se termino');
        }
    }
    $scope.next1();
    $scope.ini=function(){

        $scope.inicio=0;
        $scope.fin=0;

    }


    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };

    $scope.selected=function(img){

        $scope.selectedImg=img;
        console.log($scope.selectedImg);
        console.log(img);
    }

    $scope.previous=function(){
        $scope.aux=$scope.show;
        console.log('atras');
        console.log($scope.flag2+'antes');
        if(!$scope.flag2) {
            $scope.flag = false;

            $scope.fin = $scope.inicio;
            $scope.inicio -= 9;

            $scope.show = [];
            for (var i = $scope.inicio; i < $scope.fin; i++) {
                console.log(i);
                if ($scope.images[i] != undefined) {
                    $scope.show.push($scope.images[i]);
                }
                else {
                    console.log('no encuentra');
                    $scope.flag2 = true;
                    $scope.show=$scope.aux;
                    $scope.inicio=0;
                    $scope.fin=9;
                    break;
                }

            }
            console.log($scope.flag2 + 'actual');
        }

    }
});