<template>
    <div class="vg-page page-portfolio" id="portfolio">
    <div class="container">
      <div class="text-center wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class="badge badge-subhead">Portfolio</div>
      </div>
      <h1 class="text-center fw-normal wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">See my work</h1>
      <div class="filterable-button py-3 wow fadeInUp" data-toggle="selected" style="visibility: visible; animation-name: fadeInUp;">
        <button class="btn btn-theme-outline selected" data-filter="*">All</button>
        <button class="btn btn-theme-outline" data-filter=".apps">Apps</button>
        <button class="btn btn-theme-outline" data-filter=".template">Template</button>
      </div>

      <div class="gridder my-3" style="position: relative; height: 570.98px;">
        <div class="grid-item template wow zoomIn" style="position: absolute; left: 0%; top: 0px; visibility: visible; animation-name: zoomIn;">
          <a class="img-place" href="https://www.unigest.fr/"  target="_blank">
            <img src="../assets/img/template1.png" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">UNIGEST WEBGESTION</h5>
              <p>It’s 3 Solutions in 1</p>
            </div>
          </a>
        </div>
        <div class="grid-item template wow zoomIn" style="position: absolute; left: 33.3324%; top: 0px; visibility: visible; animation-name: zoomIn;">
          <a class="img-place" href="https://sebourugs.com/"  target="_blank">
            <img src="../assets/img/template2.png" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Sebou</h5>
              <p>Site Shop </p>
            </div>
          </a>
        </div>
         <div class="grid-item template wow zoomIn" style="position: absolute; left: 33.3324%; top: 0px; visibility: visible; animation-name: zoomIn;">
          <a class="img-place" href="https://adler-bz.de/" target="_blank">
            <img src="../assets/img/template3.png" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Adler Bildungszentrum</h5>
              <p>School Website</p>
            </div>
          </a>
        </div>
        <div class="grid-item template wow zoomIn" style="position: absolute; left: 33.3324%; top: 0px; visibility: visible; animation-name: zoomIn;">
          <a class="img-place" href="https://ballykealeyhouse.com/" target="_blank">
            <img src="../assets/img/template4.png" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Ballykealey House</h5>
              <p>Wedding website</p>
            </div>
          </a>
        </div>
        <div class="grid-item template wow zoomIn" style="position: absolute; left: 33.3324%; top: 0px; visibility: visible; animation-name: zoomIn;">
          <a href="https://www.bionac.fr/" class="img-place" target="_blank">
            <img src="../assets/img/template5.png" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Bionac</h5>
              <p>Website Landscaping of gardens and terraces
							</p>
            </div>
          </a>
        </div>
        <div class="grid-item template wow zoomIn" style="position: absolute; left: 33.3324%; top: 0px; visibility: visible; animation-name: zoomIn;">
          <a href="https://webmaroc.ma/" class="img-place" target="_blank">
            <img src="../assets/img/template6.png" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">WebMaroc</h5>
              <p>WebMaroc is a web agency located in Kénitra
							</p>
            </div>
          </a>
        </div>
        <div class="grid-item apps wow zoomIn" style="position: absolute; left: 0; top: 587.938px; visibility: visible; animation-name: zoomIn;">
          <div href="#" class="img-place" >
            <img src="../assets/img/app1.jpg" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Application Web</h5>
              <p>Inventory management application(Mysql-PHP-VUE.JS-VUEX)
							</p>
            </div>
          </div>
        </div>
        <div class="grid-item apps wow zoomIn" style="position: absolute; left: 0; top: 587.938px; visibility: visible; animation-name: zoomIn;">
          <div href="#" class="img-place" >
            <img src="../assets/img/app1.jpg" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Application Web</h5>
              <p>student management(PHP-VUE.JS&VUEX)
							</p>
            </div>
          </div>
        </div>
        <div class="grid-item apps wow zoomIn" style="position: absolute; left: 0; top: 587.938px; visibility: visible; animation-name: zoomIn;">
          <div href="#" class="img-place" >
            <img src="../assets/img/app1.jpg" alt="">
            <div class="img-caption">
              <h5 class="fg-theme">Application Web</h5>
              <p>Restaurant management(PHP-VUE.JS&VUEX )
							</p>
            </div>
          </div>
        </div>
      </div> <!-- End gridder -->
    </div>
  </div>
</template>
<script>
export default {
    name:"PortfolioSection"
}
</script>
<style>
.grid-item img {
    max-height: 262px;
}
</style>