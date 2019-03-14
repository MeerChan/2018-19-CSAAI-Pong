function main()  {
  console.log ("hola");

   var canvas = document.getElementById('display');
   canvas.width = 600;
   canvas.height = 540 ;


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

     vx :7,
     vy: 7,

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

   var raqueta = {

    x_ini: 20,
    y_ini: 240,

    x: 0,
    y: 0,

    ctx: null,

    vy: 30,

    width: 10,
    height: 60,

    direccion: null,

    reset: function () {
      this.x = this.x_ini;
      this.y = this.y_ini;
      this.direccion = null;
    },

    init : function(ctx) {
      this.reset();
      this.ctx = ctx;

    },

    draw: function() {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    },

    update: function() {
      if (this.direccion == "arriba") {
        this.y = this.y - this.vy;
      } else if (this.direccion == "abajo") {
        this.y = this.y + this.vy;
      }
    },

    hit: function(a,b) {
      for (i = this.y; i < this.y + this.height; i++) {
        if (a == raqueta.x + raqueta.width && ( b == i || b+1 == i || b+2 ==  i || b+3 ==  i || b+4 ==  i || b+5 ==  i) )  {
          choque_bola_raqueta = true;
          console.log("Han chocado");
        }
     }
   }

  }
  raqueta.init(ctx);
  raqueta.draw();
   var timer = null;

   window.onkeydown = (e) => {
    e.preventDefault();

    if (e.key == 'Enter'){
      // Lanzar el timer (si es que no estaba ya lanzado)
      if (!timer) {
        timer = setInterval(() =>{
          // Actualizar la bola
           bola.update()

         // Movimiento de una raqueta
         window.onkeydown = (e) => {
           e.preventDefault();

           if (e.key == 'ArrowUp' && raqueta.y  > 0) {
             raqueta.direccion = "arriba";
             raqueta.update()
           } else if (e.key == "ArrowDown" && raqueta.y + raqueta.height < canvas.height ) {
             raqueta.direccion = "abajo";
             raqueta.update();
           }
        },

          // Borrar el canvas
          ctx.clearRect(0,0,canvas.width, canvas.height);

          //Dibujar la bola
          bola.draw()

          //Dibujar la raqueta
          raqueta.draw();

          //Comprobacion de si la bola choca con la raqueta
          raqueta.hit(bola.x,bola.y)

          // Choque y rebote de la bola
          if (bola.x > canvas.width) {
            bola.vx = -7;
            bola.direccion = "izquierda";
          } else if (bola.y < 0 && bola.x < 0) {
            bola.vx = 7;
            bola.vy= 15;
            bola.direccion = "derecha";
          } else if (bola.x > canvas.width && bola.y > canvas.height) {
            bola.vx = -15;
            bola.vy = -7;
            bola.direccion = "izquierda";
          } else if (bola.x < 0 && bola.y > canvas.height) {
            bola.vx = 15;
            bola.vy = -7;
            bola.direccion = "derecha";
          } else if (bola.x > canvas.width && bola.y < 0) {
            bola.vx = -7;
            bola.vy = 15;
            bola.direccion = "izquierda";
          } else if (bola.y > canvas.height) {
            // Controlo la direccion de rebote de la bola
            if (bola.direccion == "izquierda") {
              bola.vx = -7;
              bola.vy = -7;
            } else {
              bola.vx = 7;
              bola.vy = -7;
            }
          } else if (bola.y < 0) {
            // Controlo la direccion de rebote de la bola
            if (bola.direccion == "izquierda") {
              bola.vx = -7;
              bola.vy = 7;
            } else {
              bola.vx = 7;
              bola.vy = 7;
            }
          } else if (bola.x < 0) {
            bola.vx = 7;
            bola.direccion = "derecha";
          } else if (choque_bola_raqueta) {
            bola.vx = 7;
            bola.direccion = "derecha";
            // Vuelvo a poner el choque en false para poder comprobarlo en cada interaccion
            choque_bola_raqueta = false;
          }

        }, 15)
      }


   var sacar = document.getElementById('sacar');


      }
   },


   //--puntuacion
   ctx.font="80px Verdana";
   ctx.fillStyle = 'white';
   ctx.fillText("0",220,80,);
   ctx.fillText("2",340,80,);



   //--raquetas

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
   ctx.fillStyle = 'white';
   ctx.fillRect (300,400, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,425, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,450, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,475, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,500, 2, 15);
   ctx.fillStyle = 'white';
   ctx.fillRect (300,525, 2, 15);
}
