/**
 * Created by xaipo on 10/28/2016.
 */
/**
 * Created by xaipo on 10/28/2016.
 */
app.controller('GalleryCtrl4', function ($scope, Lightbox) {
    $scope.selectedImg;
    $scope.show=[];
    $scope.inicio=0;
    $scope.fin=0;
    $scope.flag=false;
    $scope.flag2=true;
    $scope.images = [
        {
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