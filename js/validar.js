var campoNombre = document.querySelector('input[name=nombre]');
var campoEmail = document.querySelector('input[name=email]');
var campoEdad = document.querySelector('input[name=edad]');
var campoApellidos = document.querySelector('input[name=apellidos]');
var campoContraseña = document.querySelector('input[name=contraseña]');
var campoRepetirContraseña = document.querySelector('input[name=repetir_contraseña]');
var Formulario = document.querySelector('.formu');


campoNombre.onblur = function(){
    if (this.value.trimStart() == ''){
        alert('El campo nombre no puede estar vacio');
    }else if (this.value.length < 3){
        alert('El nombre debe tener mas de 3 letras')
    }
}

var ragexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

campoEmail.onblur = function(){
    if (this.value == ''){
        alert('El campo email no puede estar vacio');
    }else if (!ragexEmail.test(this.value)){
        alert('El campo email no tiene un formato valido')
    }

}
campoEdad.onblur = function(){
    if (this.value == ''){
        alert('El campo edad no puede estar vacio');
    }else if (this.value.length >= 150){
        alert('La edad debe tener maximo 150 caracteres')
    }
}
campoApellidos.onblur = function(){
    if (this.value == ''){
        alert('El campo apellido no puede estar vacio');
    }else if (this.value.length < 3){
        alert('El apellido debe tener mas de 3 letras')
    }
}
campoContraseña.onblur = function(){
    if (this.value == ''){
        alert('El campo contraseña no puede estar vacio');
    }else if (this.value.length < 8){
        alert('La contraseña debe ser mayor a 8 caracteres')
    }
}
campoRepetirContraseña.onblur = function(){
    if (this.value == ''){
        alert('El campo repetir contraseña no puede estar vacio');
    }else if(this.value !== campoContraseña ){
        alert('Las contraseñas deben coincidir')
    }
}





//--------------- ENVIO DE DATOS -------------//

Formulario.onsubmit = function(event){
    if(campoNombre.value.trim() == ''){
        alert ('El campo nombre es obligatorio');
        event.preventDefault();
    }
}
Formulario.onsubmit = function(event){
    if(campoEmail.value.trim() == ''){
        alert ('El campo email es obligatorio');
        event.preventDefault();
    }
}
Formulario.onsubmit = function(event){
    if(campoEdad.value.trim() == ''){
        alert ('El campo edad es obligatorio');
        event.preventDefault();
    }
}
Formulario.onsubmit = function(event){
    if(campoApellidos.value.trim() == ''){
        alert ('El campo apellidos es obligatorio');
        event.preventDefault();
    }
}
Formulario.onsubmit = function(event){
    if(campoContraseña.value.trim() == ''){
        alert ('El campo contraseña es obligatorio');
        event.preventDefault();
    }
}
Formulario.onsubmit = function(event){
    if(campoRepetirContraseña.value.trim() == ''){
        alert ('El campo repetir contraseña es obligatorio');
        event.preventDefault();
    }
}
