<template>
  <layout>
    <template v-slot:section>
      <section>
        <PageBreadcrumb :link="{name: 'Contact Us'}" />
      </section>

      <section>
        <div class="block">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 column">
                <div class="contact-form">
                  <h3>Keep In Touch</h3>
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <span class="pf-title">Full Name</span>
                        <div class="pf-field">
                          <input
                            type="text"
                            placeholder="ALi TUFAN"
                            v-model="name"
                          />
                          <p v-if="errors.name" class="invalid-message">
                            {{ errors.name }}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <span class="pf-title">Email</span>
                        <div class="pf-field">
                          <input
                            type="text"
                            placeholder="ALi TUFAN"
                            v-model="email"
                          />
                          <p v-if="errors.email" class="invalid-message">
                            {{ errors.email }}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <span class="pf-title">Subject</span>
                        <div class="pf-field">
                          <input
                            type="text"
                            placeholder="ALi TUFAN"
                            v-model="subject"
                          />
                          <p v-if="errors.subject" class="invalid-message">
                            {{ errors.subject }}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <span class="pf-title">Message</span>
                        <div class="pf-field">
                          <textarea v-model="message"></textarea>
                          <p v-if="errors.message" class="invalid-message">
                            {{ errors.message }}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button type="submit" @click.prevent="submitForm">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 column">
                <div class="contact-textinfo">
                  <h3>JobHunt Office</h3>
                  <ul>
                    <li>
                      <i class="la la-map-marker"></i
                      ><span
                        >Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan,
                        New York 10282
                      </span>
                    </li>
                    <li>
                      <i class="la la-phone"></i
                      ><span>Call Us : 0934 343 343</span>
                    </li>
                    <li>
                      <i class="la la-fax"></i><span>Fax : 0934 343 343</span>
                    </li>
                    <li>
                      <i class="la la-envelope-o"></i
                      ><span>Email : info@jobhunt.com</span>
                    </li>
                  </ul>
                  <a class="fill" href="#" title="">See on Map</a
                  ><a href="#" title="">Directions</a>
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
export default {
  name: "ContactUs",
  components: { Layout, PageBreadcrumb },
   data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",

      error: false,
      errorMsg: "",
      successMsg: "",
      errors: {},
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style></style>
