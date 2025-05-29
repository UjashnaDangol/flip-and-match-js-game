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

window.addEventListener("DOMContentLoaded", function () {
document.getElementById("shuffle").addEventListener('click',function shuffleCards(){
   let imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML= "";
for (let i = 0 ; i < animals.length ; i++){
  
 
  let img = document.createElement("img");
  img.src = animals[i].images;
  img.id = animals[i].id;
  img.style.width= "100px";
  img.style.margin= "80px";
  

  imageContainer.appendChild(img);
}
});

});
