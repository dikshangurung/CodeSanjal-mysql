const colorChangeButton = document.querySelector(".bulb");
const svgElement = document.getElementById("mySVG");
const pathElement = document.getElementById("myPath");
const bulb = document.querySelector(".bulb");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
const main3 = document.querySelector(".main3");
const home = document.querySelector(".home");
const post = document.querySelector(".post");
const profile = document.querySelector(".profile");
const codeBoxes = document.querySelectorAll(".code_box");
let isColorsChanged = false;
/*--------------------Change color Section-----------------*/

colorChangeButton.addEventListener("click", changeColors);

function changeColors() {
  if (!isColorsChanged) {
    document.documentElement.style.setProperty(
      "--background-color-1",
      "#0e141e"
    );
    document.documentElement.style.setProperty(
      "--background-color-2",
      "#111827"
    );
    document.documentElement.style.setProperty("--primary-color", "#e6e6e6");
    document.documentElement.style.setProperty("--fourth-color", "#e6e6e6");
    document.documentElement.style.setProperty("--option-input", "#39424e");
    svgElement.innerHTML = `<path
    id="myPath"
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
  />`;
    isColorsChanged = true;
  } else {
    document.documentElement.style.setProperty(
      "--background-color-1",
      "#e0e2e5"
    );
    document.documentElement.style.setProperty(
      "--background-color-2",
      "#e6e6e6"
    );
    document.documentElement.style.setProperty("--primary-color", "#5c5c5c");
    document.documentElement.style.setProperty("--fourth-color", "#000");
    document.documentElement.style.setProperty("--option-input", "#fff");
    svgElement.innerHTML = `
      <path id="myPath"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    `;
    isColorsChanged = false;
  }
}
/*--------------------Notification navigation----------------------------------------------------------------------- */
const notification_icon = document.querySelector(".nav_right .notification");
notification_icon.addEventListener("click", function () {
  main1.style.display = "none";
  main2.style.display = "block";
  code_content.style.display = "none";
  verified_content.style.display = "none";
  notification_content.style.display = "block";
  moderator_req_content.style.display = "none";
});
/*--------------------Day/Night Section-----------------*/
function changeSVG() {
  var svgElement = document.getElementById("mySVG");
  var pathElement = document.getElementById("myPath");

  // Update the SVG content
  svgElement.innerHTML = `
      <path id="myPath"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    `;
}
/*--------------------Scene change Section-----------------*/
// home.addEventListener("click", function (e) {
//   e.preventDefault();
//   main1.style.display = "block";
//   main2.style.display = "none";
//   main3.style.display = "none";
// });
// post.addEventListener("click", function (e) {
//   e.preventDefault();
//   main1.style.display = "none";
//   main2.style.display = "none";
//   main3.style.display = "block";
// });
// profile.addEventListener("click", function (e) {
//   e.preventDefault();
//   main1.style.display = "none";
//   main2.style.display = "block";
//   main3.style.display = "none";
// });
/*-------------------------------Lazy Loading-------------------------*/

// Create an intersection observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
});

// Observe each code box
codeBoxes.forEach((codeBox) => {
  observer.observe(codeBox);
});

/*--------------------Cright profile Section-----------------*/
/*Switches */
const code_content = document.querySelector(".code_content");
const verified_content = document.querySelector(".verified_content");
const notification_content = document.querySelector(".notification_content");
const moderator_req_content = document.querySelector(".moderator_req_content");
const codes_box = document.querySelector(".codes_box");
const verified_box = document.querySelector(".verified_box");
const notification_box = document.querySelector(".notification_box");
const moderator_req = document.querySelector(".moderator_req");

codes_box.addEventListener("click", function () {
  code_content.style.display = "block";
  verified_content.style.display = "none";
  notification_content.style.display = "none";
  moderator_req_content.style.display = "none";
});
verified_box.addEventListener("click", function () {
  code_content.style.display = "none";
  verified_content.style.display = "block";
  notification_content.style.display = "none";
  moderator_req_content.style.display = "none";
});

notification_box.addEventListener("click", function () {
  code_content.style.display = "none";
  verified_content.style.display = "none";
  notification_content.style.display = "block";
  moderator_req_content.style.display = "none";
});

