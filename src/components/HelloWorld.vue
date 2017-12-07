<template>
  <div>
    <div id="accordion" role="tablist">
      <div v-for="(member,index) in members" class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h5 class="mb-0">
            <a data-toggle="collapse" :href="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
              {{member.name}}
            </a>
          </h5>
        </div>

        <div :id="'collapse' + index" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="direct(post)" v-for='(post,postIndex) in member.postList'>
                  <th scope="row">{{postIndex}}</th>
                  <td>{{post.title}}</td>
                  <td>{{post.date}}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      members: []
    }
  },
  methods:{
    direct(post){
      window.location.href = post.url
      console.log(post);
    },
    getInfomation(){
      console.log('test');
      var settings = {
        "url": "https://lit-journey-88022.herokuapp.com/",
        "method": "GET",
      }

      $.ajax(settings).done((response) => {
        this.members = response
        console.log('com');
      });
    }
  },
  created(){
    this.getInfomation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
