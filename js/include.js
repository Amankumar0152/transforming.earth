// document.addEventListener("DOMContentLoaded", function () {
//   includeHTML();
// });

// function includeHTML() {
//   const elements = document.querySelectorAll('[include-html]');
//   elements.forEach(el => {
//     const file = el.getAttribute("include-html");
//     if (file) {
//       fetch(file)
//         .then(res => {
//           if (!res.ok) throw new Error("Page not found");
//           return res.text();
//         })
//         .then(data => {
//           el.innerHTML = data;
//           el.removeAttribute("include-html");
//           includeHTML(); // Recursively check for nested includes
//         })
//         .catch(error => {
//           el.innerHTML = "Include failed.";
//         });
//     }
//   });
// }


function includeHTML(callback) {
  const elements = document.querySelectorAll('[include-html]');
  let remaining = elements.length;

  if (remaining === 0 && typeof callback === "function") {
    callback();
    return;
  }

  elements.forEach(el => {
    const file = el.getAttribute("include-html");
    if (!file) return;

    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error("Include file not found");
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("include-html");
        remaining--;

        if (remaining === 0 && typeof callback === "function") {
          callback();
        }
      })
      .catch(err => {
        el.innerHTML = "Include failed.";
        remaining--;
        if (remaining === 0 && typeof callback === "function") {
          callback();
        }
      });
  });
}
