const searchInput = document.querySelector('#search');
const matchList = document.querySelector('#match-list'); 

//Search the states.json and filter 

async function searchStates(searchText) {
	const res = await fetch('../data/states.json'); 
	const states = await res.stringifyJSON(); 

	console.log(states); 
}




searchInput.addEventListener('input', () => searchStates(search.value)); 
