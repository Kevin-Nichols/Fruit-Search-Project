const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//This convets the fruit array into an all lower cased version.
const lowerFruit = fruit.map(fruit => fruit.toLowerCase());

//Creates a valiable that grabs input text and makes it lower case. creates a valiable that compares the input and lowerFruit, then creates a new array. Returns the new filtered array and changes the first letter back to upper case.
function search(str) {
	let userInput = input.value.toLowerCase();
	let filterFruit = lowerFruit.filter(word => word.match(userInput));
	let results = filterFruit.map(x => x.charAt(0).toUpperCase() + x.substring(1));
	return results;
}


//Set the suggestions div to empty. Call showSuggestions using the results by calling the search function using the input value.
function searchHandler(e) {
	suggestions.innerHTML='';
	showSuggestions(search(input.value));
}

//Loop through if the results are not undefined and not empty, create an li and appened.
function showSuggestions(results) {
	for(let i = 0; i<=fruit.length; i++){
		if(results[i] != undefined && input.value != ''){
			let suggList = document.createElement('li');
			suggList.innerText = results[i];
			suggestions.appendChild(suggList);
		}
	}
}

//If the target clicked on is an li, make the input text = to the target text and set the suggestions div to empty.
function useSuggestion(e) {
	if(e.target.tagName === 'LI'){
		input.value = e.target.innerText;
		suggestions.innerHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion); 