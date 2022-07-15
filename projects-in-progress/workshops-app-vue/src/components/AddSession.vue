<template>
  <div>
    <h2>
      Add a session
      <router-link
        :to="`/workshops/${$route.params.id}`"
        class="btn btn-sm btn-primary float-end"
        >List of sessions</router-link
      >
    </h2>
    <hr />
    <form @submit.prevent="addSession">
      <div class="mb-3">
        <label for="sequenceId" class="form-label">Sequence ID</label>
        <input
          type="number"
          class="form-control"
          id="sequenceId"
          aria-describedby="sequenceIDHelp"
          v-model.number="form.sequenceId"
        />
        <div id="sequenceIDHelp" class="form-text">
          Sequence ID is a number which denotes the order of the session in the
          workshop. For example, the first session in the workshop will have
          sequence ID 1.
        </div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
            type="text"
            class="form-control"
            id="name"
            v-model="form.name"
        />
      </div>
      <div class="mb-3">
        <label for="speaker" class="form-label">Speaker</label>
        <input
            type="text"
            class="form-control"
            id="speaker"
            v-model="form.speaker"
            @blur="$v.form.speaker.$touch()"
        />
        <div v-if="$v.form.speaker.$error">
            <div v-if="!$v.form.speaker.csv">
                You can only provide speaker names(s) separated by commas.
            </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="duration" class="form-label">Duration</label>
        <input
            type="text"
            class="form-control"
            id="duration" 
            aria-describedby="durationHelp"
            v-model.number="form.duration"
            @blur="$v.form.duration.$touch()"
        />
        <div id="durationHelp" class="form-text">
          Duration in hours. Eg. for a 2 hour 30 minutes session, type 2.5
        </div>
        <div v-if="$v.form.duration.$error">
            <div v-if="!$v.form.duration.required">
                This field is required.
            </div>
            <div v-if="!$v.form.duration.decimal">
                You can only have decimal number. Eg. 2.5, 3.75 etc.
            </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="level" class="form-label">Level</label>
        <select
            class="form-select"
            id="level"
            v-model="form.level"
        >
          <option selected value="">-- Select the level --</option>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="abstract" class="form-label">Description</label>
        <textarea
            class="form-control"
            id="abstract"
            v-model="form.abstract"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add a session</button>
    </form>
  </div>
</template>

<script>
import { required, decimal } from 'vuelidate/lib/validators';
import { addSession } from '@/services/sessions';
import Vue from 'vue';
import Config from '@/config';

export default {
  name: "AddSession",
  data() {
    return {
        form: {
            sequenceId: '',
            name: '',
            speaker: '',
            level: '',
            duration: '',
            abstract: ''
        }
    }
  },
  validations: {
    form: {
        sequenceId: {
            required
        },
        duration: {
            required,
            decimal
        },
        speaker: {
            csv( value ) {
                const csvPattern = /^[A-Za-z ]+(,[A-Za-z ]+)*$/;
                return csvPattern.test( value );
            }
        }
    }
  },
  methods: {
    async addSession() {
        const session = {
            workshopId: +this.$route.params.id,
            upvoteCount: 0,
            ...this.form,
        };

        if( !this.$v.form.$invalid ) {
            try {
                const updatedSession = await addSession( session );
                console.log( updatedSession );

                Vue.$toast.open({
                    message: 'Session was added',
                    type: 'success',
                    duration: Config.duration
                });

                // use $router and not $route
                this.$router.push({
                    name: 'sessions-list'
                });

            } catch( error ) {
                Vue.$toast.open({
                    message: error.message,
                    type: 'error',
                    duration: Config.duration
                });
            }
        } else {
            Vue.$toast.open({
                message: 'Please correct the errors and submit',
                type: 'error',
                duration: Config.duration
            });
        }
    }
  }
};
</script>

<style>
</style>