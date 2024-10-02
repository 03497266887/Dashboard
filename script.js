let navbar = document.querySelector(".navbar")
let nav_logo_to_projects_main = document.querySelector(".nav-logo-to-projects-main")
let nav_logo_and_leftbar_icon = document.querySelector(".nav-logo-and-leftbar-icon")
let nav_leftbar_icon = document.querySelector("#nav-leftbar-icon")
let main = document.querySelector(".main")
let left_main_bar = document.querySelector(".left-main-bar")
let center_main_content = document.querySelector(".center-main-content")
let left_icon_bar = document.querySelector(".left-icon-bar")
let nav_leftbar_crossicon = document.querySelector("#nav-leftbar-crossicon")
let nav_logo = document.querySelector(".nav-logo")
let nav_search_icon_to_projects = document.querySelector(".nav-search-icon-to-projects")
let nav_search_box = document.querySelector(".nav-search-box")
let nav_search_icon_box = document.querySelector(".nav-search-icon-box")
let nav_search_icon_cross = document.querySelector("#nav-search-icon-cross")
let mega_menu_to_projects = document.querySelector(".mega-menu-to-projects")
let nav_search_input = document.querySelector(".nav-search-input")
let nav_mega_menu = document.querySelector(".nav-mega-menu")
let nav_setting = document.querySelector(".nav-setting")
let nav_projects = document.querySelector(".nav-projects")
let nav_setting_open = document.querySelector(".nav-setting-open")
let nav_projects_open = document.querySelector(".nav-projects-open")
let nav_mega_menu_open = document.querySelector(".nav-mega-menu-open")

let nav_rigth_icons_grid_box = document.querySelector(".nav-rigth-icons-grid-box")
let nav_rigth_icons_notifications_box = document.querySelector(".nav-rigth-icons-notifications-box")
let nav_rigth_icons_choseLanguage = document.querySelector(".nav-rigth-icons-choseLanguage")
let nav_rigth_icons_userOnline = document.querySelector(".nav-rigth-icons-userOnline")

let nav_right_grid_open = document.querySelector(".nav-right-grid-open")
let nav_right_notification_open = document.querySelector(".nav-right-notification-open")
let nav_right_language_open = document.querySelector(".nav-right-language-open")
let nav_right_userOnline_open = document.querySelector(".nav-right-userOnline-open")

let nav_right_alina_profile = document.querySelector(".nav-right-alina-profile")
let nav_right_alina_open = document.querySelector(".nav-right-alina-open")

let nav_right_toastr = document.querySelector("#nav-right-toastr")
var nav_toastr_div_created = document.querySelector(".nav-toastr-div-created")

let nav_right_bar_icon = document.querySelector("#nav-right-bar-icon")
let right_main_bar = document.querySelector(".right-main-bar")
let right_main_bar_cross = document.querySelector("#right-main-bar-cross")

let right_bar_layout_main = document.querySelector(".right-bar-layout-main")
let right_bar_layout_btn_setting = document.querySelector(".right-bar-layout-btn-setting")


let layout_option_inner = document.querySelector(".layout-option-inner")
let fixed_right_sidebar_inner = document.querySelector(".fixed-right-sidebar-inner")


let footer_main = document.querySelector(".footer-main")
let fixed_footer_inner = document.querySelector(".fixed-footer-inner")

let header_option_circle = document.querySelectorAll(".header-option-circle")

let sidebar_option_circle = document.querySelectorAll(".sidebar-option-circle")

let menu_dashboards = document.querySelector(".menu-dashboards")
let menu_dashboards_head = document.querySelector(".menu-dashboards-head")
let menu_dashboards_arrow = document.querySelector(".menu-dashboards-arrow")

let menu_page = document.querySelector(".menu-page")
let menu_page_head = document.querySelector(".menu-page-head")
let menu_page_arrow = document.querySelector(".menu-page-arrow")


let menu_applications = document.querySelector(".menu-applications")
let menu_applications_arrow = document.querySelector(".menu-applications-arrow")

