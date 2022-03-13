class Player{
    constructor(name){
        this.name = name;
        this.playerCards = [];
        this.score = 0;
    }
}

class Card{
    constructor(suit, value, royalty){
        this.suit = suit
        this.value = value
        this.royalty = royalty
        this.sortNumber = 0
    }
}

class Deck{
    constructor(){
        this.cards = []
        this.makeDeck
        this.shuffleDeck
    }

    makeDeck(){
        let suit = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];
        let royalty = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for(let i = 0; i < suit.length; i++){
            for(let l = 0; l < royalty.length; l++){
                let newCard = new Card(suit[i],(l +1), royalty[l]);
                newCard.sortNumber = Math.random();
                this.cards.push(newCard);
            }
        }
    }

    shuffleDeck(){
        this.cards.sort(compareSortNumber);
    }
}

class Game{
    constructor(){
        this.deck;
        this.players = [];
        this.runGame;
        this.dealCards;
    }

    dealCards(){
        let half = this.deck.cards.length / 2;
        this.players[0].playerCards = this.deck.cards.slice(0, half);
        this.players[1].playerCards = this.deck.cards.slice(-half);
    }

    runGame(){
        this.players.push(new Player('Josh'));
        this.players.push(new Player('Sydney'));

        this.deck = new Deck;
        this.deck.makeDeck();
        this.deck.shuffleDeck();
        this.dealCards();

        for(let i = 0; i < this.players[i].playerCards.length; i++){
            console.log(`${this.players[0].name} drew ${this.players[0].playerCards[i].royalty} of ${this.players[0].playerCards[i].suit}`);
            console.log(`${this.players[1].name} drew ${this.players[1].playerCards[i].royalty} of ${this.players[1].playerCards[i].suit}`);
            if(this.players[0].playerCards[i].value > this.players[1].playerCards[i].value){
                this.players[0].score++;
                console.log(`${this.players[0].name} won this round!`);
            }else if(this.players[0].playerCards[i].value < this.players[1].playerCards[i].value){
                this.players[1].score++;
                console.log(`${this.players[1].name} won this round!`);
            }else{
                console.log(`Tie!`);
            }

            if(this.players[0].score > this.players[1].score){
                console.log(`${this.players[0].name} Wins!!!`);
            }else if(this.players[0].score < this.players[1].score){
                console.log(`${this.players[1].name} Wins!!!`);
            }else{
                console.log(`Wow. Neither of you won. How boring.`);
            }
        }
    }
    
}    

function compareSortNumber(w, y){
    if( w.sortNumber > y.sortNumber){
        return 1;
    }
    if( w.sortNumber < y.sortNumber){
        return -1;
    }
    return 0;
}

let war = new Game
war.runGame();