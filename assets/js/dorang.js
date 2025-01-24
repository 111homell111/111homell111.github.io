/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// toggle 
$(document).ready(function(){

    // Toggle search bar
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    // Toggle modal
    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    });

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    // Toggle theme selector
    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });

    // Light theme
    $('.light').click(function() {
        $('body').attr('data-bs-theme', 'light'); // Set Bootstrap theme
        $('body').addClass('light-theme').removeClass('dark-theme'); // Optional: Keep your custom classes
    });

    // Dark theme
    $('.dark').click(function() {
        $('body').attr('data-bs-theme', 'dark'); // Set Bootstrap theme
        $('body').addClass('dark-theme').removeClass('light-theme'); // Optional: Keep your custom classes
    });

    // Navbar hide/show on scroll
    let lastScrollTop = 0; // Track the last scroll position
    const navbar = document.querySelector(".navbar"); // Select the navbar

    if (navbar) {
        window.addEventListener("scroll", function() {
            const currentScrollTop = window.scrollY;

            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                // Scrolling down and past 100px: hide navbar
                navbar.style.transform = "translateY(-100%)";
            } else if (currentScrollTop < lastScrollTop || currentScrollTop <= 100) {
                // Scrolling up or back to the top: show navbar
                navbar.style.transform = "translateY(0)";
            }

            lastScrollTop = currentScrollTop; // Update the last scroll position
        });
    }
});

// Smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            //console.log("Offset:",  $(hash).offset().top);

            $('html, body').animate({
                scrollTop: $(hash).offset().top -50
            }, 90, function(){
                $('html, body').scrollTop($(hash).offset().top - 50);
                window.location.hash = hash;
            });
        } 
    });
});

//Custom
window.onload = function() {
    let loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log("Page Load Time: " + loadTime + "ms");
};
