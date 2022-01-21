/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//create content of sections

let creatingSection = (counter) => {
  let content = `
<section  id="section ${counter}" data-nav="Section ${counter}" class="your-active-class">
    <div class="landing__container">
        <h2>Section ${counter}</h2>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus.
                Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet    
                porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur,
                sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi,  
                aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit.
                Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.
            </p>
            <p>
                Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
                Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget 
                elementum tortor mollis non.
            </p>
    
    </div>
    </section>`;
  //add section into html into main tag =>
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
  //callbackof function that create li and a forech section =>
  createNav(`section ${counter}`);
};

//create nav=>
//create the list for each section=>
let myul = document.querySelector("#navbar__list");
let createNav = (x) => {
  let list_link = document.createElement("li");
  list_link.innerHTML = `<a href="#${x}" class="menu__link"> ${x} </a> `;
  myul.append(list_link);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// loop section onload page and callback function nav,section
for (i = 1; i <= 4; i++) {
  creatingSection(i);
}

//add bottom event
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  creatingSection(i);
  i++;
  //callback of observer section to add class color and highlighte of link on nav bar
  observsecion();
});

//css of bottom
document.getElementById("btn").style = `    
padding: 18px;
    color: #fff;
    border: none;
    width: 18%;
    border-radius: 2%;  
    background-image: linear-gradient(-45deg, #009688, #673ab7);
    transition:all 0.7s;
    cursor: pointer;
    `;

// add activ class foreach link
let li_Active = document.querySelectorAll(" li a");
//loop for click on link add active class and remov form other links
li_Active.forEach(function (el) {
  el.addEventListener("click", () => {
    li_Active.forEach((ele) => {
      ele.classList.remove("active_link");
    });
    el.classList.add("active_link");
  });
});

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

let backbtn = document.querySelector("main > .button ");

//create FUNCTION to show and hidden button
function scrolldown() {
  if (window.pageYOffset > 900) {
    backbtn.style.display = "block";
  }

  //show the button
  else {
    backbtn.style.display = "none";
  } //hidden the button
}
//add event when user scroll on page
window.addEventListener("scroll", scrolldown);

//create FUNCTION btn scroll to top page with setTimeout to delay excuting action after <</ 700 mls >>
function BackTotop() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 700);
}
//add event when user click on the button
backbtn.addEventListener("click", BackTotop);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
// Set sections as active

// get element who active it
//when window scrolling ,the section that is insertview will light and it's link into navbar will light

window.addEventListener("scroll", () => {
  observsecion();
});
//this function detected the section if into view or not  and add the active class into evrysection
function observsecion() {
  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= 0 &&
      section.getBoundingClientRect().top <= 250
    ) {
      var sec_id = "#" + section.getAttribute("id");
      section.classList.add("sec_color");
      lightlink(sec_id);
    } else {
      section.classList.remove("sec_color");
    }
  });
}

//this function detected the section if into view or not  and add the active class into his link >>
function lightlink(sec) {
  let navLinks = document.querySelectorAll("ul li a");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active_link");
  }
  var li_Act = document.querySelector(`ul li a[href="${sec}"]`);
  li_Act.classList.add("active_link");
}
