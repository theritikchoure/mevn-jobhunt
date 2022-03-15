<template>
  <layout>
    <template v-slot:section>
      <section>
        <PageBreadcrumb :link="{name: 'FAQs'}" />
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
                        their site, on readability or on fonts and sizes. A
                        dummy text is also helpful to present a design without
                        content to a client to show how the text is going to
                        look like without irritating the client by real texts.
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
                        their site, on readability or on fonts and sizes. A
                        dummy text is also helpful to present a design without
                        content to a client to show how the text is going to
                        look like without irritating the client by real texts.
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
                        their site, on readability or on fonts and sizes. A
                        dummy text is also helpful to present a design without
                        content to a client to show how the text is going to
                        look like without irritating the client by real texts.
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
                        their site, on readability or on fonts and sizes. A
                        dummy text is also helpful to present a design without
                        content to a client to show how the text is going to
                        look like without irritating the client by real texts.
                      </p>
                    </template>
                  </app-accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import PageBreadcrumb from "@/components/PageBreadcrumb/Index.vue";
import AppAccordion from "@/components/Accordion/Index.vue";

export default {
  name: "FAQ",
  components: { Layout, PageBreadcrumb, AppAccordion },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style></style>
