<template>
  <div>
    <HeaderMain />
    <AboutSection />
    <ServiceSection />
    <FunfactSection />
    <PortfolioSection />
    <!-- <TestimonialSection /> -->
    <!-- <ClientSection /> -->
    <ContactSection />
    <FooterMain />
  </div>
</template>

<script>

import HeaderMain from "@/components/HeaderMain.vue"
import AboutSection from "@/components/AboutSection.vue"
import ServiceSection from "@/components/ServiceSection.vue"
import FunfactSection from "@/components/FunfactSection.vue"
import PortfolioSection from "@/components/PortfolioSection.vue"
// import TestimonialSection from "@/components/TestimonialSection.vue"
// import ClientSection from "@/components/ClientSection.vue"
import ContactSection from "@/components/ContactSection.vue"
import FooterMain from "@/components/FooterMain.vue"
export default {
  name: 'HomeView',
  components:{
     HeaderMain,
     AboutSection,
     ServiceSection,
     FunfactSection,
     PortfolioSection,
    //  TestimonialSection,
    //  ClientSection,
     ContactSection,
     FooterMain
  }
}
</script>
<style scoped>
/* @import '@/src/assets/css/bootstrap.css'; */

</style> 
