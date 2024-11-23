(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};


	button.addEventListener("click", hamburgerMenu, false);	
	console.log ('clicado')	;
})();



(() => {


    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 337; //how many frame do we have

    const images = [];  //array to hold all images

    //create an object called buds to hold the current frame 
    const buds = {
        frame: 0
    }

    // run a for loop to populate image array
    for(let i =0; i < frameCount; i++){
        const img = new Image();
        img.src =`images/explode/explode_${(i + 1).toString().padStart(4, '0')}.webp`;
        images.push(img)

    }

    // console.table(images);

    gsap.to(buds, {
        frame: 336,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            markers: false,
            start: "top top"
        },
        onUpdate: render
    })
    images[0].addEventListener("load", render);

    function render(){
        context.clearRect(0,0, canvas.width, canvas.height);
        // console.log(buds.frame);
        console.log(images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }

})();

//END ANIMACAO SCROLL//



//COLOUR PICKER//
(() => {
	const earbuds = document.querySelector("#ear-buds");
	const person = document.querySelector("#ear-person");
  
	
	const buttons = document.querySelectorAll("#color-con button");

	function swapColor(e) {
	  const selected = e.currentTarget.id; 
	  console.log(`Troca para a cor: ${selected}`); 

	  earbuds.src = `images/${selected}_bud.jpg`; 
	  person.src = `images/${selected}_woman.jpg`; 
	}
  

	buttons.forEach(button => {
	  button.addEventListener("click", swapColor);
	  console.log('Evento de clique adicionado'); // Confirma que o evento foi registrado
	});
  })();

  //END COLOR PICKER


  //MODELVIEWER//
  (() => {

	//variables
	const hotspots = document.querySelectorAll(".Hotspot");
	
	const infoBoxes = [
	  {
		title: 'Touch control',
		text: 'Space Sound is revolutionizing the way you experience music. With intuitive gestures, you can easily control the volume and skip to your next song.',
		image: 'images/touch.jpg'
	  },
	  {
		title: 'Noise Canceling',
		text: 'Need silence? Your callings with our powerful earphones will never be the same. And your songs will take you to space',
		image: 'images/noise.jpg'
	  },
	  {
		title: 'Surround Sound',
		text: 'Enjoy, the best audio quality of your life. Believe me, it will blow your mind.',
		image: 'images/surround.jpg'
	  },
	  {
		title: 'Next Generation Microphone',
		text: 'The best microphone for your calls. Your voice will be so crystal clear that it will bring you closer to people, even from afar.',
		image: 'images/microphone.jpg'
	  },
	]
  
	//functions
  
  
  function loadInfo(){
  
	infoBoxes.forEach((infoBox, index)=>{
	  //console.log(index+1);
	  //seleionando o hotspot com uma string da variavel do id
	  let selected = document.querySelector(`#hotspot-${index+1}`);
  
	  /*Exemplo innerHTML em vez do modelo abaixo.
	  selected.innerHtml = `
	  <h2>${infobox.title}</h2>
	  <p>${infoBox.text}</p>
	  <img src = ${infoBox.image}
	  */
  
  
	  //Definindo variaveis do conteudo para serem geradas no array. Titulo, Paragrafo, Image
  
	  const titleElement = document.createElement("h2");
	  titleElement.textContent = infoBox.title;
  
	  const textElement = document.createElement("p");
	  textElement.textContent = infoBox.text;
  
	  const ImgElement = document.createElement('img');
	  ImgElement.src = infoBox.image;
  
	  //atalho appendchild epra colocar o conteudo no objecto selecionado na ordem desejada.
	  selected.appendChild (ImgElement);
	  selected.appendChild (titleElement);
	  selected.appendChild (textElement)
  
	})
  
  }
  
  loadInfo();
  
	function showInfo() {
	  let selected = document.querySelector(`#${this.slot}`);
	  gsap.to(selected, 1, { autoAlpha: 1 });
	}
  
	function hideInfo() {
	  let selected = document.querySelector(`#${this.slot}`);
	  gsap.to(selected, 1, { autoAlpha: 0 });
	}
  
	//Event listeners
  
	hotspots.forEach(function (hotspot) {
	  hotspot.addEventListener("mouseenter", showInfo);
	  hotspot.addEventListener("mouseleave", hideInfo);
	});
  
  })();


  //XRAY//
  (() => {
	const divisor = document.querySelector("#divisor");
	const slider = document.querySelector("#slider")
	
	function moveDivisor (){
	  console.log(slider.value);
	  divisor.style.width = `${slider.value}%`;
	}
	
	slider.addEventListener("input", moveDivisor);
	})();




	gsap.registerPlugin(ScrollTrigger);

	gsap.from([".area_p", ".title_s", ".normal_text", "#ear-person", "#ear-buds", ".h4_colors", ".btn_colour", ".h3_comming",".commingsoon_box"], {
	  scrollTrigger: {
		trigger: ".area_p", 
		start: "top 90%", 
		toggleActions: "play none none none", 
		markers: false 
	  },
	  duration: 0.3, 
	  y: 50, 
	  opacity: 0,
	  ease: "power1.out",
	  stagger: 0.3 
	});


	gsap.from([".model_container, .area_p_center, .h2_model, .normal_center_text"], {
		scrollTrigger: {
		  trigger: ".model_container", 
		  start: "top 90%", 
		  toggleActions: "play none none none", 
		  markers: false 
		},
		duration: 0.3, 
		y: 50, 
		opacity: 0,
		ease: "power1.out",
		stagger: 0.3 
	  });


	  gsap.from([".box_support, .box_sup_text"], {
		scrollTrigger: {
		  trigger: ".box_support", 
		  start: "top 90%", 
		  toggleActions: "play none none none", 
		  markers: false 
		},
		duration: 0.3, 
		y: 50, 
		opacity: 0,
		ease: "power1.out",
		stagger: 0.3 
	  });



	  gsap.from([".area_p_center, .box_m, .img_c"], {
		scrollTrigger: {
		  trigger: ".cara_mob", 
		  start: "top 90%", 
		  toggleActions: "play none none none", 
		  markers: false 
		},
		duration: 0.3, 
		y: 50, 
		opacity: 0,
		ease: "power1.out",
		stagger: 0.3 
	  });

	 











