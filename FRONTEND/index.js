////////// ********** HEADER START ********** //////////

const header = document.querySelector("header");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const galleryBtn = document.getElementById("gallery");
const contactBtn = document.getElementById("contact");
//
const homeSection = document.querySelector("section.home");
const aboutSection = document.querySelector("section.about");
const gallerySection = document.querySelector("section.gallery");
const contactSection = document.querySelector("section.contact");

// SHOW SCROLL SIZE FROM TOP
document.addEventListener("scroll", () => {
  const scrollSize = window.pageYOffset;
  console.log(scrollSize);
  if (scrollSize > 250) {
    header.classList.add("nontransparent");
  } else header.classList.remove("nontransparent");
});

// SCROLL TO SECTIONS
homeBtn.addEventListener("click", () => {
  const homeOffset = homeSection.offsetTop;
  window.scrollTo(0, homeOffset);
});

aboutBtn.addEventListener("click", () => {
  const aboutOffset = aboutSection.offsetTop;
  window.scrollTo(0, aboutOffset);
});

galleryBtn.addEventListener("click", () => {
  const galleryOffset = gallerySection.offsetTop;
  window.scrollTo(0, galleryOffset);
});

contactBtn.addEventListener("click", () => {
  const contactOffset = contactSection.offsetTop;
  window.scrollTo(0, contactOffset);
});

////////// ********** HEADER END ********** //////////
