
const nombre = document.querySelector("#nombre");
const emial = document.querySelector("#emial");
const textarea = document.querySelector("#textarea");
const formulario = document.querySelector(".form__container");

const datos = {
    nombre:'',
    emial:'',
    textarea:''
}

nombre.addEventListener('input', leerTexto);
emial.addEventListener('input', leerTexto);
textarea.addEventListener('input', leerTexto);

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    const {nombre, emial, textarea} =  datos;
    if(nombre === '' || emial === '' || textarea === ''){
        verify("Todos los campos son obligatorios.", true);
        return;
    } 
    verify("Sus datos se enviarón correctamente");
    
    datos.nombre = '';
    datos.emial = '';
    datos.textarea = '';
    console.log(datos);
});

function verify(texto, error = null){
    const mensaje = document.createElement('P')
    mensaje.textContent = texto;

    if(error){
        mensaje.classList.add('mistake');
    }else{
        mensaje.classList.add('correct');
    }
    formulario.appendChild(mensaje);
    clean();

    setTimeout(() => {
        mensaje.remove();
    },5000);
}

function clean (){
    nombre.value = '';
    nombre.textContent = '';

    emial.value = '';
    emial.textContent = '';

    textarea.value = '';
    textarea.textContent = '';
}

