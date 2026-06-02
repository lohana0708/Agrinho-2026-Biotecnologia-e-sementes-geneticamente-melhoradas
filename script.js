// Modo escuro

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// Quiz

function resposta(tipo){

const resultado =
document.getElementById("resultado");

if(tipo === "certo"){
resultado.innerHTML =
"✅ Correto! O CRISPR é a principal tecnologia de edição genética.";
resultado.style.color="green";
}
else{
resultado.innerHTML =
"❌ Resposta incorreta.";
resultado.style.color="red";
}

}

// FAQ

const faqBtns =
document.querySelectorAll(".faq-btn");

faqBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const content =
btn.nextElementSibling;

if(content.style.display==="block"){
content.style.display="none";
}else{
content.style.display="block";
}

});

});

// Gráfico

const ctx =
document.getElementById("grafico");

new Chart(ctx,{
type:"bar",
data:{
labels:[
"Produtividade",
"Resistência",
"Nutrição",
"Sustentabilidade"
],
datasets:[{
label:"Impacto (%)",
data:[95,90,75,88],
backgroundColor:[
"#2ecc71",
"#27ae60",
"#16a085",
"#1abc9c"
]
}]
},
options:{
responsive:true
}
});
