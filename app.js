//Esto te devuelve al principio
//window.scrollTo(0,0)


//metodo que observa si esta a la vista las clases hidden
//que en si decide si se muestra o no lo que traiga pegado este atributo
const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));