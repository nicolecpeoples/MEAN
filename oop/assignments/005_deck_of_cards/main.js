function Deck(){
	this.deck = [];

	this.stack = function(){
		var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
		var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

		for(var i = 0; i < suits.length; i++) {
			for(var j = 0; j < ranks.length; j++){
				this.deck.push(ranks[j] +  " of " +suits[i] );
			}
		}

		return this; //this will let you chain methods by returning itself
		
	}

	this.shuffle = function() {
		for(var i = this.deck.length; i ; i-=1){

			var rand = Math.floor(Math.random(this.deck.length) * i );
			//perform swap
			var temp = this.deck[i-1];
			this.deck[i-1] = this.deck[rand];
			this.deck[rand] = temp;

		}
		return this;
	}

	this.reset = function() {

	}

	this.dealOne= function(){

		return this.deck.pop();
	}
}

function Player(name){
	this.name = name;
	this.hand = [];

	this.takeCard = function(deck){
		this.hand.push(deck.dealOne());
		return this;
	}

	this.discard = function(num){
		this.hand.splice(num-1, 1);
		return this;
	}
}

var newDeck = new Deck();
newDeck.stack().shuffle();
console.log(newDeck.deck);

var player1 = new Player("nicole");
console.log(player1.name);
player1.takeCard(newDeck).takeCard(newDeck);
console.log(player1.hand);
