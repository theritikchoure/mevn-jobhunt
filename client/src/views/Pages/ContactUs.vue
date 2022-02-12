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
                  <h3>Contact</h3>
                  <span>Keep up to date with the latest news</span>
                </div>
                <div class="page-breacrumbs">
                  <ul class="breadcrumbs">
                    <li><a href="#" title="">Home</a></li>
                    <li><a href="#" title="">Pages</a></li>
                    <li><a href="#" title="">Contact</a></li>
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
                        <p v-if="errors.name" class="invalid-message">{{errors.name}}</p>
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
                        <p v-if="errors.email" class="invalid-message">{{errors.email}}</p>
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
                        <p v-if="errors.subject" class="invalid-message">{{errors.subject}}</p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <span class="pf-title">Message</span>
                      <div class="pf-field">
                        <textarea v-model="message"></textarea>
                        <p v-if="errors.message" class="invalid-message">{{errors.message}}</p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" @click.prevent="submitForm">Send</button>
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
                      >Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New
                      York 10282
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
  </div>
</template>

<script>
import PageHeader from "../../components/Header/PageHeader.vue";
import ContactService from "../../services/contactus.service";
import ContactValidation from "../../validations/contactus.validation";

export default {
  name: "ContactUs",
  components: { PageHeader },
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
  methods: {
    async submitForm() {
      const object = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      const errors = ContactValidation.validate(object);
      if(Object.entries(errors).length !== 0) {
        this.error = true;
        this.errors = errors;
        console.log(errors); 
        return;
      } else {
        this.errors = {};
      }
      ContactService.create(object)
        .then((response) => {
          console.log(response);
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
          this.successMsg = response.message;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = (error.response
              && error.response.data
              && error.response.data.message)
            || error.message
            || error.toString();
          console.log(this.errorMsg);
        });
    },
  },
};
</script>

<style scoped>

  .invalid-message {
    color: red !important;
    font-size: 13px;
  }
</style>