const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const allElem = document.getElementsByTagName('a')
console.log(allElem);

const allText = document.getElementsByClassName("text-content")
console.log(allText);

const firstPic = document.getElementById("logo-img")
firstPic.setAttribute('src',siteContent['nav']['img-src'])
console.log(firstPic);
const nextPic = document.getElementById("cta-img")
nextPic.setAttribute('src', siteContent['cta']['img-src'])
console.log(nextPic);
const lastPic = document.getElementById("middle-img")
lastPic.setAttribute('src', siteContent['main-content']['middle-img-src'])
console.log(lastPic);

// const firstTitle = document.querySelector('h2')
// console.log(firstTitle.id) // to find out the id
// firstTitle.id = 'theId' // setting an id

const allNav = document.querySelectorAll('nav a');
console.log(allNav);

allNav.forEach(x => {
  x.style.color = 'green';
});

allNav[0].id = "nav-item-1";
allNav[0].style.color = 'green';
allNav[0].textContent = siteContent['nav']['nav-item-1'];
allNav[1].id = "nav-item-2";
allNav[1].style.color = 'green';
allNav[1].textContent = siteContent['nav']['nav-item-2'];
allNav[2].id = "nav-item-3";
allNav[2].style.color = 'green';
allNav[2].textContent = siteContent['nav']['nav-item-3'];
allNav[3].id = "nav-item-4";
allNav[3].style.color = 'green';
allNav[3].textContent = siteContent['nav']['nav-item-4'];
allNav[4].id = "nav-item-5";
allNav[4].style.color = 'green';
allNav[4].textContent = siteContent['nav']['nav-item-5'];
allNav[5].id = "nav-item-6";
allNav[5].style.color = 'green';
allNav[5].textContent = siteContent['nav']['nav-item-6'];

console.log(allNav[0].id);
console.log(allNav[1].id);
console.log(allNav[2].id);
console.log(allNav[3].id);
console.log(allNav[4].id);
console.log(allNav[5].id);

const newAnchor = document.createElement('a');
// const nav = document.querySelector('nav');
// const childrenOfNav = nav.children
// const newNav = nav.children.add(newNavAnchor);

newAnchor.href = "#";
newAnchor.textContent = "Blog";
newAnchor.id = "nav-item-7";
newAnchor.style.color = 'green';
const nav = document.querySelector('nav');
nav.append(newAnchor);

const newAnchor2 = document.createElement('a');
newAnchor2.href = "#";
newAnchor2.textContent = "Reviews";
newAnchor2.id = "nav-item-8";
newAnchor2.style.color = 'green';
nav.prepend(newAnchor2);


const heading = document.querySelector('h1');
heading.textContent = siteContent['cta']['h1'];
heading.style.color = 'red';
console.log(heading.textContent);

const newButton = document.querySelector('button');
newButton.textContent = siteContent['cta']['button'];
console.log(newButton.textContent);
newButton.addEventListener('click', function() {
  for(let i=0; i<allNav.length; i++) {
    allNav[i].style.color = 'pink';
  }
  heading.style.color = 'orange';
});

// const allContent = document.getElementsByClassName('top-content'); // [COLLECTION]
// console.log(allContent);
const allElements = document.getElementsByClassName('text-content');
const firstDiv = allElements[0];
console.log(allElements);
firstDiv.children[0].textContent = siteContent['main-content']['features-h4'];
firstDiv.children[1].textContent = siteContent['main-content']['features-content'];

const secDiv = allElements[1];
secDiv.children[0].textContent = siteContent['main-content']['about-h4'];
secDiv.children[1].textContent = siteContent['main-content']['about-content'];

const thirdDiv = allElements[2];
thirdDiv.children[0].textContent = siteContent['main-content']['services-h4'];
thirdDiv.children[1].textContent = siteContent['main-content']['services-content'];

const forthDiv = allElements[3];
forthDiv.children[0].textContent = siteContent['main-content']['product-h4'];
forthDiv.children[1].textContent = siteContent['main-content']['product-content'];

const fifthDiv = allElements[4];
fifthDiv.children[0].textContent = siteContent['main-content']['vision-h4'];
fifthDiv.children[1].textContent = siteContent['main-content']['vision-content'];

const allContactElements = document.getElementsByClassName('contact');
// console.log(allContentContact);
allContactElements[0].children[0].textContent = siteContent['contact']['contact-h4'];
allContactElements[0].children[1].textContent = siteContent['contact']['address'];
allContactElements[0].children[2].textContent = siteContent['contact']['phone'];
allContactElements[0].children[3].textContent = siteContent['contact']['email'];

const allFooterElem = document.querySelector('footer');
console.log(allFooterElem);
allFooterElem.children[0].textContent = siteContent['footer']['copyright'];











