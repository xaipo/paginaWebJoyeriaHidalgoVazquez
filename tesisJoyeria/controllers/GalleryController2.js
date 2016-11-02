/**
 * Created by xaipo on 10/28/2016.
 */
/**
 * Created by xaipo on 10/28/2016.
 */
app.controller('GalleryCtrl2', function ($scope, Lightbox) {
    $scope.selectedImg;
    $scope.show=[];
    $scope.inicio=0;
    $scope.fin=0;
    $scope.flag=false;
    $scope.flag2=true;
    $scope.images = [
        {
            'codigo':'ARM-001',
            'caption': 'Aretes elaborados con Oro de 18 kt, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3.5 gr y 5 gr',
            'url': '/tesisJoyeria/images/Aretes/220-Btns2.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns2.png' // used only for this example
        },
        {
            'codigo':'ARM-002',
            'caption': 'Aretes elaborados con Oro blanco, amarillo y rojo de 18 kt, dise&#241o exclusivo para mujer, constando un peso aproximado entre 6 gr y 8 gr',
            'url': '/tesisJoyeria/images/Aretes/220-Btns10.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns10.png'
        },
        {
            'codigo':'ARM-003',
            'caption': 'Aretes elaborados con Oro blanco, amarillo y rojo de 18 kt, dise&#241o exclusivo para mujer, constando un peso aproximado entre 6 gr y 8 gr',
            'url': '/tesisJoyeria/images/Aretes/220-Btns11.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns11.png'
        },
        {
            'codigo':'ARM-004',
            'caption': 'Aretes elaborados con Oro de 18 kt y piedras preciosas, dise&#241o exclusivo para mujer, constando un peso aproximado entre 5 gr y 7 gr',
            'url': '/tesisJoyeria/images/Aretes/220-Btns25.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btn25.png'
        },
        {
            'codigo':'ARM-005',
            'caption': 'Aretes elaborados con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 4 gr',
            'url': '/tesisJoyeria/images/Aretes/220-Btns26.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns26.png'
        },{
            'codigo':'ARM-006',
            'caption': 'Aretes elaborados con Oro blanco de 18 kt y piedras preciosas, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 4 gr.',
            'url': '/tesisJoyeria/images/Aretes/220-Btns27.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns27.png' // used only for this example
        },
        {
            'codigo':'ARM-007',
            'caption': 'Aretes elaborados con Oro blanco de 18 kt, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 5 gr.',
            'url': '/tesisJoyeria/images/Aretes/220-Btns28.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns28.png'
        },
        {
            'codigo':'ARM-008',
            'caption': 'Aretes mancuernas elaborados con Oro blanco de 18 kt y circ&#243n, diamante o esmeralda, dise&#241o exclusivo para mujer, constando un peso aproximado entre 8 gr y 10 gr.',
            'url': '/tesisJoyeria/images/Aretes/220-Btns30.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns30.png' // used only for this example
        },
        {
            'codigo':'ARM-009',
            'caption': 'Aretes elaborados con Oro de 18 kt y circones y/o diamantes, dise&#241o exclusivo para mujer, constando un peso aproximado entre 6 gr y 8 gr.',
            'url': '/tesisJoyeria/images/Aretes/220-Btns31.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns31.png'
        },
        {
            'codigo':'ARM-010',
            'caption': 'Aretes elaborados con Oro de 18 kt, circ&#243n y/o diamante y un par de perlas, dise&#241o exclusivo para mujer, constando un peso aproximado entre 3 gr y 5 gr.',
            'url': '/tesisJoyeria/images/Aretes/220-Btns32.png',
            'thumbUrl': '/tesisJoyeria/images/Aretes/220-Btns32.png'
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