<template>
    <div class="vg-page page-contact" id="contact">
    <div class="container-fluid">
      <div class="text-center wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class="badge badge-subhead">Contact</div>
      </div>
      <h1 class="text-center fw-normal wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">Get in touch</h1>
      <div class="row py-5">
        <div class="col-lg-5 mx-auto">
          <form class="vg-contact-form">
            <div class="form-row">
              <div class="col-12 mt-3 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <input class="form-control" type="text" name="Name" placeholder="Your Name">
              </div>
              <div class="col-6 mt-3 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <input class="form-control" type="text" name="Email" placeholder="Email Address">
              </div>
              <div class="col-6 mt-3 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <input class="form-control" type="text" name="Subject" placeholder="Subject">
              </div>
              <div class="col-12 mt-3 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <textarea class="form-control" name="Message" rows="6" placeholder="Enter message here.."></textarea>
              </div>
              <button type="submit" class="btn btn-theme mt-3 wow fadeInUp ml-1" style="visibility: visible; animation-name: fadeInUp;">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"ContactSection",
}
</script>
<style></style>