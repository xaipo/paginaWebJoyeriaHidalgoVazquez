/**
 * Created by xaipo on 11/21/2015.
 */

app.controller('CargasController', function ($timeout, $rootScope, $scope, $location) {

   // $scope.usuarioLog=$localStorage.usr;
   // $scope.usuarioLog=$localStorage.getItem('usuario');




    //console.log(data);
    //console.log($scope.usuarioLog.nombre_usuario);
   // $scope.usuarioLog= JSON.parse ($scope.usuarioLog);
   // console.log($scope.usuarioLog+" entro");

    $scope.showCargarArchivos = function (pathurl) {



            console.log('entra');
            $timeout(function () {
                $location.path(pathurl);
                $location.replace();
                console.log($location.path());
            });



    };



});