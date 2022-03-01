<template>
    <div class="container">
        <div class="row mb-3">
          <input type="file" id="imageLoader" class="m-3" :disabled="!isSelectedDate" @change="updateCanvasImage"/>
          <input type="date" id="dateSelector" class="m-3" @input="onSelectDate($event)" />
          <div style="background-color:black; width:97%;" class="bg-canvas d-flex align-items-center flex-column">
            <canvas id="imageCanvas" ref="imageCanvas" style="background-color:white;" ></canvas>
            <div class="mt-auto p-2"><button type="button" class="btn btn-light btn-lg" @click="goToResultImagePage">Next</button></div>
        </div>
        </div>
    </div>
</template> 

<script>

export default {
    data:function(){
      return {thaiDate : ['๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙', '๑๐', 
                  '๑๑', '๑๒', '๑๓', '๑๔', '๑๕', '๑๖', '๑๗', '๑๘', '๑๙', '๒๐', 
                  '๒๑', '๒๒', '๒๓', '๒๔', '๒๕', '๒๖', '๒๗', '๒๘', '๒๙', '๓๐', '๓๑'],
              thaiNumber : ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'],
              currentImage : new Image(),
              imgPathFromCanvas : "",
              birthDate: new Date(),
              isSelectedDate : false,
              isSelectedImage : false
      }
    },
    methods: {
        updateCanvasImage(e) {
            var self = this;
            var reader, files = e.target.files;
            reader = new FileReader();
 
            reader.onload = (e) => {
                var img = new Image();
                img.onload = function() {
                    self.drawCanvasImage(img);
                }
                img.src = e.target.result;
                this.currentImage = img;
                this.isSelectedImage = true;
            };
 
            reader.readAsDataURL(files[0]);
 
        },

        goToResultImagePage(){
          this.$router.push({name : 'result', params: {imagePath : this.imgPathFromCanvas}});
        },
 
        drawCanvasImage(img) {
            var canvas = this.$refs.imageCanvas;
            if(window.innerWidth < 768){
              canvas.width = window.innerWidth*0.9;
              canvas.height = window.innerHeight*0.6;
            } else{
              canvas.width = window.innerWidth *0.5;
              canvas.height = window.innerHeight *0.7;
            }
            
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0,0,canvas.width,canvas.height);

            ctx.font = "1.5rem Thasadith";
            ctx.textAlign = "center";
            ctx.fillStyle = 'black';
            if(window.innerWidth < 768){
              ctx.fillText(this.getBirthDateString(this.birthDate), canvas.width*0.5, canvas.height/1.6);
              ctx.fillText(this.getDeathDateString(), canvas.width*0.5, canvas.height/1.4);
            
              ctx.drawImage(img, canvas.width*0.15, canvas.height*0.04, canvas.width*0.7, canvas.width*0.7);
            } else{
              ctx.fillText(this.getBirthDateString(this.birthDate), canvas.width/2, canvas.height/1.3);
              ctx.fillText(this.getDeathDateString(), canvas.width/2, canvas.height/1.2);
            
              ctx.drawImage(img, canvas.width*0.25, canvas.height*0.04, canvas.width*0.5, canvas.width*0.5);
            }
            
            
            var imagePath = canvas.toDataURL("image/jpeg", 1.0);
            this.imgPathFromCanvas = imagePath;
        },

        onSelectDate(event){
          this.birthDate = event.target.valueAsDate;
          this.isSelectedDate = true;
          if(this.isSelectedImage){
              this.drawCanvasImage(this.currentImage);
          }
        },

        getBirthDateString(datetime){
          const options = {year: 'numeric', month: 'long', day: 'numeric' };
          datetime = new Date(datetime).toLocaleDateString('th-TH', options);
          var dateArr = datetime.split(" ");
          var date = this.thaiDate[dateArr[0]-1];
          var month = dateArr[1];
          var year = this.getThaiYear(dateArr[2]);
          return `ชาตะ ${date} ${month} พ.ศ. ${year}`;
        },

        getDeathDateString(){
          return `มรณะ ๑๙ ธันวาคม พ.ศ. ๒๕๖๓`;
        },
        
        getThaiYear(year){
          var yearArr = year.split('');
          yearArr.forEach((element, index) => {
            yearArr[index] = this.thaiNumber[element];
          });
          return yearArr.join('');
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;400&family=Thasadith:ital@1&display=swap');

.bg-canvas {
  height: 100vh;
  width: 60%;
  margin: auto;
  padding-top: 3%;
  padding-bottom: 3%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
