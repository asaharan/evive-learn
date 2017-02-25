var app = angular.module("learnEviveApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
	var documentationViewConfig = {
		templateUrl: './views/doc.html',
		controller: 'documentationCtrl',
	}
    $routeProvider
    .when("/", documentationViewConfig )
    .when("/index.html", documentationViewConfig )
    .otherwise({redirectTo:'/index.html'})

    $locationProvider.html5Mode({
    	enabled: true,
    	requireBase: false})
    .hashPrefix('*');
});

app.controller('documentationCtrl',function($scope, $routeParams){
	$scope.navbar = {url:'./templates/navbar.html'};
	$scope.sidebar = {url:'./templates/sidebar.html'};
	$scope.footer = {url:'./templates/footer.html'};
	$scope.sidebarClicked = 0;
	var pageId = $routeParams.t;
	var completeData = window.pageInfo;
	
	$scope.pageInfo = {};
	for(var i=0;i < completeData.length;i++){
		if(completeData[i].id==pageId){
			$scope.pageInfo = completeData[i];
			break;
		}

		if(i==completeData.length-1){
			$scope.pageInfo = {
				id:'home',
				templateUrl:'views/home.html',
				sidebar:false,
			}
			$scope.homeData = window.homeData;
		}
	}
	$scope.selectSomething = function(e){
		if($scope.sidebarClicked==e){
			$scope.sidebarClicked = 0;
		}else{
			$scope.sidebarClicked=e;
		}
	}
	$scope.sidebarInfo = window.sidebarInfo;

});