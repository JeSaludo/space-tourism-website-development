let navList = document.querySelector("#nav-list");

let activePage = window.location.pathname;

console.log(activePage);
let navLink = navList.querySelectorAll("a").forEach(link  => {
        if(link.href.includes(`${activePage}`)){
            link.classList.add("active");
        }
    }); 