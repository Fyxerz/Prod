var TEXT;

var app = angular.module('markDownEditor',[]);

app.controller('writingSpaceController', function($scope){
	$scope.textSpace = "";

	$scope.parseContent = function() {
		// Create array to put markdown in.
		TEXT = [];

		splitStringBy($scope.textSpace, "<br>", loopArray(function(x) {
			TEXT.push(checkType(x));
		}));

		var fullText = "";
		
		for (var i in TEXT) {
			var partialText = toHTML(TEXT[i]);

			partialText !== undefined ? fullText = fullText + TEXT[i].html : console.log("It's " + partialText);
		}
		console.log(fullText);
	}
}).
  directive('contenteditable', contenteditableDirective);


 