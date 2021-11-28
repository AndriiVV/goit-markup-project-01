(() => {
  
  menuBtnRef1 = document.querySelector("[data-more-button-1]");
  mobileMenuRef1 = document.querySelector("[data-more-1]");
          
  menuBtnRef1.addEventListener("click", () => {
  mobileMenuRef1.classList.toggle("shown");
  })

  menuBtnRef2 = document.querySelector("[data-more-button-2]");
  mobileMenuRef2 = document.querySelector("[data-more-2]");
  
  menuBtnRef2.addEventListener("click", () => {
  mobileMenuRef2.classList.toggle("shown");
  })

  menuBtnRef3 = document.querySelector("[data-more-button-3]");
  mobileMenuRef3 = document.querySelector("[data-more-3]");
  
  menuBtnRef3.addEventListener("click", () => {
  mobileMenuRef3.classList.toggle("shown");
  })
}
)();