
function splitStringBy(string, type, func) {

	// Split string by type.
	var splitArray = string.split(type);
	console.log(splitArray);

	// Do something with the array.
	func !== undefined ? func(splitArray) : splitArray;
}



function loopArray(func, array) {
    // Return function for looping.
    return function(array) {
        // Loop through array.
        for (var i in array) {
            func(array[i]);
        }
    }
}


function checkType(elem) {
	// CHECK IF TITLE
	var start = 0
	if (elem.charAt(start) == '#') {
		heading = 0;

		// CHECK HOW MANY OF # THE TITLE HAS.
		while (elem.charAt(heading) == '#') {
			heading ++;
		}
		return {type: 'h' + heading, content: elem.slice(heading + 1)}
	}

	//  CHECK IF PARAGRAPH
	else if (elem.charAt(0) >= 'A' && elem.charAt(0) <= 'z' ) {
		return {type: 'p', content: elem}
	}

	// Check if unordered list.
	else if (elem.charAt(0) == '-') {
		return {type: 'ul', content: elem.slice(charAt(0))}
	}
	else if (elem.length < 1) {
		return {type: 'br', content: ' '}
	}
	else {
		return {type: 'div', content: elem}
	}
}

// Transform objects into Md follwing type.
function toHTML(object) {
	object.html = "<" + object.type + ">" + object.content + "</" + object.type + ">";
}