moderator_req.addEventListener("click", function () {
  code_content.style.display = "none";
  verified_content.style.display = "none";
  notification_content.style.display = "none";
  moderator_req_content.style.display = "block";
});

/*--------------------Notification ----------------------------------------------------------------------- */
const notifications = document.querySelectorAll(
  ".notification_content .notifications"
);
notifications.forEach((notification) => {
  observer.observe(notification);
});
/*--------------------Moderator fill meter ----------------------------------------------------------------------- */
const outerCircle = document.querySelector(".mod_req_content .outer_circle");
const mod_req_content = document.querySelector(".mod_req_content");
outerCircle.style.backgroundImage = `conic-gradient(#288f8f 0deg, #288f8f ${25}%, transparent ${25}%, transparent
  100%)`;

observer.observe(mod_req_content);

/*--------------------Adds code input ----------------------------------------------------------------------- */
let code_counter = 1;
let description_counter = 1;
let output_counter = 1;
let addedContent = [];

const code_input_btn = document.querySelector(".code_input_section.plus svg");
const description_input_btn = document.querySelector(
  ".description_input_section.plus svg"
);
const output_input_btn = document.querySelector(
  ".output_input_section.plus svg"
);
const code_input_minus_btn = document.querySelector(
  ".code_input_section.minus svg"
);
const description_input_minus_btn = document.querySelector(
  ".description_input_section.minus svg"
);
const output_input__minus_btn = document.querySelector(
  ".output_input_section.minus svg"
);
const content_form = document.querySelector(".main3 .content_form_last");
code_html = `<div class="code_input_section text_input_section minus">
  <h2>Code:</h2>
  <textarea class="code_input"></textarea>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" id="ican">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
</svg>

  </div>`;
description_html = `<div class="description_input_section text_input_section minus">
<h2>Description:</h2>
<textarea class="description_input"> </textarea>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" id= "ican">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
</svg>

</div>`;
output_html = `<div class="output_input_section text_input_section minus">
<h2>Output:</h2>
<textarea class="output_input"></textarea>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
</svg>

</div>`;
const obj_iter = {
  html1: {
    html: code_html,
    index: 1,
  },
  html2: {
    html: description_html,
    index: 1,
  },
  html3: {
    html: output_html,
    index: 1,
  },
};
// alert("ok");
code_input_btn.addEventListener("click", function () {
  addedContent.push(obj_iter.html1);
  obj_iter.html1.index = obj_iter.html1.index + 1;
  console.log(obj_iter);
  console.log(addedContent);
  displayAdditional();
  // content_form.insertAdjacentHTML("beforeend", code_html);
});
description_input_btn.addEventListener("click", function () {
  addedContent.push(obj_iter.html2);
  obj_iter.html2.index = obj_iter.html2.index + 1;
  console.log(obj_iter);
  displayAdditional();
});
output_input_btn.addEventListener("click", function () {
  addedContent.push(obj_iter.html3);
  obj_iter.html3.index = obj_iter.html3.index + 1;
  console.log(obj_iter);
  displayAdditional();
});

// onclick = "dothis";
// function dothis() {
//   alert(e.target);
// }
// document.getElementById("ican").addEventListener("click", function () {
//   alert("okk");
// });
// for (let i = 0; i < addedContent.length; i++) {
//   addedContent[i]
//     .querySelector(".description_input_section.minus svg")
//     .addEventListener("click", function () {
//       alert("ok");
//     });
// }

// addedContent.forEach(function (obj, index) {
//   console.log(index);
//   const button = document.querySelector("#ican");
//   button.addEventListener("click", function () {
//     alert("ok");
//   });
//   console.log(button);
// });
// addedContent;
// document.querySelector("#ican").addEventListener("click", function () {
//   alert("ok");
// });
// code_input_minus_btn.addEventListener("click", function () {
//   alert("ok");
// });
function displayAdditional() {
  content_form.insertAdjacentHTML(
    "beforeend",
    addedContent[addedContent.length - 1].html
  );
  const addedElement = content_form.lastElementChild;
  const svgButton = addedElement.querySelector("svg");

  svgButton.addEventListener("click", function () {
    alert("ok");
    addedContent.splice(addedContent.length - 1, 1);
    console.log(addedContent);
  });
}
