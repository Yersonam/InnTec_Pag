document.getElementById("btn_registrarse").addEventListener("click", registro);
document.getElementById("btn_iniciarsesión").addEventListener("click", login);
const abrirModal = document.querySelector(".nav__items--cta");
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".modal_close");
const cerrarModal2 = document.querySelector(".modal_close2");
var contiene_login_registro = document.querySelector(".micuenta_login_modal");
var formulario_login = document.querySelector(".formulario_login_modal");
var formulario_registro = document.querySelector(".formulario_registro_modal");
var cajalogin = document.querySelector(".cajatrasera_login_modal");
var cajaregistro = document.querySelector(".cajatrasera_registro_modal");

abrirModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
})
cerrarModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
})
cerrarModal2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
})

function registro(){
    formulario_registro.style.display='block';
    contiene_login_registro.style.left = '410px';
    formulario_login.style.display = 'none';
    cajaregistro.style.opacity = '0';
    cajalogin.style.opacity = '1';
}
function login(){
    formulario_registro.style.display='none';
    contiene_login_registro.style.left = '10px';
    formulario_login.style.display = 'block';
    cajaregistro.style.opacity = '1';
    cajalogin.style.opacity = '0';
}


