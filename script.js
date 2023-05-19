
const trainer = {};


trainer.Name = "Fher";
trainer.Age = 20;
trainer.Pokemon = [];
trainer.Friends = {
  bestFriends: ["Ash", "Hilda"],
  closeFriends: ["Gloria", "Victor"]
};


trainer.talk = function() {
  console.log("Pikachu! I choose you!");
};


console.log("Name: " + trainer.Name);  
console.log("Age: " + trainer['Age']);  


trainer.talk();  


function Pokemon(name, level) {
  this.Name = name;
  this.Level = level;
  this.Health = level * 20;  
  this.Attack = level * 5;  
}


const eevee = new Pokemon("Eevee", 10);
const pikachu = new Pokemon("Pikachu", 5);
const ditto = new Pokemon("Ditto", 8);


Pokemon.prototype.tackle = function(targetPokemon) {
  targetPokemon.Health -= this.Attack;
  

  if (targetPokemon.Health <= 0) {
    this.faint(targetPokemon);
  }
};


Pokemon.prototype.faint = function(targetPokemon) {
  console.log(targetPokemon.Name + " has fainted.");
};


pikachu.tackle(pikachu);  

console.log(pikachu); 