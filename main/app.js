// FÜR TOP NAVIGATION BAR
  //Menü
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
      sidebar.classList.add("open"); /* Add open class for animation */
    } else {
      sidebar.classList.add("hidden");
      sidebar.classList.remove("open"); /* Remove open class */
    }
  }
  //Language
  function toggleWorld() {
    const languagebar = document.getElementById("language-bar");
    if (languagebar.classList.contains("hidden")) {
      languagebar.classList.remove("hidden"); // Remove the hidden class
      languagebar.classList.add("open"); /* Add open class for animation */
    } else {
      languagebar.classList.add("hidden"); // Add the hidden class
      languagebar.classList.remove("open"); /* Remove open class */
    }
  }
  // Light/Dark Mode
  function toggleMode() {
    var body = document.body;
    var main = document.querySelector('main');
    var photos = document.querySelectorAll('#photo');
    var contactButtons = document.querySelectorAll('.contact-button');
    var phaseBoxes = document.querySelectorAll('.phase-box');
    var modeIcon = document.getElementById('mode-icon');

    if (body.classList.contains('light-mode')) {
        // Wechsel zu Dark-Modus
        body.classList.remove('light-mode');
        main.style.backgroundColor = '#222'; // Hintergrundfarbe für den Dark-Modus
        photos.forEach(function(photo) {
            photo.src = './Media/dark_photo.webp'; // Pfad zum Bild für den Dark-Modus
        });
        contactButtons.forEach(function(button) {
            button.style.backgroundColor = '#333'; // Hintergrundfarbe für den Dark-Modus
        });
        phaseBoxes.forEach(function(box) {
            box.style.backgroundColor = '#444'; // Hintergrundfarbe für den Dark-Modus
        });
        modeIcon.src = './Media/icons8-sun.svg'; // Icon für den Dark-Modus
    } else {
        // Wechsel zu Light-Modus (Default)
        body.classList.add('light-mode');
        main.style.backgroundColor = '#99e7f1';
        photos.forEach(function(photo) {
            photo.src = './Media/light_photo.webp';
        });
        contactButtons.forEach(function(button) {
            button.style.backgroundColor = '#24cce2';
        });
        phaseBoxes.forEach(function(box) {
            box.style.backgroundColor = '#d6bcd5';
        });
        modeIcon.src = './Media/moon-svgrepo-com.svg'; // Hier musst du das passende Icon für den Light-Modus setzen
    }
}


  


// FÜR PHASENBOXEN: Man kann die Boxen aufklappen für mehr Infos
const accordion = document.getElementsByClassName('phase-box');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


//Skill filtering


const filterInput = document.getElementById("filterInput");
const skills = document.getElementById("skills").querySelectorAll(".skill");

filterInput.addEventListener("input", () => {
  // Split the input value into individual filters, removing leading/trailing spaces
  const filters = filterInput.value.toLowerCase()
    .trim() // Remove leading/trailing spaces
    .split(/\s*,\s*/); // Split by comma with optional spaces around

  skills.forEach((span) => {
    const classList = span.classList;
    let isVisible = false; // Start with assuming not visible

    // Check if any filter applies to the span
    for (const filter of filters) {
      if (classList.length === 1 && classList[0] === "skill") {
        // If only "skill" class is present, show the span (assuming no skill is selected)
        isVisible = true;
        break; // No need to check further filters in this case
      }
      for (let i = 0; i < classList.length; i++) {
        if (classList[i] !== "skill" && classList[i].toLowerCase().includes(filter)) {
          isVisible = true; // Found a matching filter, mark visible
          break; // Stop iterating through filters as any match is enough
        }
      }
      // If a match is found, break the outer loop as well to avoid unnecessary checks
      if (isVisible) break;
    }

    span.style.display = isVisible ? "block" : "none";
  });
});
