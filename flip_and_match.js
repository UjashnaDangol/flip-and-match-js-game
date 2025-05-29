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
let img = document.createElement("img");
  img.src = animal.images;
  img.id = animal.id;
  img.style.width= "100px";
  img.style.margin= "80px";
  

  imageContainer.appendChild(img);
});
  
}
);
}
);

