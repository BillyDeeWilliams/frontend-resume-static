        <template>
        <div className="resume">
  <div className="column left-col col-two-thirds">
          <section className="column-header">
            <div className="header-info">
              <h1 className="name">Will Madden</h1>
              <h2 className="position">Web Developer</h2>
              <ul className="contact-info">
                <li className="phone"><a target="_blank" href="sms://503-708-7753"><i className="fas fa-phone" />503-708-7753</a></li>
                <li className="location"><a target="_blank" href="https://www.portlandoregon.gov/"><i className="fas fa-globe-americas" />PDX, OR</a></li>
                <li className="github"><a target="_blank" href="https://github.com/BillyDeeWilliams"><i className="fab fa-github" />Github Account</a></li>
                <li className="gmail"><a target="_blank" href="mailto:madden.william.d@gmail.com"><i className="fas fa-envelope" />madden.william.d@gmail.com</a></li>
              </ul>
            </div>
          </section>
          <section id="exp">
            <h2 className="section-heading">experience</h2>
            <ul className="exp-jobs">
              <li className="job-entry">
                <div className="job-card">
                  <h3>Lead Front-End Developer</h3>
                  <h4>Schoolhouse Electric CO.</h4>
                  <div className="exp-position-stats">
                    <span className="date-range"><i className="fa fa-calendar" />Jan 2020 - Feb 2021</span>
                    <span className="location"><a href="https://goo.gl/maps/FCGFPkUmFYsZ7Y1h8"><i className="fas fa-map-marker" />Portland, Oregon</a></span>
                  </div>
                  <h5>Accomplishments and responsibilities</h5>
                  <ul className="job-highlights">
                    <li>Maintain and manage Shopify eCommerce website for major producer and distributor of high-end  heirloom home lighting and appliances</li>
                    <li>Update and optimize exisintg content, as well as develop new site fatures</li>
                    <li>Plan and manage project from intial proposal through QA to deployment. Coordinating cross-department and cross-functionality communication while consitently meeting or exceeding deadlinese</li>
                    <li>Cross platform and 3rd party integration</li>
                  </ul>
                </div>
              </li>
              <li className="job-entry">
                <div className="job-card">
                  <h3>Front-End/ Technical Support</h3>
                  <h4>Dealer Spike</h4>
                  <div className="exp-position-stats">
                    <span className="date-range"><i className="fa fa-calendar" />Nov 2017 - Jan 2020</span>
                    <span className="location"><a href="https://goo.gl/maps/3859GU8ZCK73coUv7"><i className="fas fa-map-marker" />Wilsonville, Oregon</a></span>
                  </div>
                  <h5>Accomplishments and responsibilities</h5>
                  <ul className="job-highlights">
                    <li>Research, develop, and implement, plug-and-play Shopify eCommerce integration using Vue/Vuex to leverage the Shopify storefront Graphql API solution for the entire platform. The result was Dealer SPike's first third party integration that leverages the Graphql API standard.</li>
                    <li> Develop training curriculum and inhouse-developer documentation for open-source analytics platform Matomo (formerly Piwik). Develop strategies for leveraging the Matomo JS API for creating custom conversion tracking to improve the accuracy and integrity of collected data</li>
                    <li>Regularly exceeds KPI targets. Recognized for being among the top 3 performers in the support department for the last 5 months running.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section id="recent-project" className="recent-project-section">
            <h2 className="section-heading">Recent Projects</h2>
            <ul className="recent-project">
              {/*<li class="project">
                            <div class="job-card">
                                <h3 class="project-title">Dealer Spike Shopify Integration</h3>
                                <h4 class="project-link"><a href="#/">Live Example | Github repo</a></h4>
                                <p class="project-description">A Vue/Vues Single-Page-Application / platform-feature for integration with the Shopify Storefront GraphQl API. Above is a link to a live instance and to the git hub repo I set up to showcase the work. Dealerspike owns this code, and of course, no sensitive or proprietary code has been included in the repo.</p>
                            </div>
                        </li>*/}
              <li className="project">
                <div className="job-card">
                  <h3 className="project-title">GraphQL Server</h3>
                  <h4 className="project-link"><a target="_blank" href="https://limitless-cliffs-60173.herokuapp.com/">https://limitless-cliffs-60173.herokuapp.com/</a></h4>
                  <p className="project-description">FULL URL: https://limitless-cliffs-60173.herokuapp.com/</p>
                  <p className="project-description">A quick Express-Graphql API/server deployed to Heroku. Hit the '/' endpoint with a tool like <a target="_blank" href="https://github.com/graphql/graphiql">Graphiql</a> to query the API and see the documentation</p>
                </div>
              </li>
              <li className="project">
                <div className="job-card">
                  <h3 className="project-title">Unsplash Image Finder</h3>
                  <h4 className="project-link"><a target="_blank" href="https://unsplash-react-finder.netlify.com/">Image Search App</a></h4>
                  <p className="project-description">FULL URL: https://unsplash-react-finder.netlify.com/</p>
                  <p className="project-description">A simple React application for accessing the public 'unsplash' image API. Demonstrates Functional as well as Class-based component architecture. Simple and intuitive UI/UX leveraging CSS stylers like background-size and the newer Flex-box properties to accommodate varying image sizes and aspect-ratios for a uniform,  responsive view.</p>
                </div>
              </li>
              <li className="project">
                <div className="job-card">
                  <h3 className="project-title">File Watcher</h3>
                  <h4 className="project-link"><a target="_blank" href="https://github.com/BillyDeeWilliams/netwatcher-client-server">nodeJS websockets file-wactcher repo</a></h4>
                  <p className="project-description">FULL URL: https://github.com/BillyDeeWilliams/netwatcher-client-server</p>
                  <p className="project-description">Client and Server code base for Bash CLI NodeJs app that leverages web-socket connections to monitor remote file structure for file changes</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="column right-col col-one-thirds">
          <section className="left-column-header column-header">
            <div className="img-wrapper">
              <a href="#"><img src="images\wdm-full-size-pwo.jpg" /></a>
            </div>
          </section>
          <section className="objective-summary">
            <h2 className="section-heading">Objective Summary</h2>
            <p> Self-motivated Web Development professional with years of experience. Looking for new exciting challanges and employment opportunites that will help me to advace my career as a developer in rolls that affect meaningful change in our world.</p>
          </section>
          <section id="technologies" className="technologies-section">
            <h2 className="section-heading">technologies</h2>
            <ul className="technologies">
              <li className="tech-subgroup languages">
                <h3 className="position">coding</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>LESS/SCSS</li>
                  <li>JS/ecma2015</li>
                  <li>jQuery</li>
                  <li>Liquid</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Vue</li>
                  <li>vuex</li>                                    
                </ul>
              </li>
   
              <li className="tech-subgroup project-managment">
                <h3 className="position">Project managment &amp; platforms</h3>
                <ul>
                  <li>Git</li>
                  <li>Slack</li>
                  <li>Trello</li>
                  <li>Wrike</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                  <li>Shopify</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
        </div>
        </template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.column-header{
    display: flex;
    width: 100%;
    height: 25%;
    align-items: center;
}
div.header-info{
    width: 100%;
}
ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: center;
}
ul.contact-info{

width: 100%;
margin-top: 20px;
border: 1px solid darkgray;
padding: 10px;
}

