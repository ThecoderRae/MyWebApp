var pages = {
    "home": "Welcome to Raesibe's Company. \
             This is our home page!<br/><br/><img src='lion.jpg' style='width:500px;'>",
    "about-us": "This is our About Us page<br/><br/><img src='lion2.jpg' style='width:500px;'>",
    "services": "This is our Services page<br/><br/><img src='lion3.jpg' style='width:500px;'>",
    "contact": "This is our contact page<br/><br/><img src='lion4.jpg' style='width:500px;'>"
};

function getPageContent(page) {
    var contentToReturn = pages[page] || pages["home"];
    document.getElementById("content").innerHTML = contentToReturn;
}

// Set the initial page content
getPageContent('home');
