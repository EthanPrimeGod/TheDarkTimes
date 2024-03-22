 let currentScrollY = window.scrollY; // save the current scroll position for comparison

 window.addEventListener("load", (event) => {
  let arr = []
    for(let i = 0; i<document.getElementsByClassName("article").length; i++){
      arr.push(1)
      document.getElementsByClassName("article")[i].style.display = "flex"
       
    }
    for(let i = 0; i<document.getElementsByClassName("checkbox").length; i++){
  
      document.getElementsByClassName("checkbox")[i].style.background = "rgba(24, 24, 24, 0)";
  
    }
  
    document.getElementById("results--number").innerText = `${arr.length}`;
 
});

  
document.addEventListener("scroll", function() {

  
   if(window.scrollY != 0){
      document.getElementsByClassName("top")[0].classList.add("border-bottom")
   }else{
     document.getElementsByClassName("top")[0].classList.remove("border-bottom")
   }


 })

 for(let i = 0; i < document.getElementsByClassName("table-link").length; i++){
  
  document.getElementsByClassName("table-link")[i].addEventListener("click",()=>{
  
    document.getElementsByTagName("h2")[i].scrollIntoView({ behavior: "smooth", block: "center" });
  })

 }

 for(let i = 0; i< document.getElementsByClassName("more-stories--story-cont").length; i++ ){
  document.getElementsByClassName("more-stories--story-cont")[i].addEventListener("mouseover", ()=>{
    document.getElementsByClassName("more-stories--img")[i].classList.add("scale10")
    document.getElementsByClassName("more-stories--story-cont")[i].classList.add("scale5")
  })
  
  document.getElementsByClassName("more-stories--story-cont")[i].addEventListener("mouseout", ()=>{
    document.getElementsByClassName("more-stories--img")[i].classList.remove("scale10")
    document.getElementsByClassName("more-stories--story-cont")[i].classList.remove("scale5")
  })
}


 let stories = document.getElementById("articles--main");
 let about = document.getElementById("info");
 let support = document.getElementById("support--cont");
 let social = document.getElementById("contact");
 
 document.getElementsByClassName("stories")[0].addEventListener("click",()=>{
     stories.scrollIntoView({ behavior: "smooth", block: "start" });
 })
 
 document.getElementsByClassName("about")[0].addEventListener("click",()=>{
   about.scrollIntoView({ behavior: "smooth", block: "start" });
 })
 
 document.getElementsByClassName("help")[0].addEventListener("click",()=>{
   support.scrollIntoView({ behavior: "smooth", block: "center" });
 })
 
 document.getElementsByClassName("social")[0].addEventListener("click",()=>{
   social.scrollIntoView({ behavior: "smooth", block: "center" });
 })
 



document.getElementById("articles--search").addEventListener("keyup", (e)=>{
  if(e.key === 'Enter'){
   
    let filtername = document.getElementById("articles--search").value
    document.getElementById("articles--search").value =''

    let arr = []
    for(let i = 0; i<document.getElementsByClassName("article").length; i++){

      document.getElementsByClassName("article")[i].style.display = "flex"
    }

    for(let i = 0; i<document.getElementsByClassName("checkbox").length; i++){

      document.getElementsByClassName("checkbox")[i].style.background = "rgba(24, 24, 24, 0)";

    }


    for(let i = 0; i<document.getElementsByClassName("article").length; i++){
      
      if(document.getElementsByClassName("article--info-title")[i].innerText.toUpperCase().includes(filtername.toUpperCase())){
        arr.push(1)
        document.getElementsByClassName("article")[i].style.display = "flex"
       
      }
      else{
        document.getElementsByClassName("article")[i].style.display = "none"
      }
    }

    document.getElementById("results--number").innerText = `${arr.length}`;
    
  }
})








// let element = document.getElementsByClassName("body")[0]

// element.addEventListener("scroll", (event) => {
//     output.innerHTML = "Scroll event fired!";
//     setTimeout(() => {
//       output.innerHTML = "Waiting on scroll events...";
//     }, 1000);
// });


  //  let vid = document.getElementsByClassName("video")[0];
  //  vid.playbackRate = 1;


// let stories = document.getElementsByClassName("stories-cont")[0]
// let support = document.getElementsByClassName("support-cont")[0]
// let social = document.getElementsByClassName("social")[0]
// let tops = document.getElementsByClassName("top")[0]

