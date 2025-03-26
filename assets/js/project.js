/* Details Table*/

const projectTable = document.querySelector(".main");

const project = [
  {
    title: "Interactive Quiz Application using Flask and JavaScript",
    authors:
      " Features: Dynamic quiz generation, Instant scoring and feedback",
    conferences :
      "  Techstack : Python (Flask), HTML, CSS, JavaScript",
    projectYr:  2024,
    citebox: "popup1",
    image: "assets/images/research-page/quiz.jpg",
    citation: {
      vancouver:
      "A dynamic web-based quiz application that allows users to take interactive quizzes with instant results. Built using Flask for the backend and JavaScript for the frontend."
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopupQuiz",
  },

  {
    title: "Mumbai Dabbawala",
    authors:
     " Feature : User-friendly interface to explore Dabbawala services , Real-time order tracking and status updates, Seamless integration for home chefs and customers", 
    conferences:
      " Tech use : HTML, CSS, JavaScript",
    projectYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/daabawala pic 2.jpg",
    citation: {
      vancouver:
        "A web platform showcasing the efficiency and legacy of Mumbai’s Dabbawala service, integrating real-time tracking and order management",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Stay tuned! Exciting projects will be showcased here soon. Keep an eye out!",
    authors: "",
    conferences:
      "",
    projectYr: "🚧 Projects Coming Soon! 🚧",
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

 
];
AOS.init();
const fillData = () => {
  let output = "";
  project.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      projectYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="pImg"></td>
                <td class = "projectTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="pconferences"> ${conferences} 
                        <div class="projectY">${projectYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  projectTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);