const tabs = document.querySelectorAll(".tab-title");
const new_tabs_content = document.querySelector(".dynamic-tabs-content")
tabs.forEach((tab, index) => {
  if(index == 0){
    new_tabs_content.innerHTML = tab.nextElementSibling.innerHTML;
    tab.classList.add("active")
  }
  tab.addEventListener("click", () => {
     tabs.forEach((tab) => {
      tab.classList.remove("active");
     })
    tab.classList.add("active");
    new_tabs_content.innerHTML = tab.nextElementSibling.innerHTML;
  });
})


const dropdown_menu_list = document.querySelector(".dropdown-menu ul");
const dropdown_menu_header = document.querySelector(".dropdown-menu__header");
const dropdown_menu_items = document.querySelectorAll(".dropdown-menu ul li");
const tabs_contents = document.querySelectorAll(".tab-content");

dropdown_menu_header.addEventListener("click", () => {
  dropdown_menu_list.classList.toggle("open");
})

// Handles changing the content on the dropdown menu
dropdown_menu_items.forEach((menu, menuIndex) => {
  menu.addEventListener("click", () => {
    tabs_contents.forEach((content) => {
      if(menuIndex + 1 == content.dataset.tab){
        new_tabs_content.innerHTML = content.innerHTML;
        dropdown_menu_header.querySelector("span").innerHTML = content.querySelector(".tab-content__title").innerHTML
      }
    })    
  })

})

document.addEventListener('click', function(event) {
  const dropdownMenu = document.querySelector('.dropdown-menu');
    if (!dropdownMenu.contains(event.target)) {
      dropdown_menu_list.classList.remove("open");
    }
});