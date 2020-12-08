<template>
    <div class="comntainer row">
        <div class="col-sm-2 col-12 my-3"><a href="/" class="back-button btn btn-primary btn-sm ml-3">Back</a></div>
        <div class="col-sm-5 col-12 my-3 text-center">
            <img width="90%" height="90%" :src="$route.params.imagePath" />
        </div>
        <div class="col-sm-5 col-12 my-3">
            <p>บอกเราหน่อย <br/>#ถ้าตายวันที่19ธันวา<br/> จะใช้ชีวิตที่เหลือยังไง ?
            </p>
            <comment-and-social-share-component :targetUrl="getLocation($route.params.imagePath).hostname"></comment-and-social-share-component>
            <button type="button" class="btn btn-primary btn-lg" download="death-certificate.jpg" >Save Image</button>
        </div>
    </div>
</template>

<script>
import CommentAndSocialShareComponent from './sub-components/CommentAndSocialShareComponent.vue';

export default {
  components: { CommentAndSocialShareComponent },
    props: {
    imgURL: String
  },
  methods:{
        downloadImage(){

        },
        getLocation(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        }
  }
}
</script>

<style scoped>
    .back-button{
        float: left;
    }
    p{
        font-family: 'Thasadith';
        font-size: 2rem;
        text-align: left;
    }
</style>