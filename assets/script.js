const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Récupération des données avant l'etape n°2

const bannerImg = document.querySelector('.banner-img') //const permet de créer une constante nommée accessible uniquement en lecture
const bannerText = document.querySelector('#banner p')
const dots = document.querySelector('.dots')

const arrowRight = document.querySelector('.arrow_right')
const arrowLeft = document.querySelector('.arrow_left')


//Ajoutez un écouteurs d'evenements 

// Vérifiez s'ils existent avant d'ajouter des event listeners
if (arrowLeft && arrowRight) {
	arrowLeft.addEventListener("click", () => {
	  console.log("Flèche de gauche");
	  updateSlide(-1);
	});
  
	arrowRight.addEventListener("click", () => {
	  console.log("Flèche de droite");
	  updateSlide(1);
	});
  } else {
	console.error("Les éléments avec les classes 'arrow_left' et 'arrow_right' n'ont pas été trouvés dans le DOM.");
  }
  
  function updateSlide(direction) {
	  // Mettre à jour le diaporama avec la direction donnée
	}
	

// Ajoutez des bullet points au slider

slides.forEach((slide) => {
	if (slides.length > 1 ) { //La dimension du slide est superieur a 1 (4)
		const div = document.createElement('div');
		div.className = 'dot';
		dots.appendChild(div);
	}
})

const dot = document.querySelectorAll('.dot')

dot[0].classList.add('dot_selected')

let currentSlide = 0

function slide() {
	bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image
	bannerText.innerHTML = slides [currentSlide].tagLine
	
	dot[currentSlide].classList.add('dot_selected')
}



arrowLeft.addEventListener('click',() => {
	// Retire la classe 'dot_selected' de l'élément dot actuel
	dot[currentSlide].classList.remove("dot_selected")

// Vérifie si la diapositive actuelle est la première
	if (currentSlide === 0) {
		// Si c'est le cas, passe à la dernière diapositive
		currentSlide = slides.lengt -1
	} else {
		// Sinon, passe à la diapositive précédente
		currentSlide --
	}
	// Appelle la fonction slide() pour mettre à jour le diaporama
	slide()
})


arrowRight.addEventListener('click', () => {
	// Retire la classe 'dot_selected' de l'élément dot actuel
   dot[currentSlide].classList.remove("dot_selected")


   // Vérifie si la diapositive actuelle est la dernière
   if(currentSlide === slides.length -1) {
	   // Si c'est le cas, retourne à la première diapositive
	   currentSlide = 0
   } else {
	   // Sinon, passe à la diapositive suivante
	   currentSlide ++
   } 
	// Appelle la fonction slide() pour mettre à jour le diaporama
   slide ()
})