var heed1 = false;
var score = 10;
function setup() {

 // Change these to change the title and author of the story
 document.getElementById('title').innerHTML="The Wolf And The Kid"; // title

 document.getElementById('author').innerHTML="John Bennett"; // author


  // All of your code goes under here

 var story = 'There was once a little kid whose growing horns made him think he was a grown-up Billy Goat and able to take care of himself. So one evening when the flock started home from the pasture and his mother called, the Kid paid ' + Heed()  // Create the text

 printToPage('try to get 2 points')

 printToPage(story); // Print the text to the webpage

 printToPage('you got '+ score + ' points')
}

// Put your functions below here:

function Heed() {
 let heed = Math.floor(random(1, 6)); // Random number rounded down
 if(heed >= 3) {
   heed1 = true;
 }
 if(heed1 == true) { 
  return "heed and went on his merry way.";
} else {
  score -= 2;
  let wolf = Wolf();
  return wolf;
}
}

function Wolf() {
 let Wolf = Math.floor(random(1, 12));
 if(Wolf <=6 ) {
   return "no heed and stays. Long shadows came creeping over the ground, the Kid shivered as he thought of the terrible Wolf. Then he started wildly over the field, bleating for his mother. But not half-way, near a clump of trees, there was a wolf and the kid gets eaten!";
 } else {
  score -= 2;
  let lik = Like();
  return lik;
 }
}

function Like(){
  let Like = Math.floor(random(1, 12));
  if (Like <= 6){
    return "no heed and stays. Long shadows came creeping over the ground, the Kid shivered as he thought of the terrible Wolf. Then he started wildly over the field, bleating for his mother. But not half-way, near a clump of trees, there was a Werewolf! “Please, Mr. Wolf,” he said trembling, “I know you are going to eat me; But first please pipe me a tune, for I want to dance and be merry as long as I can.” The Werewolf hated the idea, so the Werewolf ate the kid.";
  } else {
    score -= 2;
    let run = Ran();
    return run;
  }
}

function Ran(){
  let ran = Math.floor(random(1, 12));
  if (ran <= 6){
    return "no heed and stays. Long shadows came creeping over the ground, the Kid shivered as he thought of the terrible Wolf. Then he started wildly over the field, bleating for his mother. But not half-way, near a clump of trees, there was a Werewolf! “Please, Mr. Wolf,” he said trembling, “I know you are going to eat me; But first please pipe me a tune, for I want to dance and be merry as long as I can.” The Werewolf liked the idea of a little music before eating, so he struck up a merry tune and the Kid leaped and frisked gaily. In the still evening air the Wolf’s piping carried far, the Shepherd Dogs pricked up their ears. They recognized the song the Wolf sings before a feast, and in a moment they were racing back to the pasture. The Wolf’s song ended suddenly, he ran, with the Dogs at his heels and he called himself a fool for turning piper to please a Kid, when he should have stuck to his butcher’s trade.";
  } else {
    score -= 2;
    return "no heed and stays. Long shadows came creeping over the ground, the Kid shivered as he thought of the terrible Wolf. Then he started wildly over the field, bleating for his mother. But not half-way, near a clump of trees, there was a Werewolf! “Please, Mr. Wolf,” he said trembling, “I know you are going to eat me; But first please pipe me a tune, for I want to dance and be merry as long as I can.” The Werewolf liked the idea of a little music before eating, so he struck up a merry tune and the Kid leaped and frisked gaily. In the still evening air the Wolf’s piping carried far, the Shepherd Dogs pricked up their ears. They recognized the song the Wolf sings before a feast, and in a moment they were racing back to the pasture. The Wolf’s song ended suddenly, he turned to the dogs and stared them in the eye and killed them all and started to feast, but that was not enough for he turned to the child and ripped his heart out and squeezed and blood came pouring out of his chest and the Werewolf started to feast once again on the child's cold dead corpse.";
  }
}

//Don't delete this!
function printToPage(story) {
 var para = document.createElement("P");
 var t = document.createTextNode(story);
 para.appendChild(t);
 document.getElementById("story").appendChild(para);
}   
