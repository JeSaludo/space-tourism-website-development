let navList = document.querySelector("#nav-list");

let activePage = window.location.pathname;


let navLink = navList.querySelectorAll("a").forEach(link  => {
        if(link.href.includes(`${activePage}`)){
            link.classList.add("active");
        }

 
}); 

let destinationList = document.querySelector("#destination-nav");




let destinationNavLink = destinationList.querySelectorAll("a").forEach(link  => {
   
    if(link.href.includes(`${activePage}`)){
                
            link.classList.add("active");
        }

 
}); 


    