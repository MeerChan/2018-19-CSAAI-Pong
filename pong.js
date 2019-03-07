function main()  {
  console.log ("hola");

   var canvas = document.getElementById('display');
   canvas.width = 600;
   canvas.height = 400 ;


   var ctx = canvas.getContext("2d");

   window.onkeydown = (e) => {
    e.preventDefault();
    console.log(e.key);
    if(e.key == 'a') {
      console.log("tecla A apretada")
    }
   }




   var bola = {

     x_ini :50,
     y_ini :50,

     x : 0,
     y: 0,

     vx :4,
     vy: 1,

     ctx : null,

     width : 5,
     height : 5,


     reset : function () {
       this.x = this.x_ini;
       this.y = this.y_ini;
     },

     init : function (ctx) {
        console.log("Bola:init");
        this.reset();
        this.ctx = ctx;
     },
     draw: function () {
        console.log("Bola:draw")
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x,this.y, this.width, this.height);
     },
     update: function () {
        console.log("Bola:update")
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
     }
   };

   bola.init(ctx);
   bola.draw();

   var timer = null;

   var sacar = document.getElementById('sacar');

   sacar.onclick = () => {
      console.log("Click")
      //--Lanzar el timer si no estaba lanzado
      if (!timer) {
        timer = setInterval( ()=>{
          console.log("tic");
          //--actualizar Bola
          bola.update()
          //--Borrar el canvas
          ctx.clearRect(0,0, canvas.width, canvas.height);
          //dibujar la bola
          bola.draw()

          //--condicion de terminacion
          if (bola.x > canvas.width) {
            clearInterval(timer)
            timer = null;
            bola.reset();
            bola.draw();
          }
        },20);
      }
   }


   //--puntuacion
   ctx.font="80px Verdana";
   ctx.fillStyle = 'white';
   ctx.fillText("0",220,80,);
   ctx.fillText("2",340,80,);



   //--raquetas
   ctx.fillStyle = 'white';
   ctx.fillRect (50,50, 10, 40);
   ctx.fillRect (550,300, 10, 40);
   ctx.fillRect (350,200, 5, 5);
   //--Bola


   //--red
   ctx.fillStyle = 'white';
   ctx.fillRect (300,0, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,25, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,50, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,75, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,100, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,125, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,150, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,175, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,200, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,225, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,250, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,275, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,300, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,325, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,350, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,375, 2, 15);

}
