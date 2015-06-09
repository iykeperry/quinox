app.config(function($stateProvider, $urlRouterProvider)
{
	 $urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		name: 'home',
		url: '/home',
		controller: 'HomeCtrl',
		templateUrl: 'angular/login.html'
	})

	.state('tab2', {
		name: 'tab2',
		url: '/tab2',
		template: '<div class="tab tab2"><p>Airedale hard cheese roquefort. Paneer pepper jack jarlsberg st. agur blue cheese bavarian bergkase macaroni cheese             croque monsieur cauliflower cheese. Bavarian bergkase cheesy grin port-salut taleggio stinking bishop cheese and biscuits rubber cheese blue   castello. Everyone loves.</p></div>'
	})

	.state('tab3', {
		name: 'tab3',
		url: '/tab3',
		template: '<div class="tab tab3"><p>Cheese and biscuits stinking bishop jarlsberg. Boursin melted cheese emmental cheeseburger cheese slices mozzarella cream cheese say cheese. Macaroni cheese fondue mozzarella cheese strings cheese triangles when the cheese comes out everybody\'s happy cheese on toast croque monsieur. Stinking bishop rubber cheese when the cheese comes out everybody\'s happy paneer cheesy feet.</p></div>'
	})

	.state('tab4', {
		name: 'tab4',
		url: '/tab4',
		template: '<div class="tab tab4"><p>Bocconcini hard cheese stinking bishop. Cheesecake gouda cheese and biscuits red leicester airedale cheeseburger say cheese pecorino. St. agur blue cheese cheese triangles emmental pecorino monterey jack cut the cheese emmental cheese slices. Manchego cow cheeseburger airedale who moved my cheese cottage cheese airedale feta. Parmesan.</p></div>'
	});
});

app.controller("HelloController", function($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
    });