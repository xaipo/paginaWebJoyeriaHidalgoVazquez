/**
 * Created by xaipo on 10/31/2016.
 */
/**
 * Created by xaipo on 10/28/2016.
 */
app.controller('GalleryCtrl6', function ($scope, Lightbox) {
    $scope.selectedImg;
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
        },  {
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
        }, {
            'codigo':'ADM-001',
            'caption': 'Aros de matrimonio elaborados con oro blanco y oro amarillo de 18 kt, constando un peso aproximado entre 10 gr y 14 gr (Par de aros).',
            'url': '/tesisJoyeria/images/Aros/220-Btns.png',
            'thumbUrl': '/tesisJoyeria/images/Aros/220-Btns.png' // used only for this example
        },
        {
            'codigo':'ADM-002',
            'caption': 'Aros de matrimonio elaborados con oro blanco y oro amarillo de 18 kt, constando un peso aproximado entre 8 gr y 10 gr (Par de aros).',
            'url': '/tesisJoyeria/images/Aros/220-Btns21.png',
            'thumbUrl': '/tesisJoyeria/images/Aros/220-Btns21.png'
        },
        {
            'codigo':'ADM-003',
            'caption': 'Aros de matrimonio elaborados con Oro blanco y oro amarillo de 18 kt, constando un peso aproximado entre 8 gr y 10 gr (Par de aros).',
            'url': '/tesisJoyeria/images/Aros/220-Btns22.png',
            'thumbUrl': '/tesisJoyeria/images/Aros/220-Btns22.png'
        },{
            'codigo':'ADM-004',
            'caption': 'Aros de matrimonio elaborados con oro amarillo de 18 kt, constando un peso aproximado entre 7 gr y 10 gr (Par de aros).',
            'url': '/tesisJoyeria/images/Aros/220-Btns23.png',
            'thumbUrl': '/tesisJoyeria/images/Aros/220-Btns23.png' // used only for this example
        }, {
            'codigo':'DDO-001',
            'caption': 'Dije elaborados con oro amarillo de 18 kt y piedras amatista o piedras a su elecci&#243n, constando un peso aproximado entre 3 gr y 5 gr.',
            'url': '/tesisJoyeria/images/Dijes/220-Btns34.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns34.png' // used only for this example
        },
        {
            'codigo':'DDO-002',
            'caption': 'Dije elaborados con oro amarillo y blanco de 18 kt, constando un peso aproximado entre 3 gr y 5 gr',
            'url': '/tesisJoyeria/images/Dijes/220-Btns35.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns35.png'
        },
        {
            'codigo':'DDO-003',
            'caption': 'Dije elaborados con oro amarillo de 18 kt, constando un peso aproximado entre 2 gr y 4 gr.',
            'url': '/tesisJoyeria/images/Dijes/220-Btns36.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns36.png'
        },{
            'codigo':'DDO-004',
            'caption': 'Dije elaborados con oro amarillo de 18 kt, constando un peso aproximado entre 1 gr y 2 gr.',
            'url': '/tesisJoyeria/images/Dijes/220-Btns37.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns37.png' // used only for this example
        },
        {
            'codigo':'DDO-005',
            'caption': 'Dije elaborados con oro amarillo de 18 kt, constando un peso aproximado entre 1 gr y 3 gr.',
            'url': '/tesisJoyeria/images/Dijes/220-Btns38.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns38.png'
        },{
            'codigo':'DDO-006',
            'caption': 'Dije elaborados con oro amarillo de 18 kt, constando un peso aproximado entre 1 gr y 1.5 gr.',
            'url': '/tesisJoyeria/images/Dijes/220-Btns39.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns39.png' // used only for this example
        },
        {
            'codigo':'DDO-007',
            'caption': 'Dije elaborados con oro amarillo de 18 kt con circones y/o diamantes, constando un peso aproximado entre 3 gr y 4 gr.',
            'url': '/tesisJoyeria/images/Dijes/220-Btns40.png',
            'thumbUrl': '/tesisJoyeria/images/Dijes/220-Btns40.png'
        },{
            'codigo':'PDO-001',
            'caption': 'Pulsera elaborada con oro amarillo de 18 kt, constando un peso aproximado entre 6 gr y 10 gr.',
            'url': '/tesisJoyeria/images/Pulseras/220-Btns41.png',
            'thumbUrl': '/tesisJoyeria/images/Pulseras/220-Btns41.png' // used only for this example
        },
        {
            'codigo':'PDO-002',
            'caption': 'Pulsera elaborada con oro amarillo de 18 kt, constando un peso aproximado entre 15 gr y 25 gr.',
            'url': '/tesisJoyeria/images/Pulseras/220-Btns42.png',
            'thumbUrl': '/tesisJoyeria/images/Pulseras/220-Btns42.png'
        },
        {
            'codigo':'PDO-003',
            'caption': 'Pulsera elaborada con oro amarillo de 18 kt, constando un peso aproximado entre 15 gr y 20 gr.',
            'url': '/tesisJoyeria/images/Pulseras/220-Btns43.png',
            'thumbUrl': '/tesisJoyeria/images/Pulseras/220-Btns43.png'
        },{
            'codigo':'PDO-004',
            'caption': 'Pulsera elaborada con oro amarillo de 18 kt, constando un peso aproximado entre 20 gr y 25 gr.',
            'url': '/tesisJoyeria/images/Pulseras/220-Btns44.png',
            'thumbUrl': '/tesisJoyeria/images/Pulseras/220-Btns44.png' // used only for this example
        }
    ];


    $scope.next1=function(){
        console.log('siguiente');
        console.log($scope.inicio+'inicio');
        console.log($scope.fin+'fin');


        if(!$scope.flag) {

            $scope.inicio = $scope.fin;
            $scope.fin += 4;
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
            $scope.fin += 4;
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
            $scope.inicio -= 4;

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
                    $scope.fin=4;
                    break;
                }

            }
            console.log($scope.flag2 + 'actual');
        }

    }
});
