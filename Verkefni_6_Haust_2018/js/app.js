(function(){

const images = [
  { src:"images/p1.jpg", tags:"Animators, Illustrators", alt: "Rabbit" },
  { src:"images/p2.jpg", tags:"Photographers, Filmmakers", alt: "Sea" },
  { src:"images/p3.jpg", tags:"Photographers, Filmmakers", alt: "Deer" },
  { src:"images/p4.jpg", tags:"Designers", alt: "New York Street Map" },
  { src:"images/p5.jpg", tags:"Photographers, Filmmakers", alt: "Trumpet Player" },
  { src:"images/p6.jpg", tags:"Designers, Illustrators", alt: "Typographic Study" },
  { src:"images/p7.jpg", tags:"Photographers", alt: "Bicycle Japan" },
  { src:"images/p8.jpg", tags:"Designers", alt: "Aqua Logo" },
  { src:"images/p9.jpg", tags:"Animators, Illustrators", alt: "Ghost" },
];

// Bæta myndum við gallery
let gallery = document.getElementById('gallery');
for (let i = 0; i < images.length; i++) {
  let props = images[i];
  let img = new Image();
  img.src = props.src;
  img.alt = props.alt;
  img.dataset.tags = props.tags;
  img.style.display = 'block';
  gallery.appendChild(img);
}

const tags = [...new Set(images.reduce((tags, img) => {
  return tags.concat(img.tags.split(', '));
}, []))];

let buttons = document.getElementById('buttons');

// show all button
let button = document.createElement('button');
button.innerHTML = 'Show All';
button.addEventListener('click', function(){ showImagesWithTag(null); })
buttons.appendChild(button);

// tag buttons
for (let i = 0; i < tags.length; i++) {
  let tag =tags[i];
  let button = document.createElement('button');
  button.innerHTML = tag;
  button.addEventListener('click', function(){ showImagesWithTag(tag); })

  buttons.appendChild(button);
}

/* Search and filter */
let searchString = "";

function showImagesWithTag(tag){
    var x = document.getElementById("gallery");
    var y = x.getElementsByTagName("img");

    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
        y[i].setAttribute('matches', 'no');
        if (tag !== null) {
            if (y[i].dataset.tags.split(', ').includes(tag)) {
                y[i].style.display ="block";
                y[i].setAttribute('matches', 'yes');
            }
        }
        else {
            y[i].style.display = "block";
            y[i].setAttribute('matches', 'yes');
        }
    }
}

document.getElementById('filter-search').addEventListener('keyup', function(){
    searchString = this.value.trim().toLowerCase()

    var x = document.getElementById("gallery");
    var y = x.getElementsByTagName("img");

    var i;
    for (i = 0; i < y.length; i++) {
        let name = y[i].getAttribute('alt').trim().toLowerCase();
        console.log(name.includes(searchString));

        if (y[i].getAttribute('matches') === 'yes' || y[i].getAttribute('matches') === null) {
            y[i].style.display="none";
            if (name.includes(searchString)) {
                y[i].style.display = 'block';
            }
        }
    }
});

})();
