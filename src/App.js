import About from './View/about';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header id="header" class="fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <h1 class="logo me-auto me-lg-0"><a href="index.html">Cynthia</a></h1>
    
      <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>

  </header>
  <section id="hero" class="d-flex align-items-center">
    <div class="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
      <h1>Cynthia Umubyeyi</h1>
      <h2>I'm a Software Developer from College of Science and Technology</h2>
      <a href="about.html" class="btn-about">About Me</a>
    </div>
  </section>
  <main id="main">

     {/* About Section */}
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p>I'm a Software developer conceive of, design, and build computer programs. Some develop new applications for mobile or desktop use, while others build underlying operating systems.</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="../assets/img/hero.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Illustrator &amp; UI/UX Designer</h3>
            <p class="fst-italic">
            I'm a person in charge of designing the experience of a client and making sure it's optimal
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 1/1 1999</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Website:</strong> github/Umubyeyi</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +250 784 560891</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> Kigali : , Rwanda</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 22</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> Bachalor</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> umubyeyicynthia60@gmail.com</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
           I'm Software developer that creative force behind computer programs of all kinds. They design and write the code used to build everything from operating systems to apps to video games. 
           Analyzing the needs of software users Designing, testing, and building software programs to meet user needs

Creating models and diagrams that outline the code needed to create software and applications

Performing maintenance and testing to keep software functioning 

Documenting the process to provide the information needed for upgrades and maintenance


            </p>
          </div>
        </div>

      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
          <p>I have excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge are important software developer competencies, which make that developer a valued resource in any organization.</p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">PHP <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">WordPress/CMS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">55%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Cynthia Umubyeyi</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
              <ul>
                <li>Kigali Rwanda</li>
                <li>(250) 784-560891</li>
                <li>umubyeyicynthia60@gmail</li>
              </ul>
              </p>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachalor of Information System &amp; Graphic Design</h4>
              <h5>2018 - 2022</h5>
              <p><em>College Of Science and Technology</em></p>
              <p> system designed to collect, process, store, and distribute information. From a sociotechnical perspective, information systems are composed by four components: task, people, structure (or roles), and technology.</p>
            </div>
            <div class="resume-item">
              <h4>Secondary Diploma in Computer Science </h4>
              <h5>2015 - 2017</h5>
              <p><em>Groupe Scolaire Du Mont Kigali</em></p>
              <p>Java, Python ,C, C++, SML, HTML5 
CSS ,Django ,Android, LATEX,Git
Datastructures ,Software design</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title"> Experience</h3>
            <div class="resume-item">
              <h4>Technical Skills and Professional Engineers</h4>
              <h5>21 november - 23 December 2016</h5>
              <p><em>TSPE,JOC, Nyarugenge, Kigali </em></p>
              <p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Computer Maintenance, Computer Networking, Visual Basic and Database projects, PHP and Database projects</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Project Developer</h4>
              <h5>2018 - 2022</h5>
              <p><em>Univerist Of Rwanda Nyarugenge Campus</em></p>
              <p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created  design presentations and proposals a month for Assignment</li>
              </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>


  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Cynthia</span></strong>. All Rights Reserved
      </div>
    
    </div>
  </footer>
    </div>
  );
}

export default App;
