function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


window.addEventListener('resize',()=>{
    
    const sidebar = document.querySelector('.sidebar');

    if (window.innerWidth>500){
        sidebar.style.display='none'; //Automatically hide the sidebar
    }
})


const skillSection = document.getElementById('skills')
const skillLink = document.querySelector("a[href='#skills']")

skillLink.addEventListener('click',(event)=>{
    event.preventDefault();
    skillSection.scrollIntoView({behavior:'smooth', block:'start' })
})

const projectSection = document.getElementById('projects');
const projectLink = document.querySelector("a[href='#projects']");

projectLink.addEventListener('click', (event) => {
    event.preventDefault();
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


const contactSection = document.getElementById('contact');
const contactLink = document.querySelector('a[href="#contact"]');

contactLink.addEventListener('click',(event)=>{
    event.preventDefault();
    contactSection.scrollIntoView({behavior:'smooth', block: 'end' })
})
/* 


*/