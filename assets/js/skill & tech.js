
AOS.init();



const skillscards = document.querySelector(".skills-cards");
const skills = [
  {
    title: "Programming Languages",
    cardImage: "assets/images/experience-page/pro_lag.jpg",
    skills: ["C", "C++", "Python"],
    desp: [
      "Proficient in problem-solving and logic building using C, C++.",
      "Basic understanding of Python for scripting and automation."
    ],
  },
  {
    title: "Web Development",
    cardImage: "assets/images/experience-page/tt.jpg",
    skills: ["HTML", "CSS", "JavaScript"],
    desp: [
      "Experience in building responsive websites using HTML and CSS.",
      "Basic JavaScript knowledge for interactivity."
    ],
  },
  {
    title: "Tools & Technologies",
    cardImage: "assets/images/experience-page/webdev.png",
    skills: ["Git", "GitHub", "VS Code", "Bootstrap"],
    desp: [
      "Familiar with version control using Git & GitHub.",
      "Comfortable coding in VS Code and using Bootstrap for responsive design."
    ],
  }
];

// Function to display skills section
const showSkills = () => {
  let output = "";
  skills.forEach(({ title, cardImage, skills, desp }) => {
    output += `        
      <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
        <div class="card card1">
          <img src="${cardImage}" class="featured-image"/>
          <article class="card-body">
            <header>
              <div class="title">
                <h3>${title}</h3>
              </div>
              <p class="meta">
                <strong>Skills:</strong> ${skills.join(", ")}
              </p>
              <ol>
                ${desp.map((item) => `<li>${item}</li>`).join("")}
              </ol>
            </header>
          </article>
        </div>
      </div>
    `;
  });

  document.getElementById("skills-container").innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showSkills);


