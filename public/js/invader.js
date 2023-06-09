const app = {
   invader: document.querySelector("#invader"),
   form: document.querySelector(".configuration"),
   colorPicker: document.querySelector("#colorPicker"),
   colorItems: document.querySelectorAll(".colorItem"),
   brush: "grey",
   gridSize: 8,
   pixelSize: 10,
   // Fonction pour le changement de couleur du pinceau
   colorListener: function () {
      app.colorPicker.addEventListener('click', function(event) {
         const colorClass = event.target.classList;                 
         switch (true) {
            case colorClass.contains("grey"):
                app.brush = "grey";
                break;
            case colorClass.contains("black"):
                app.brush = "black";
                break;
            case colorClass.contains("fof"):
                app.brush = "fof";
                break;
            case colorClass.contains("ofo"):
                app.brush = "ofo";
                break;
         }
         for (i=0; i < app.colorItems.length; i++ ) {
            if (app.colorItems[i].classList.contains(app.brush)) {
               app.colorItems[i].classList.add("colorFocus");
            } else {
               app.colorItems[i].classList.remove("colorFocus");
            }
            
         }
     })
   },
   // Fonction de création d'un élément input du formulaire
   createInput: function (number,gridSize,placeholderText,id) {
   const formElt = document.createElement("input");
   formElt.setAttribute("type", number);
   formElt.setAttribute("name", gridSize);
   formElt.setAttribute("placeholder", placeholderText);
   formElt.setAttribute("id", id);
   formElt.className = "forms";
   app.form.appendChild(formElt); 
   },
   // Fonction d'initialisation
   init: function() {
      // Processus
      createForm();
      pixelMaker(app.gridSize);
      app.colorListener();     
   }


}

// Objet pour factorisation de la fonction createForm()
const formElements = {
   0: {
      type: "number",
      name: "gridSize",
      placeholder: "Taille de la grille",
      id: "gridSize"
   },
   1: {
      type: "number",
      name: "pixelSize",
      placeholder: "Taille des pixels",
      id: "pixelSize"
   }
}


// FOnction de création du bouton du formulaire
function createButton() {
      const formButton = document.createElement("button");
      formButton.className = "forms";
      formButton.classList.add("formButton");
      formButton.setAttribute("type", "submit");
      formButton.textContent = "Valider";
      app.form.appendChild(formButton);
}

// Fonction pour créer le formulaire
function createForm () {

   app.createInput(formElements[0].number,formElements[0].name,formElements[0].placeholder,formElements[0].id);
   app.createInput(formElements[1].number,formElements[1].name,formElements[1].placeholder,formElements[1].id);
   createButton()

   app.form.addEventListener('submit', (event) => {
      event.preventDefault();
      app.gridSize = document.getElementById("gridSize").value;
      app.pixelSize = document.querySelector("#pixelSize").value;
      app.invader.replaceChildren();
      app.invader.style.gridTemplateRows = `repeat(${app.gridSize}, 1fr)`;
      app.invader.style.gridTemplateColumns = `repeat(${app.gridSize}, 1fr)`;
      app.invader.style.height = (app.pixelSize * app.gridSize) + "px";
      app.invader.style.width = (app.pixelSize * app.gridSize) + "px";
      // Changement dans le CSS de la taille des pixels
      // Getting the stylesheet
      const stylesheet = document.styleSheets[1];
      let elementRules;
      // looping through all its rules and getting your rule
      for(let i = 0; i < stylesheet.cssRules.length; i++) {
      if(stylesheet.cssRules[i].selectorText === '.pixel') {
         elementRules = stylesheet.cssRules[i];
   }
}
   // modifying the rule in the stylesheet
   elementRules.style.setProperty('width', app.pixelSize + "px");
   elementRules.style.setProperty('height', app.pixelSize + "px");
   pixelMaker(app.gridSize);      
   })
}

// La fonction qui crée le grid et change la couleur des pixels
function pixelMaker (gridSize) {
   for(i = 0; i < gridSize * gridSize; i++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel grey";
      pixel.addEventListener("click", function(event) {
        pixel.className = `pixel ${app.brush}`;
      })
      app.invader.appendChild(pixel);
      
   }
}

document.addEventListener('DOMContentLoaded', app.init); // J'attends le chargement complet de la page avant d'executer app2.init

// const pixel = invader.querySelectorAll(".pixel");
// for(i = 0; i < pixel.length; i++) {
//    pixel[i].addEventListener("click", function(event) {
//     const computedStyle = window.getComputedStyle(event.target);
//     const backgroundColor = computedStyle.backgroundColor;
//       switch (backgroundColor) {
//          case "rgb(128, 128, 128)":
//             event.target.style.backgroundColor = "rgb(0, 0, 0)";
//             break;
//          case "rgb(0, 0, 0)":
//             event.target.style.backgroundColor = "rgb(128, 128, 128)";
//             break;
//       }
// })
// }

