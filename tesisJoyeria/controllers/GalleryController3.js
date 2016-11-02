
app.controller('GalleryCtrl3', function ($scope, Lightbox) {
    $scope.selectedImg;
    $scope.show=[];
    $scope.inicio=0;
    $scope.fin=0;
    $scope.flag=false;
    $scope.flag2=true;
    $scope.images = [
        {
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