const slides = [
    
    {
        "images":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "images":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "images":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "images":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


let number = 0;

function ChangeSlide(sense) {
    // on récupère toutes les dot
    const allDotsHTML = document.querySelectorAll('.dot')
    // on retire la class selected à la dot actif
    allDotsHTML[number].classList.remove('dot_selected')
	number = number + sense
	if  (number > slides.length -1)
		number = 0;
	if	(number < 0)
		number = slides.length -1;
    // on ajoute la class selected à la dot de la nouvelle slide actif
    allDotsHTML[number].classList.add('dot_selected')
	document.getElementById('slides').src = "./assets/images/slideshow/" + slides[number].images;
	document.querySelector(".text").innerHTML = "<p>" + slides[number].tagLine + "</p>"
}
// on selectionne le container div.dots
const containerDotsHTML = document.querySelector('.dots')
// fonction pour générer des dots en fonction du nombre de slide
const generateDots = () => {
    // on boucle sur les slides et à chaque slide on crée une div dot
    for(let i = 0; i < slides.length; i++) {
        const dotHTML = document.createElement('div')
        dotHTML.classList.add('dot')
        // si l'index slide est égale à number qui est l'index de base alors on ajoute la class dot_selected
        if(i === number) {
            dotHTML.classList.add('dot_selected')
        }
        // on ajoute notre élement créé au containerDots div.dots
        containerDotsHTML.appendChild(dotHTML)
    }
}
// on appel notre fonction au démarage
generateDots()



