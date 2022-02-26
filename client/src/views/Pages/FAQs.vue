<template>
  <div>
    <PageHeader />

    <section>
      <div class="block no-padding gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner2">
                <div class="inner-title2">
                  <h3>Faq</h3>
                  <span>Keep up to date with the latest news</span>
                </div>
                <div class="page-breacrumbs">
                  <ul class="breadcrumbs">
                    <li><a href="#" title="">Home</a></li>
                    <li><a href="#" title="">Pages</a></li>
                    <li><a href="#" title="">Faq</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="block">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faqs">
                <app-accordion>
                  <template v-slot:title>
                      Why is a template text recommended to be as long as
                      possible? 
                  </template>
                  <template v-slot:content>
                    <p>
                      Designer at work who don’t have any content for their
                      product yet have the possibility to insert a dummy text
                      into their design to judge on the arrangement of text on
                      their site, on readability or on fonts and sizes. A dummy
                      text is also helpful to present a design without content
                      to a client to show how the text is going to look like
                      without irritating the client by real texts.
                    </p>
                  </template>
                </app-accordion>
                <app-accordion>
                  <template v-slot:title>
                      Why is a template text recommended to be as long as
                      possible? 
                  </template>
                  <template v-slot:content>
                    <p>
                      Designer at work who don’t have any content for their
                      product yet have the possibility to insert a dummy text
                      into their design to judge on the arrangement of text on
                      their site, on readability or on fonts and sizes. A dummy
                      text is also helpful to present a design without content
                      to a client to show how the text is going to look like
                      without irritating the client by real texts.
                    </p>
                  </template>
                </app-accordion>
                <app-accordion>
                  <template v-slot:title>
                      Why is a template text recommended to be as long as
                      possible? 
                  </template>
                  <template v-slot:content>
                    <p>
                      Designer at work who don’t have any content for their
                      product yet have the possibility to insert a dummy text
                      into their design to judge on the arrangement of text on
                      their site, on readability or on fonts and sizes. A dummy
                      text is also helpful to present a design without content
                      to a client to show how the text is going to look like
                      without irritating the client by real texts.
                    </p>
                  </template>
                </app-accordion>
                <app-accordion>
                  <template v-slot:title>
                      Why is a template text recommended to be as long as
                      possible? 
                  </template>
                  <template v-slot:content>
                    <p>
                      Designer at work who don’t have any content for their
                      product yet have the possibility to insert a dummy text
                      into their design to judge on the arrangement of text on
                      their site, on readability or on fonts and sizes. A dummy
                      text is also helpful to present a design without content
                      to a client to show how the text is going to look like
                      without irritating the client by real texts.
                    </p>
                  </template>
                </app-accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '../../components/Header/PageHeader.vue';
import AppAccordion from '../../components/Custom/Accordian.vue';

export default {
  name: 'FAQs',
  components: { PageHeader, AppAccordion },
};
</script>

<style>
</style>