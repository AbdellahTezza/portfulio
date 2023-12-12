<template>
<div class="vg-page page-about" id="about">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 py-3">
          <div class="img-place wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;" >
            <img src="../assets/img/person.jpeg" alt="">
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
          <h1 class="fw-light">Abdellah Tezza</h1>
          <h5 class="fg-theme mb-3">Full stack developer</h5>
          <p class="text-muted">Specialized in web development with 5
          years of experience, I was always
          passionate about the world of the web and endowed
          of great curiosity. I am a holder
          a professional license in
          computer development, I master
          the different technical stages of the
          creation of web applications; of the
          understanding user needs,
          to full stack development.</p>
          <ul class="theme-list">
            <li><b>From:</b> Kenitra, Morocco</li>
            <li><b>Lives In:</b> Kenitra, Morocco</li>
            <li><b>Age:</b> 30</li>
            <li><b>Gender:</b> Male</li>
          </ul>
          <button  class="btn btn-theme-outline" @click="downloadPDF()">Download CV</button> 

        </div>
      </div>
    </div>
    <div class="container py-5">
      <h1 class="text-center fw-normal wow fadeIn" style="visibility: visible; animation-name: fadeIn;">My Skills</h1>
      <div class="row py-3">
        <div class="col-md-6">
          <div class="px-lg-3">
            <h4 class="wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">Front End</h4>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">Vue.js + Vuex</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 86%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">JavaScript(ES6)</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 86%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">REST API + AJAX + JSON</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 86%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">JQuery</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp" style="visibility: hidden; animation-name: none;">
              <span class="caption">HTML5 + CSS3 + SASS</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="px-lg-3">
            <h4 class="wow fadeInUp" v-show="true" style="visibility: visible; animation-name: fadeInUp;">Back End</h4>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">Mysql/ Postgresql</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 92%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">92%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">PHP</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption">Git/Github</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="px-lg-3">
            <h4 class="wow fadeInUp" v-show="true" style="visibility: visible; animation-name: fadeInUp;">Wordpress</h4>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption"> Theme Development and Customization, Plugin Development and Integration, Third-party App and Service Integration, Performance Optimization and Security, Troubleshooting and Debugging, Maintenance and Updates, Collaboration and Communication, Technical Expertise and Continuous Learning...</span>
              <p></p>
              <div class="progress">

                <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="px-lg-3">
            <h4 class="wow fadeInUp" v-show="true" style="visibility: visible; animation-name: fadeInUp;">Shopify</h4>
            <div class="progress-wrapper wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <span class="caption"> Building and customizing Shopify themes, Integrating third-party apps and services ,
                Developing custom applications, Troubleshooting and debugging, Optimizing performance and security, Maintaining and updating Shopify stores,
                Collaborating with designers and stakeholders, Staying up-to-date with Shopify technologies...
              </span>
              <p></p>
              <div class="progress">

                <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-6 wow fadeInRight" style="visibility: hidden; animation-name: none;">
          <h2 class="fw-normal">Education</h2>
          <ul class="timeline mt-4 pr-md-5">
            <li>
              <div class="title">2020</div>
              <div class="details">
                <h5>NATIONAL SCHOOL OF APPLIED SCIENCES</h5>
                <small class="fg-theme">Professional license</small>
                <p>Basic engineering data.</p>
              </div>
            </li>
            <li>
              <div class="title">2015</div>
              <div class="details">
                <h5>SPECIALIZED INSTITUTE OF APPLIED TECHNOLOGIES</h5>
                <small class="fg-theme">DTS</small>
                <p>IT development in 2015 at KENITRA Morocco</p>
              </div>
            </li>
            <li>
              <div class="title">2012</div>
              <div class="details">
                <h5>IBN ALHAITAME HIGH SCHOOL</h5>
                <small class="fg-theme">BACCALAUREATE</small>
                <p>Physical science in 2012 in KENITRA Morocco</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6 wow fadeInRight" data-wow-delay="200ms" style="visibility: hidden; animation-delay: 200ms; animation-name: none;">
          <h2 class="fw-normal">Experience</h2>
          <ul class="timeline mt-4 pr-md-5">
            <li>
              <div class="title">2017 - Current</div>
              <div class="details">
                <h5>Specialize of course</h5>
                <small class="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
            <li>
              <div class="title">2020 - 2022</div>
              <div class="details">
                <h5>FULL STACK DEVELOPER</h5>
                <small class="fg-theme">UNIGEST SOLUTIONS</small>
                <ol class="experience">
                  <li>Contribution to the development and maintenance of a
                    web application (commercial management) with PHP and
                    PGADMIN.</li>
                  <li>Contribution to the necessary corrections to the latest
                      technological developments.
                      </li>
                  <li>Experience in RESTFUL web services to integrate between the server side and the client side.</li>
                  <li>Maintenance, bug fixes and improvement of the sites or
                      web applications.</li>
                  <li>Creation of websites under WordPress (E-commerce), and
                        showcase site</li>
                </ol>
              </div>
            </li>
            <li>
              <div class="title">2016 - 2019</div>
              <div class="details">
                <h5>FULL STACK DEVELOPER</h5>
                <small class="fg-theme">ONE FANCY</small>
                <ol class="experience">
                  <li>The design of the pages is dynamic and compatible with browsers using HTML, CSS, JavaScript.</li>
                  <li>Project management.</li>
                  <li>Website maintenance.</li>
                  <li>Creation of websites under WordPress (E-commerce).</li>
                  <li>Use of Media Queries for responsive design and compatible with all devices.</li>
                </ol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import fs from 'fs-extra';
// import axios from 'axios'; // For downloading from a remote server

export default {
  name:"AboutSection",
  // data() {
  //   return {
  //     filePath: '../assets/img/Lebenslauf.pdf', // Local file path
  //     pdfFileName: 'Lebenslauf.pdf' // Desired filename for download
  //   };
  // },
  // methods: {
  //   async downloadPDF() {
  //     // Check if the file exists locally
  //     if (await fs.pathExists(this.filePath)) {
  //       // Read the file content
  //       const fileBuffer = await fs.readFile(this.filePath);

  //       // Create a blob from the file buffer
  //       const blob = new Blob([fileBuffer], { type: 'application/pdf' });

  //       // Create a temporary URL for the blob
  //       const url = window.URL.createObjectURL(blob);

  //       // Create an anchor element to trigger the download
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = this.pdfFileName;
  //       link.click();

  //       // Revoke the temporary URL after download
  //       window.URL.revokeObjectURL(url);
  //     } else {
  //       // Handle the case when the file is not found locally
  //       console.error('File not found:', this.filePath);
  //     }
  //   }
  // }
};
</script>
<style >
.details ol li {
  position: static;
    padding-left: 7px;
    margin-bottom: 3px;
    display: list-item;
}
</style>