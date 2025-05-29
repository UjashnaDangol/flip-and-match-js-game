const animals =[
  {id:"cow",
   images: "images/cow.png"
  },
   {id:"dog",
   images: "images/dog.png"
  },

    {id:"frog",
   images: "images/frog.png"
  },
   {id:"hen",
   images: "images/hen.png"
  },

    {id:"kitty",
   images: "images/kitty.png"
  },
   {id:"lion",
   images: "images/lion.png"
  },

   {id:"rabbit",
   images: "images/rabbit.png"
  },
   {id:"tiger",
   images: "images/tiger.png"
  }
]

function shuffle(array){
 for (let i = array.length -1 ; i>0 ; i--){
  
 let j = Math.floor(Math.random()*(i+1));

 let temp ;

temp =array[i];
 array[i]=array[j];
 array[j]= temp;

}
 return array;
}


window.addEventListener("DOMContentLoaded", function () {
document.getElementById("shuffle").addEventListener('click',function shuffleCards(){
   let imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML= "";

const doubledAnimals= [...animals,...animals];
const shuffledarray= shuffle(doubledAnimals);

shuffledarray.forEach(animal=>{

  let card = document.createElement("div");
  card.classList.add("card");

  let cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  let cardFront = document.createElement("div");
  cardFront.classList.add("card-front");

  let img = document.createElement("img");
  img.src = animal.images;
  img.id = animal.id;
  img.classList.add("animal-img");
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";

  cardFront.appendChild(img);

  let cardBack=document.createElement("div");
  cardBack.classList.add("card-back");

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  

  imageContainer.appendChild(card);
});
  
}
);
}
);


document.getElementById("imageContainer").addEventListener('click',function(e){

  let card= e.target.closest(".card");
  if(card){
    card.classList.toggle("flipped");
  }
});

