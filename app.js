let app = new Vue({
  el: "#app",
  data: {
    emailarray: [],
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          // handle success
          let email = response.data.response;
          this.emailarray.push(email);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  },
});