ul.contact-info> li{
    width: 50%;
    margin: 10px -10px;
    font-size: 14px;
}
body{


}
.name{
    color: darkblue;
font-size: 45px;
letter-spacing: 2.5px;
}
.position{
    font-size: 30px;
    color: orange;
    letter-spacing: 2.1px;

}
ul.recent-projects{
    flex-direction: column;
}

section.column-header div.img-wrapper{
    border-radius: 100%;
    border: solid 1px black;
    overflow: hidden;
    height: 175px;
    width: 175px;

}
section.column-header div.img-wrapper img{
    width: 100%;
}
.name, .position{
    text-transform: uppercase;
    margin: 0;
}
div.column > section{
margin: 0 15px;

}
.section-heading{
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: solid 4px darkblue;
    color: darkblue;
    margin: 0 auto;
}

section.left-column-header{
    justify-content: center;
}
main{
flex-wrap: wrap;
display: flex;
width: 100%;
}


div.left-col{
    width: 65%;

}
div.right-col{
    width: 30%;
}

div.column section {
    width: 80%;
    margin: 0 auto;
}


 li.tech-subgroup{
     width: 100%;

 }


 li.tech-subgroup > ul{
    justify-content: space-evenly;
     flex-wrap: wrap;

 }
 li.tech-subgroup > ul > li{
     width: 40%;
     font-size: 20px;
     margin: 10px;
     padding: 10px;
     text-align: center;
     text-transform: uppercase;
     font-weight: 500;
 }
 li.tech-subgroup.languages > ul > li{
     font-weight: 500;
     width: 40%;
     align-items: center;
     margin: 10px;
     padding: 10px;
     display: flex;
     justify-content: center;
 }
 li.tech-subgroup h3 {
     text-align: left;
         text-transform: capitalize;
         margin: 15px auto;
         width: auto;
         font-size: 28px;
         padding: 5px 0 5px 20px;

 }
#technologies{
    width: 100%;
    padding-top: 10%;
}
#technologies > h2.section-heading{
    width: 80%;
}
a{
    color: black;
    font-weight: 500;
}
i{
    color: orange;
    padding-right: 5px;
}
ul.job-highlights  {
    list-style: circle;
    justify-content: start;
    margin: 10px;
}
ul.job-highlights > li{
margin: 10px;

}
p.project-description {
    padding: 5px 15px;
}
span.date-range{
text-transform: uppercase;

}
h3.project-title {
    margin: 10px;
    color: #3c3232;
    font-size: 1.5rem;
}
#recent-project .job-card{
   border: 1px solid black;
   border-radius: 15px;
   margin: 5px;
}
h4.project-link {
    margin: 10px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
li.project {
    width: 90%;
}
section.column-header {

    height: 260px;
}

section.objective-summary > p {
    font-size: 16px;
        margin-top: 10px;
}
ul.exp-jobs {
    margin-top: 10px;
}


@media print{
    h4.project-link{
        display: none;
    }
}
@media(min-width: 768px){
    main{
        width: 80%;
        margin: 0 auto;
        }
}
@media(min-width: 991px){
    main{ width: 70%;}
}


    </style>