// document.getElementsByClassName("stories")[0].addEventListener("click",()=>{
//   stories.scrollIntoView({ behavior: "smooth", block: "center" });
// })


// document.getElementsByClassName("support")[0].addEventListener("click",()=>{
  
//   support.scrollIntoView({ behavior: "smooth", block: "center" });
// })

// document.getElementsByClassName("to-top")[0].addEventListener("click",()=>{
  
//   tops.scrollIntoView({ behavior: "smooth", block: "center" });
// })


// document.getElementsByClassName("social_btn")[0].addEventListener("click",()=>{
  
//   social.scrollIntoView({ behavior: "smooth", block: "center" });
// })


// document.getElementsByClassName("top-article")[0].addEventListener("mouseover", ()=>{
//   document.getElementsByClassName("top-article")[0].classList.add("grow")
//   for(let i =1; i<document.getElementsByClassName("top-article").length; i++){
//     document.getElementsByClassName("top-article")[i].classList.add("shrink")
//   }
// })

// document.getElementsByClassName("top-article")[0].addEventListener("mouseout", ()=>{
//   document.getElementsByClassName("top-article")[0].classList.remove("grow")
//   for(let i =1; i<document.getElementsByClassName("top-article").length; i++){
//     document.getElementsByClassName("top-article")[i].classList.remove("shrink")
//   }
// })



for(let x =1; x <document.getElementsByClassName("filter-name").length; x++){
  document.getElementsByClassName("flex--row")[x].addEventListener("click", ()=>{
    let arr = []
    for(let i = 0; i<document.getElementsByClassName("article").length; i++){

      document.getElementsByClassName("article")[i].style.display = "flex"
    }

    for(let i = 0; i<document.getElementsByClassName("checkbox").length; i++){

      document.getElementsByClassName("checkbox")[i].style.background = "rgba(24, 24, 24, 0)";

    }

    document.getElementsByClassName("checkbox")[x].style.background = "white";
    let filtername = document.getElementsByClassName("filter-name")[x].innerText
    for(let i = 0; i<document.getElementsByClassName("article").length; i++){
      
      if(`${document.getElementsByClassName("article--topic")[i].innerText}` == `${filtername}`){
        arr.push(1)
        document.getElementsByClassName("article")[i].style.display = "flex"
       
      }
      else{
        document.getElementsByClassName("article")[i].style.display = "none"
      }
    }

    document.getElementById("results--number").innerText = `${arr.length}`;
  })
}



document.getElementsByClassName("flex--row")[0].addEventListener("click", ()=>{
  let arr = []
  for(let i = 0; i<document.getElementsByClassName("article").length; i++){
    arr.push(1)
    document.getElementsByClassName("article")[i].style.display = "flex"
     
  }
  for(let i = 0; i<document.getElementsByClassName("checkbox").length; i++){

    document.getElementsByClassName("checkbox")[i].style.background = "rgba(24, 24, 24, 0)";

  }

  document.getElementsByClassName("checkbox")[0].style.background = "white";
  document.getElementById("results--number").innerText = `${arr.length}`;
})



function shiftRight(array){
   
  let arry2 = [] 
  arry2[0] = array.slice(array.length-1)[0]
  for(let i = 1; i<array.length; i++){
   arry2[i] = array[i-1]
  }
  for(let i = 0; i<array.length; i++){
   array[i] = arry2[i]
  }
  return arry2
}

function shiftLeft(array){
   
  let arry2 = [] 
  arry2[array.length-1] = array[0]
  console.log(arry2)
  for(let i = 0; i<array.length-1; i++){
   arry2[i] = array[i+1]
  }
  for(let i = 0; i<array.length; i++){
   array[i] = arry2[i]
  }
  return arry2
}



// let arr = ['first','second','third']
// let arr2 = ['left-dot','middle-dot','right-dot']


// document.getElementsByClassName("right")[0].addEventListener("click",()=>{

//   shiftRight(arr)
//   shiftRight(arr2)
//   document.getElementsByClassName("first")[0].classList.remove("first");
//   document.getElementsByClassName("second")[0].classList.remove("second");
//   document.getElementsByClassName("third")[0].classList.remove("third");

//   document.getElementsByClassName("left-dot")[0].classList.remove("left-dot");
//   document.getElementsByClassName("middle-dot")[0].classList.remove("middle-dot");
//   document.getElementsByClassName("right-dot")[0].classList.remove("right-dot");