let ui_component = document.querySelectorAll(".ui-component-head")

let footer_volume_icon = document.querySelector("#footer-volume-icon")
let footer_volume_dropdown = document.querySelector(".footer-volume-dropdown")

let footer_earth_icon = document.querySelector("#footer-earth-icon")
let footer_earth_dropdown = document.querySelector(".footer-earth-dropdown")

let footer_chimney_icon = document.querySelector("#footer-chimney-icon")
let footer_chimney_dropdown = document.querySelector(".footer-chimney-dropdown")


let dashboard_inner_right_btn = document.querySelector(".dashboard-inner-right-btn")
let dashboard_inner_right_btn_dropdown = document.querySelector(".dashboard-inner-right-btn-dropdown")

let technical_timeline_main_all_slide = document.querySelector(".technical-timeline-main-all-slide")
let technical_timeline_main_all_images = document.querySelectorAll(".technical-timeline-main-all-slide img")
let technical_timeline_left_arrow = document.querySelector(".technical-timeline-left-arrow")
let technical_timeline_right_arrow = document.querySelector(".technical-timeline-right-arrow")

let technical_timeline_dot = document.querySelectorAll(".technical-timeline-dot")


let easy_dynmic_tables_main_content = document.querySelector(".easy-dynmic-tables-main-content")
let table_target_buttons = document.querySelector(".table_target_buttons")

let pagesLengthButton = document.querySelector("#pagesLengthButton")


