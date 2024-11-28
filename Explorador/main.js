canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
cafe_ancho=100;
cafe_alto=90;


background_image = "dona.jpg";

cafe_image = "cafe.png";

cafe_x = 10;
cafe_y = 10;

//Crea la función "add()"


background_imgTag= new Image();	                                     //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;	                                     // Define una función para cargar esta variable
background_imgTag.src=background_image;	                                     // Carga la imagen

cafe_imgTag= new Image();                                        //Define la variable con una nueva imagen
cafe_imgTag.onload=uploadcafe;	                                     // Define una función para cargar esta variable
cafe_imgTag.src=cafe_image;	                                     // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);  
}                           
                                         //Dibuja la imagen de fondo

//Crea una función "uploadrover()".
function uploadcafe(){
ctx.drawImage(cafe_imgTag, cafe_x, cafe_y, cafe_ancho, cafe_alto)
}
                                        //Dibuja la imagen del explorador


window.addEventListener( "keydown", my_keydown) ;                          
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if (keyPressed=="38"){
        up();
    }	
    if (keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
    
    }

     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
	{	
function up(){
    if(cafe_y >=0){
        cafe_y=cafe_y - 10; //cada que se presiona la tecla flecha arriba 
        uploadBackground();//aca se recarga la imagen de fondo 
        uploadcafe();//aca se recarga la imagen del cafe 
    }
    }
    function down (){
        if(cafe_y <=1000){
           cafe_y= cafe_y + 10; //Cada que se presiona la tecla flecha 
           uploadBackground();// aca se recarga la imagen de fondo 
           uploadcafe();
        }
    }
function right(){
    if(cafe_x >=0){
        cafe_x= cafe_x +10;
        uploadBackground();
        uploadcafe();
    }
}
function left(){
    if(cafe_x <=1000){
        cafe_x= cafe_x -10 ;
        uploadBackground();
        uploadcafe();
    }
}


    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



