<template>
  <div>
    <div id="accordion" role="tablist">
      <div v-for="(member,index) in members" class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h5 :href="'#collapse' + index"class="mb-0">
            <a class="cr_collapse_href" data-toggle="collapse" :href="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
              {{member.name}}
              <br>
              <div class="listLength">
                篇數：{{member.postList.length}}
              </div>
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
                <tr class="fuck" :class="{isHot:isHot(post)}" @click="direct(post)" v-for='(post,postIndex) in member.postList'>
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
      window.open(post.url)
      console.log(post);
    },
    getInfomation(){
      var settings = {
        "url": "https://lit-journey-88022.herokuapp.com/",
        "method": "GET",
      }

      $.ajax(settings).done((response) => {
        this.members = response
      });
    },
    isHot(post){
      let date = new Date(post.date)
      let now = Date.now()
      let subtract = now - date
      if(subtract/1000/60/60 < 48){
        return true
      }
      else {
        return false
      }
    }
  },
  created(){
    this.getInfomation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listLength{
  color: #000;
}
.cr_collapse_href{
  text-decoration: none;
  display: block;
  /*color: #000;*/
  /*margin-top:30px;*/
}
.isHot{
  color: red;
}
.fuck:hover {
  /*cursor: helper;*/
  /*color:blue;*/
  background-color: #eee;
}
.fuck{
  cursor: pointer;
}
/*.trList{
  color: red;
}*/
</style>