//   document.getElementsByClassName("info--img")

//   const slides = document.getElementsByClassName("info-cont--3");
//   const dots = document.getElementsByClassName("dots");

//   for(let i = 0; i< slides.length; i++){
//     slides[i].classList.add(arr[i]);
//     dots[i].classList.add(arr2[i]);
//   }
// })



document.getElementsByClassName("left")[0].addEventListener("click",()=>{
  console.log(document.getElementsByClassName("second")[0].classList)
  document.getElementsByClassName("second")[0].classList.remove("second");
  console.log(document.getElementsByClassName("second")[0]);
  shiftLeft(arr)
  shiftLeft(arr2)
  document.getElementsByClassName("first")[0].classList.remove("first");
  document.getElementsByClassName("second")[0].classList.remove("second");
  document.getElementsByClassName("third")[0].classList.remove("third");

  document.getElementsByClassName("left-dot")[0].classList.remove("left-dot");
  document.getElementsByClassName("middle-dot")[0].classList.remove("middle-dot");
  document.getElementsByClassName("right-dot")[0].classList.remove("right-dot");


  const slides = document.getElementsByClassName("info-cont--3");
  const dots = document.getElementsByClassName("dots");

  
  for(let i = 0; i< slides.length; i++){
    slides[i].classList.add(arr[i]);
    dots[i].classList.add(arr2[i]);
  }
})

  setTimeout(() => {
    for(let i=0; i<document.getElementsByClassName('article').length; i++){
   
     setInterval(() => {
        document.getElementsByClassName('article')[i].classList.remove("fly")
      }, i*150);
    
  
   }
}, 1000);



window.onload = function() {
  window.addEventListener("scroll", handleScroll);
};


function handleScroll() {
  const element = document.getElementsByClassName("to-top")[0];
  if (window.scrollY === 0) {
    element.style.opacity = "0";
  } else {
    element.style.opacity = "1";
  }
}



const articles = document.getElementsByClassName("article");

for(let i = 0; i< articles.length; i++){
  
  document.getElementsByClassName("article")[i].addEventListener("mouseover", ()=>{
    document.getElementsByClassName("article-img")[i].classList.add("zoom")
  })
  
  document.getElementsByClassName("article")[i].addEventListener("mouseout", ()=>{
    document.getElementsByClassName("article-img")[i].classList.remove("zoom")
  })
  

}


document.getElementsByClassName("all-button")[0].addEventListener("click", ()=>{
  
  // START LOADING ANIMATION
  
  for(let i = 0; i < articles.length; i++){
    articles[i].classList.add("rand") 
  }

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "none";   
    }
  }, 600);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "flex";
    }
  
  }, 700);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      setTimeout(() => {
        articles[i].classList.remove("rand");
      }, i*150);
     
    }
  }, 800);
})




document.getElementsByClassName("science-button")[0].addEventListener("click", ()=>{
  
  // START LOADING ANIMATION


  for(let i = 0; i < articles.length; i++){
    articles[i].classList.add("rand") 
  }

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "none";   
    }
  }, 600);

  // STOP LOADING ANIMATION

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("science")){
        articles[i].style.display = "flex";
      }
    }
  
  }, 700);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("science")){

        setTimeout(() => {
          articles[i].classList.remove("rand");
        }, i*150);
      }
    }
  }, 800);
})


document.getElementsByClassName("culture-button")[0].addEventListener("click", ()=>{
  
  // START LOADING ANIMATION


  for(let i = 0; i < articles.length; i++){
    articles[i].classList.add("rand") 
  }

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "none";   
    }
  }, 600);

  // STOP LOADING ANIMATION

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("culture")){
        articles[i].style.display = "flex";
      }
    }
  
  }, 700);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("culture")){
       
        articles[i].classList.remove("rand");
        // articles[i].style.display = "flex";
      }
    }
  }, 800);
})

let buttons = document.getElementsByClassName("filter-button")

for(let i = 0; i< buttons.length; i++){
  buttons[i].addEventListener("click", ()=>{
    for(let i = 0; i< buttons.length; i++){
      buttons[i].style.background = "black"
      buttons[i].style.color = "white"
    }
    buttons[i].style.background = "white"
    buttons[i].style.color = "black"

  })

}

