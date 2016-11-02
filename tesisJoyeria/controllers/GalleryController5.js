/**
 * Created by xaipo on 10/28/2016.
 */
app.controller('GalleryCtrl5', function ($scope, Lightbox) {
    $scope.selectedImg;
    $scope.show=[];
    $scope.inicio=0;
    $scope.fin=0;
    $scope.flag=false;
    $scope.flag2=true;
    $scope.images = [
        {
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
