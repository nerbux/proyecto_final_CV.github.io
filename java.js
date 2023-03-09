function elegirImagen(){
    document.getElementById('sel_img').click();
}

function cambiarImagen() {
    const contenedor_imagen = document.getElementById("contenedor_imagen");
    const archivo = document.getElementById("sel_img").files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load",() => {contenedor_imagen.src = reader.result;}, false);
  
    if (archivo) {
      reader.readAsDataURL(archivo);
    }
  }