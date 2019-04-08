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
document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navItems = document.querySelectorAll(".container header nav a");
 
for (let i = 0; i < navItems.length; i++){
  navItems[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
  navItems[i].style.color = "green";
 
}
let navParent = document.querySelector("nav");
let appendA = document.createElement("a");
appendA.setAttribute("href", "#");
appendA.textContent = "Append";
appendA.style.color = "green";
navParent.append(appendA);

let prependA = document.createElement("a");
prependA.setAttribute("href", "#");
prependA.textContent = "Prepend";
prependA.style.color = "green";
navParent.prepend(prependA);
 

document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
 
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];

let mainContentTopH4 = document.querySelectorAll(".top-content .text-content h4");

mainContentTopH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentTopH4[1].textContent = siteContent["main-content"]["about-h4"];

let mainContentTopP = document.querySelectorAll(".top-content .text-content p");

mainContentTopP[0].textContent = siteContent["main-content"]["features-content"];
mainContentTopP[1].textContent = siteContent["main-content"]["about-content"];


let mainContentBottomH4 = document.querySelectorAll(".bottom-content .text-content h4");

mainContentBottomH4[0].textContent = siteContent["main-content"]["services-h4"];
mainContentBottomH4[1].textContent = siteContent["main-content"]["product-h4"];
mainContentBottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

let mainContentBottomP = document.querySelectorAll(".bottom-content .text-content p");

mainContentBottomP[0].textContent = siteContent["main-content"]["services-content"];
mainContentBottomP[1].textContent = siteContent["main-content"]["product-content"];
mainContentBottomP[2].textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

