


// //Blog Section Read More Buttons 

const buttons = document.querySelectorAll(".blog_button");

buttons.forEach((el)=>{
        el.addEventListener("click", ()=>{
            window.location.pathname=`Blogs/Blog${el.id}.html`
        } );
    }   
)


//Navbar Pages Dropdown

const dropdownItem = document.querySelectorAll(".dropdown-item");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownItem.forEach((el)=>{
    el.addEventListener("click", function () {
        dropdownMenu.style.display="none" ;
      });
      
})


 