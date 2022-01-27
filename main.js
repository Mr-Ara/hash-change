addEventListener("hashchange",e=>{
router()
})

function router(){
    switch(location.hash){
        case "":
            render({title : "HOME" , color : "red" , href : "#home"})
            break;
        
        case "#home":
            render({title : "HOME" , color : "red" , href : "#home"})
            break;
        
        case "#like" :
                render({title : "Like" , color : "yellow" , href : "#like"})
            break;

        case "#profile" :
                render({title : "Profile" , color : "pink" , href : "#profile"})
            break;

        case "#search" :
                render({title : "Search" , color : "#444" , href : "#search"})
            break;
    }
}

function render(data){
    document.querySelector("h1").innerText = data.title
    document.querySelector("main").style.backgroundColor = data.color
    document.querySelectorAll("a").forEach(element=>{
        if (element.href.includes(data.href)) {
           element.style.color = "black"
        }
        else{
            element.style.color = "#666"
        }
    })
}