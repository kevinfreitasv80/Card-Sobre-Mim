const html = document.querySelector("html");
const divs = document.querySelectorAll(".part3 nav div");
const descricao = document.getElementById("idDescr");
const sunMoon = document.getElementsByClassName("SunMoon")[0];
const copyText = document.getElementsByClassName("copyText")[0];
const textCopySucess = document.getElementsByClassName("textCopySucess")[0];
const textCopyNotSucess = document.getElementsByClassName("textCopyNotSucess")[0];

let ativo = false;
sunMoon.addEventListener("click", () => {
    if (ativo) {
        html.style.setProperty('--c1', '#2b2c2a');
        html.style.setProperty('--c2', '#131313');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.color = "white";
        }
        ativo = false;
    }else{
        html.style.setProperty('--c1', 'rgb(230, 225, 225)');
        html.style.setProperty('--c2', 'rgb(160, 157, 157)');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.color = "#131313";
        }
        ativo = true;
    }
});

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
typeWrite(descricao);

function elementsCopyText(h3) {
    switch (h3) {
        case textCopySucess:
            textCopySucess.style.display = "block"
            textCopyNotSucess.style.display = "none";
            break;
        case textCopyNotSucess:
            textCopySucess.style.display = "none"
            textCopyNotSucess.style.display = "block";    
            break;
    }
    copyText.style.opacity = "1";
    copyText.style.display = "block";
    setTimeout(() => {
        copyText.style.opacity = "0";
        copyText.style.display = "none";
    }, 1500);
}

function copiarTexto() {
    let textoCopiado = "Kevinho.freitas_5191";
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            elementsCopyText(textCopySucess);
        })
        .catch((error) => {;
            elementsCopyText(textCopyNotSucess);
        });
}