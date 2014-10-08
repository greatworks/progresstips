//function sendCode(event) {
//              var src = document.getElementById("btnSendMsg");
//              progressTips.init(src, 60, null); 
//}
var progressTips = {
       node:null,
       count:60, //time or count
       content: "Waiting...",
       start:function(){
          //console.log(this.count);
          if(this.count > 0){
             this.node.innerHTML = 'Wait... '+(this.count--);
             var _this = this;
             setTimeout(function(){
                 _this.start();
             },1000);
          }else{
             this.node.removeAttribute("disabled");
             this.node.innerHTML = this.content;
             //this.count = 60;
          }
       },
       //init
       init:function(node, count, content){
          this.node = node;
          this.count=count;
          this.content=content;
          this.node.setAttribute("disabled",true);
          this.start();
       }
};