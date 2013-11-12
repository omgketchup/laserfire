var myApp = angular.module("myApp", []);

myApp.directive("superman", function(){
	return{
		restrict: "A",
		link: function(){
			alert("I'm working stronger!");
		}
	}
})

myApp.directive("flash", function(){
	return{
		restrict: "C",
		link: function(){
			alert("I'm working faster!");
		}
	}
})

//old stuff
myApp.factory("Data", function(){
	return {message:"I'm data from a service."}
});

myApp.factory("Avengers", function(){
	var Avengers = {};
	Avengers.cast = [
        {
            name: "Robert Downey Jr.",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Banner / The Hulk"
        },
        {
            name: "Chris Hemsworth",
            character: "Thor"
        },
        {
            name: "Scarlett Johansson",
            character: "Natasha Romanoff / Black Widow"
        },
        {
            name: "Jeremy Renner",
            character: "Clint Barton / Hawkeye"
        },
        {
            name: "Tom Hiddleston",
            character: "Loki"
        },
        {
            name: "Clark Gregg",
            character: "Agent Phil Coulson"
        },
        {
            name: "Cobie Smulders",
            character: "Agent Maria Hill"
        },
        {
            name: "Stellan Skarsgard",
            character: "Selvig"
        },
        {
            name: "Samuel L. Jackson",
            character: "Nick Fury"
        },
        {
            name: "Gwyneth Paltrow",
            character: "Pepper Potts"
        },
        {
            name: "Paul Bettany",
            character: "Jarvis (voice)"
        },
        {
            name: "Alexis Denisof",
            character: "The Other"
        },
        {
            name: "Tina Benko",
            character: "NASA Scientist"
        }
    ];
	return Avengers;
});

function AvengersCtrl($scope, Avengers){
	$scope.avengers = Avengers;
}
