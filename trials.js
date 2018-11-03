/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

// Add function to prnt profile info
function showProfile(melonName, catchphrase, location) {
	console.log('PROFILE:');
	console.log(`Name: ${melonName}`);
	console.log(`Catchphrase: ${catchphrase}`);
	console.log(`Location: ${location}`);
}


/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

function showLikes (likesArray) {
	console.log('THINGS I LIKE:');
	for (let i = 0; i < likesArray.length; i++){
		console.log(`${likesArray[i]}`)
	}
	
}

// Add function to print interests



/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
	'food' : 'pebbles',
	'tree' : 'palm',
	'quote' : 'Bock bock bock',
	'color' : 'green'
  // Add more favorites
};


// Add function to print favorites

function showFavorites (favoritesObject) {
	console.log('FAVORITES:');
	for (let [i, k] of Object.entries(favoritesObject)) {
		console.log(`${i}: ${k}`);
	}
}
showFavorites(favorites)
/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction
function addTransaction(date, amount, currentTransactions) {
	currentTransactions[date] = amount
}

// Create object to hold transactions

const transactions = {
	'may2': -500,
	'may13': +1200,
	'may15': -100,
	'may21': -359,
	'may29': +2200
}


/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status
function getBalanceStatus(currentBalance) {
	if (currentBalance < 0) {
		console.log('YOU ARE OVERDRAWN');
	} else if (currentBalance < 20) {
		console.log('Warning! Your balance is almost 0!')
	} else {
		console.log('Normal')
	}
}

/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance
function getCurrentBalance(currentBalance, transactionsLog) {
	for (let i of Object.values(transactionsLog)) {
		currentBalance += i;
		if (currentBalance < 0) {
			currentBalance -= 25;
		}
	}
	return currentBalance
}
console.log(getCurrentBalance(100, {'may2' : -5}))

/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity



/////////////////////////////////////////////////////////
// Creating a User Object

// Add user object

// Add function to print user dashboard



/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members



/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours

