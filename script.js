/* ======================================
   DIGITAÇÃO NO TÍTULO
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const titulo = document.querySelector(".hero h1");

    if (titulo) {

        const texto = titulo.innerText;

        titulo.innerHTML = "";

        let i = 0;

        function escrever() {

            if (i < texto.length) {

                titulo.innerHTML += texto.charAt(i);

                i++;

                setTimeout(escrever, 70);

            }

        }

        escrever();

    }

});

/* ======================================
   SCROLL REVEAL
====================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = ".8s";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    observer.observe(card);

});

/* ======================================
   ANIMAÇÃO DAS HABILIDADES
====================================== */

const barras = document.querySelectorAll(".progresso");

const skillsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const largura = entry.target.style.width;

            entry.target.style.width="0";

            setTimeout(()=>{

                entry.target.style.width=largura;

            },200);

        }

    });

},{threshold:0.4});

barras.forEach(bar=>{

    skillsObserver.observe(bar);

});

/* ======================================
   NAVBAR
====================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.style.background="rgba(10,10,15,.95)";
        nav.style.boxShadow="0 10px 25px rgba(0,0,0,.5)";

    }else{

        nav.style.background="rgba(15,15,20,.65)";
        nav.style.boxShadow="none";

    }

});

/* ======================================
   BOTÃO TOPO
====================================== */

const topo=document.createElement("button");

topo.innerHTML="↑";

topo.id="topo";

document.body.appendChild(topo);

topo.style.position="fixed";
topo.style.right="30px";
topo.style.bottom="30px";
topo.style.width="55px";
topo.style.height="55px";
topo.style.borderRadius="50%";
topo.style.border="none";
topo.style.cursor="pointer";
topo.style.background="#7C3AED";
topo.style.color="#fff";
topo.style.fontSize="24px";
topo.style.display="none";
topo.style.zIndex="999";
topo.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topo.style.display="block";

    }else{

        topo.style.display="none";

    }

});

topo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ======================================
   MENU ATIVO
====================================== */

const secoes=document.querySelectorAll("section[id]");

const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let atual="";

    secoes.forEach(sec=>{

        const topo=sec.offsetTop-150;

        if(scrollY>=topo){

            atual=sec.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.style.color="#fff";

        if(link.getAttribute("href")==="#"+atual){

            link.style.color="#FACC15";

        }

    });

});

/* ======================================
   PARTÍCULAS
====================================== */

const fundo=document.getElementById("particles");

for(let i=0;i<70;i++){

    const p=document.createElement("span");

    const size=Math.random()*4+2;

    p.style.position="absolute";
    p.style.width=size+"px";
    p.style.height=size+"px";
    p.style.borderRadius="50%";
    p.style.background=Math.random()>0.5?"#7C3AED":"#FACC15";
    p.style.left=Math.random()*100+"%";
    p.style.top=Math.random()*100+"%";
    p.style.opacity=Math.random();

    p.animate([

        {transform:"translateY(0px)"},
        {transform:"translateY(-120px)"}

    ],{

        duration:4000+Math.random()*6000,
        iterations:Infinity,
        direction:"alternate"

    });

    fundo.appendChild(p);

}

/* ======================================
   HOVER NOS BOTÕES
====================================== */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/* ======================================
   RELÓGIO NO RODAPÉ (opcional)
====================================== */

const footer=document.querySelector("footer");

if(footer){

    const hora=document.createElement("p");

    hora.style.marginTop="10px";
    hora.style.fontSize="13px";
    hora.style.color="#888";

    footer.appendChild(hora);

    setInterval(()=>{

        const agora=new Date();

        hora.innerHTML=agora.toLocaleString("pt-BR");

    },1000);

}