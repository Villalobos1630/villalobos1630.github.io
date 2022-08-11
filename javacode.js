$(document).ready(function(){
    $("#imagenes img").each(function(contador){
        $(this).delay((contador)*700).fadeTo(1000, 1);
    })

    $("#btn_esconder").click(function(){
        $("#01").hide();
    });

    $("#btn_mostrar").click(function(){
        $("#01").show();
    });

    $("#btn_rojo").click(function(){
        $("#imagenes").css({"background-color" : "red"})
    })
    
    $("#btn_negro").click(function(){
        $("#imagenes").css({"background-color" : "black"})
    })

    $("#parrafo").mouseenter(function(){
        $("#03").fadeOut()
    })

    $("#parrafo").mouseleave(function(){
        $("#03").fadeIn()
    })

    $("#nav").dblclick(function(){
        alert("Hola profe :)");
    })
})

