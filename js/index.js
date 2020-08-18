const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent.cta["img-src"]);

let ctaChildren = document.getElementsByClassName("cta-text")[0].children;
ctaChildren[0].textContent = siteContent.cta.h1;
ctaChildren[1].textContent = siteContent.cta.button;

// Nav
const nav = document.getElementsByTagName("nav")[0];
let navList = nav.children;
let navDataList = Object.values(siteContent.nav);
let count = 0;
for (const navItem of navList) {
  navItem.textContent = navDataList[count];
  navItem.style.color = "green";
  count++;
}

const navBegin = document.createElement("a");
navBegin.textContent = "Home";
const navEnd = document.createElement("a");
navEnd.textContent = "Request demo";
navBegin.style.color = "green";
navEnd.style.color = "green";
nav.prepend(navBegin);
nav.append(navEnd);

let midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let mainContent = document.getElementsByClassName("text-content");
// top-content
let featureNodes = mainContent[0].children;
let aboutNodes = mainContent[1].children;
featureNodes[0].textContent = siteContent["main-content"]["features-h4"];
featureNodes[1].textContent = siteContent["main-content"]["features-content"];
aboutNodes[0].textContent = siteContent["main-content"]["about-h4"];
aboutNodes[1].textContent = siteContent["main-content"]["about-content"];
// bottom-content
let servicesNodes = mainContent[2].children;
let productNodes = mainContent[3].children;
let visionNodes = mainContent[4].children;
servicesNodes[0].textContent = siteContent["main-content"]["services-h4"];
servicesNodes[1].textContent = siteContent["main-content"]["services-content"];
productNodes[0].textContent = siteContent["main-content"]["product-h4"];
productNodes[1].textContent = siteContent["main-content"]["product-content"];
visionNodes[0].textContent = siteContent["main-content"]["vision-h4"];
visionNodes[1].textContent = siteContent["main-content"]["vision-content"];

// Contact
let contactNodes = document.getElementsByClassName("contact")[0].children;
contactNodes[0].textContent = siteContent.contact["contact-h4"];
contactNodes[1].textContent = siteContent.contact.address;
contactNodes[2].textContent = siteContent.contact.phone;
contactNodes[3].textContent = siteContent.contact.email;

// Footer
let footer = document.getElementsByTagName("footer")[0];
footer.children[0].textContent = siteContent.footer.copyright;

// Stylings
// console.log(navList);
