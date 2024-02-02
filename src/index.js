let inputDeTexto = document.querySelectorAll(".input")
const botao = document.querySelector(".botao-enviar")

inputDeTexto.forEach(input => {


    
    input.addEventListener('change', () => {
        
        if (input.value !== "") {
            input.classList.add("campo-preenchido")	
        } else {				
            input.classList.remove("campo-preenchido")
        }
    });
    
    botao.addEventListener("click", function (){
        const mensagem = input.nextElementSibling;

        if (input.value === ""){
            input.classList.add("ativo")
            mensagem.classList.add("mostrar")
        } else {
             input.classList.remove("ativo")
             mensagem.classList.remove("mostrar")
        }  
    
    });
    
});








