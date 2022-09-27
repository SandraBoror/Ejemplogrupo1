function validar()
{
    var usuarioIngresado=document.getElementById("textUsuario").value;
    var passwordIngresado=document.getElementById("textPass").value;

if ( usuarioIngresado=="Sandra" && passwordIngresado==123456)
{
    alert ("Sus datos son correctos");
}
else{
    alert("Sus datos son Incorrectos");
}
}

function validar()
{
    var usuarioIngresado=document.getElementById("textUsuario").value;
    var passwordIngresado=document.getElementById("textPass").value;

if ( usuarioIngresado=="Sandra" && passwordIngresado==123456)
{
    alert ("Sus datos son correctos");
    window.open("https://www.youtube.com/")
}
else{
    alert("Sus datos son Incorrectos");
    window.open("index.html");
}
}