let easy_dynmic_tables_search = document.querySelector(".easy-dynmic-tables-search")
const data = [
    {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 1,
        price: 162700
    },
    {
        name: "Asghar",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 2,
        price: 162700
    },
    {
        name: "usman",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 3,
        price: 162700
    },
    {
        name: "umer",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 4,
        price: 162700
    },
    {
        name: "ahmad",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 5,
        price: 162700
    },
    {
        name: "afnan",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 6,
        price: 162700
    },
    {
        name: "header",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 7,
        price: 162700
    },
    {
        name: "safdar",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 8,
        price: 162700
    },
    {
        name: "ali raza",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 9,
        price: 162700
    },
    {
        name: "fuky",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 10,
        price: 162700
    },
    {
        name: "zain",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 11,
        price: 162700
    },
    {
        name: "human",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 12,
        price: 162700
    },
    {
        name: "harry",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: 13,
        price: 162700
    },
    {
        name: "boby",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "malik ",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "doger",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "garry",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "harry",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Faiz",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Sid",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Imran",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Frahat",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "amir",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Mohsin",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "hassan",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Ahsan",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Sageer",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Fareed",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Hamid",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
    {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: 20,
        date: "2008/11/28",
        price: 162700
    },
]


let reference_entry = document.querySelector(".reference_entry")

var globalPageValue = 5

pagesLengthButton.addEventListener("change", function(e){
    var value = e.target.value
    globalPageValue = value
    buttonsUI(data.length/value)
    showDataList(0, value, data)
    reference_entry_function()
})

var startIndex = 0;
var lastIndex = 5;



function reference_entry_function () {
    reference_entry.innerHTML = `Showing ${startIndex} to ${lastIndex} of ${data.length} entries`
}

reference_entry_function()

// search method

easy_dynmic_tables_search.addEventListener("input", function(e){
    var value = e.target.value
    var filteredArray = data.filter((e, i) => {
        return e.name.includes(value)

    })

    showDataList(startIndex, lastIndex, filteredArray)
    reference_entry_function()
    
})

// buttons slesected 1 to 30 method

var buttonsLength = data.length/5

buttonsUI(buttonsLength)






function buttonsUI(buttonsLength){
    table_target_buttons.innerHTML = ""
    for(var i=0;i<buttonsLength; i++){
        // console.log(i);
        var table_button = document.createElement("button");
        table_button.innerHTML= i+1
        table_target_buttons.appendChild(table_button)
        table_button.addEventListener("click", function(){
            startIndex = this.innerHTML*globalPageValue-globalPageValue
            lastIndex = this.innerHTML*globalPageValue
            // console.log(startIndex, lastIndex);
            showDataList(startIndex, lastIndex, data)
            reference_entry_function()
        })
    }
}

// 1    -- > 1 - 5
// 2    -- > 5 - 10
// 3    -- > 10 - 15
// 4    -- > 15 - 20


// num*5-5   -> start
// num*5    -> end


// console.log(data);

// right mini buttons ckick to slected data in list : method

showDataList(startIndex, lastIndex, data)


function showDataList(startIndex, endIndex, data) {
    var newArr = data.slice(startIndex, endIndex)
    easy_dynmic_tables_main_content.innerHTML = ""
    newArr.map((e, i) => {
        var listItem = document.createElement("div")
        listItem.classList.add("listItem")
        listItem.innerHTML = `
             <div class="itemContent itemContent1">${e.name}</div>
             <div class="itemContent itemContent2">${e.position}</div>
             <div class="itemContent itemContent3">${e.office}</div>
             <div class="itemContent itemContent4">${e.age}</div>
             <div class="itemContent itemContent5">${e.date}</div>
             <div class="itemContent itemContent6">${e.salary}</div>
        `;
        easy_dynmic_tables_main_content.appendChild(listItem)
    })
}




var index = 0

technical_timeline_left_arrow.addEventListener("click", function () {
    index--

    if (index < 0) {
        index = technical_timeline_main_all_images.length - 1;
    }
    console.log(index);
    technical_timeline_main_all_slide.style.marginLeft = index * -100 + "%"

    technical_timeline_dot.forEach((e, i) => {
        e.classList.remove("technical-timeline-dot-active")
    })
    technical_timeline_dot[index].classList.add("technical-timeline-dot-active")

})

technical_timeline_right_arrow.addEventListener("click", function () {
    index++

    if (index > technical_timeline_main_all_images.length - 1) {

        index = 0
    }
    console.log(index);

    technical_timeline_main_all_slide.style.marginLeft = index * -100 + "%"
    technical_timeline_dot.forEach((e, i) => {
        e.classList.remove("technical-timeline-dot-active")
    })
    technical_timeline_dot[index].classList.add("technical-timeline-dot-active")

})






dashboard_inner_right_btn.addEventListener("click", function () {
    if (dashboard_inner_right_btn_dropdown.style.display === "block") {
        dashboard_inner_right_btn_dropdown.style.display = "none"
    }
    else {
        dashboard_inner_right_btn_dropdown.style.display = "block"
    }

})

footer_chimney_icon.addEventListener("click", function () {
    if (footer_chimney_dropdown.style.display === "block") {
        footer_chimney_dropdown.style.display = "none"
    }
    else {
        footer_chimney_dropdown.style.display = "block"
    }
})

footer_earth_icon.addEventListener("click", function () {
    if (footer_earth_dropdown.style.display === "block") {
        footer_earth_dropdown.style.display = "none"
    }
    else {
        footer_earth_dropdown.style.display = "block"

    }

})


footer_volume_icon.addEventListener("click", function () {
    if (footer_volume_dropdown.style.display === "block") {
        footer_volume_dropdown.style.display = "none"



    } else {

        footer_volume_dropdown.style.display = "Block"
    }

})


ui_component.forEach((e, i) => {
    e.addEventListener("click", function () {
        var icon = this.querySelector(".ui-component-arrow")
        var selected_head_parent = this.parentElement
        if (selected_head_parent.style.height == "50px") {
            selected_head_parent.style.height = "max-content"
            icon.style.transform = "rotate(180deg)"
        }
        else {
            selected_head_parent.style.height = "50px"
            icon.style.transform = "rotate(0deg)"
        }
    })
})



menu_applications.addEventListener("click", function () {
    if (menu_applications.style.height === "50px") {
        menu_applications.style.height = "max-content"
        menu_applications_arrow.style.transform = "rotate(180deg)";



    } else {
        menu_applications.style.height = "50px"
        menu_applications_arrow.style.transform = "rotate(0deg)";

    }

})

menu_page.addEventListener("click", function () {
    if (menu_page.style.height === "50px") {
        menu_page.style.height = "max-content"
        menu_page_arrow.style.transform = "rotate(180deg)";

    }
    else {
        menu_page.style.height = "50px"
        menu_page_arrow.style.transform = "rotate(0deg)";

    }
    //  console.log(menu_page);
})




menu_dashboards.addEventListener("click", function () {
    if (menu_dashboards.style.height === "50px") {
        menu_dashboards.style.height = "max-content"
        menu_dashboards_head.style.fontWeight = 'bold';
        menu_dashboards_arrow.style.transform = "rotate(180deg)";

    } else {
        menu_dashboards.style.height = "50px"
        menu_dashboards_arrow.style.transform = "rotate(0deg)";

    }



})




sidebar_option_circle.forEach((e, i) => {
    e.addEventListener("click", function () {
        console.log(this);
        var bgsidebar = window.getComputedStyle(this).background
        left_main_bar.style.background = bgsidebar

    })

})


header_option_circle.forEach((e, i) => {
    e.addEventListener("click", function () {
        // console.log(this);
        var bgColor = window.getComputedStyle(this).background
        navbar.style.background = bgColor

    })
})



fixed_footer_inner.addEventListener("click", function () {
    if (fixed_footer_inner.style.marginLeft === "0px") {
        fixed_footer_inner.style.marginLeft = "-40px"
        footer_main.style.position = "relative"
        footer_main.style.marginLeft = "20%"


    }
    else {
        fixed_footer_inner.style.marginLeft = "0px"
        footer_main.style.position = "fixed"
        footer_main.style.marginLeft = "0%"



    }



})



fixed_right_sidebar_inner.addEventListener("click", function () {

    if (fixed_right_sidebar_inner.style.marginLeft === "0px") {
        fixed_right_sidebar_inner.style.marginLeft = "-40px"
        left_main_bar.style.position = "relative"
        center_main_content.style.marginLeft = "0%"


    }
    else {
        fixed_right_sidebar_inner.style.marginLeft = "0px"
        left_main_bar.style.position = "fixed"
        center_main_content.style.marginLeft = "20%"




    }

})

layout_option_inner.addEventListener("click", function () {

    if (layout_option_inner.style.marginLeft == "0px") {
        layout_option_inner.style.marginLeft = "-40px"
        navbar.style.position = "relative"

    } else {
        layout_option_inner.style.marginLeft = "0px"
        navbar.style.position = "fixed"
    }
})



right_bar_layout_btn_setting.addEventListener("click", function () {


    if (right_bar_layout_main.style.right == "0px") {
        right_bar_layout_main.style.right = "-30%"
        right_bar_layout_btn_setting.style.right = "50px"


    }
    else {
        right_bar_layout_main.style.right = "0px"
        right_bar_layout_btn_setting.style.right = "35%"
    }




})




right_main_bar_cross.addEventListener("click", function () {
    right_main_bar.style.right = "-30%"
})


nav_right_bar_icon.addEventListener("click", function () {
    right_main_bar.style.right = "0%"
})

nav_right_toastr.addEventListener("click", function () {
    var toast_notification = document.createElement("div");
    toast_notification.classList.add("toast-notification");

    toast_notification.innerHTML = `


            <div class="toast-notification-icon">icon</div>
            <div class="toast-notification-text">text</div>
            <div class = "toast-notification-animation"></div>

    `

    nav_toastr_div_created.appendChild(toast_notification)



    setTimeout(() => {
        toast_notification.remove()
    }, 3000)
})




nav_right_alina_profile.addEventListener("click", function () {
    if (nav_right_alina_open.style.display === "block") {
        nav_right_alina_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_right_alina_open.style.display = "block"
    }

})

nav_rigth_icons_grid_box.addEventListener("click", function () {
    if (nav_right_grid_open.style.display === "block") {
        nav_right_grid_open.style.display = "none"
    }
    
    else {
        nav_closeall_dropdown()
        nav_right_grid_open.style.display = "block"
    }


})

nav_rigth_icons_notifications_box.addEventListener("click", function () {
    if (nav_right_notification_open.style.display === "block") {
        nav_right_notification_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_right_notification_open.style.display = "block"
    }


})

nav_rigth_icons_choseLanguage.addEventListener("click", function () {
    if (nav_right_language_open.style.display === "block") {
        nav_right_language_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_right_language_open.style.display = "block"
    }


})

nav_rigth_icons_userOnline.addEventListener("click", function () {
    if (nav_right_userOnline_open.style.display === "block") {
        nav_right_userOnline_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_right_userOnline_open.style.display = "block"
    }


})

nav_mega_menu.addEventListener("click", function () {
    if (nav_mega_menu_open.style.display === "block") {
        nav_mega_menu_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_mega_menu_open.style.display = "block"

    }
})
nav_projects.addEventListener("click", function () {
    if (nav_projects_open.style.display === "block") {
        nav_projects_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_projects_open.style.display = "block"
    }
})


nav_setting.addEventListener("click", function () {
    if (nav_setting_open.style.display === "block") {

        nav_setting_open.style.display = "none"
    }
    else {
        nav_closeall_dropdown()
        nav_setting_open.style.display = "block"
    }


})



function nav_closeall_dropdown() {
    nav_mega_menu_open.style.display = "none"
    nav_projects_open.style.display = "none"
    nav_setting_open.style.display = "none"

    nav_right_grid_open.style.display = "none"
    nav_right_notification_open.style.display = "none"
    nav_right_language_open.style.display = "none"
    nav_right_userOnline_open.style.display = "none"

    nav_right_alina_open.style.display = "none"




}



nav_leftbar_icon.addEventListener("click", function () {
    left_main_bar.style.marginLeft = "-20%"
    center_main_content.style.marginLeft = "5%"
    center_main_content.style.width = "95%"
    left_icon_bar.style.left = "0"
    footer_main.style.width = "95%"

    nav_leftbar_crossicon.style.display = "block"
    nav_logo.style.display = "none"
    nav_leftbar_icon.style.display = "none"
    nav_logo_and_leftbar_icon.style.width = "10%"

})
nav_leftbar_crossicon.addEventListener("click", function () {
    left_main_bar.style.marginLeft = "0"
    center_main_content.style.marginLeft = "20%"
    center_main_content.style.width = "80%"
    left_icon_bar.style.left = "-20%"
    footer_main.style.width = "80%"


    nav_leftbar_crossicon.style.display = "none"
    nav_logo.style.display = "block"
    nav_leftbar_icon.style.display = "block"
    nav_logo_and_leftbar_icon.style.width = "50%"


})
nav_search_icon_box.addEventListener("click", function () {
    nav_search_box.style.width = "300px"
    mega_menu_to_projects.style.display = "none"
    nav_search_input.style.width = "300px"
    nav_search_icon_box.style.left = "250px"
    // nav_search_icon_cross.style.left ="320px"
    nav_search_icon_cross.classList.add("nav_search_icon_cross_animation")

    nav_search_icon_cross.style.display = "block"
    // nav_search_icon_to_projects.style.display = "block"
    nav_search_icon_to_projects.style.justifyContent = "flex-start"


})
nav_search_icon_cross.addEventListener("click", function () {
    nav_search_box.style.width = "50px"
    mega_menu_to_projects.style.display = "block"
    nav_search_input.style.width = "50px"
    nav_search_icon_box.style.left = "0"
    nav_search_icon_cross.style.display = "none"
    mega_menu_to_projects.style.display = "flex"
    nav_search_icon_to_projects.style.justifyContent = "space-around"




})