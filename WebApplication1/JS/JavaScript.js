
$(function () {
    $(window).on('load', function () {
        $('.preloader').addClass('complete')
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll > 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    var imageUrls = [
        "../Assist/Imges/hareth img.png",
        "../Assist/Imges/alharithimg2-removebg-preview.png",
        "../Assist/Imges/alharithimg3-removebg-preview.png"
    ];

    var currentImageIndex = 0;
    var imageElement = document.querySelector(".custom-header-content img");

    function changeImage() {
        imageElement.src = imageUrls[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    }

    setInterval(changeImage, 3000);

    function validateForm() {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var subjectInput = document.getElementById("subject");
        var messageInput = document.getElementById("message");
        var successMessage = document.getElementById("success-message");

        if (
            nameInput.value === "" ||
            emailInput.value === "" ||
            subjectInput.value === "" ||
            messageInput.value === ""
        ) {
            alert("Please fill in all fields.");
            return false;
        }

        nameInput.addEventListener("input", function () {
            nameInput.style.color = "red";
        });
        emailInput.addEventListener("input", function () {
            emailInput.style.color = "red";
        });
        subjectInput.addEventListener("input", function () {
            subjectInput.style.color = "red";
        });
        messageInput.addEventListener("input", function () {
            messageInput.style.color = "red";
        });

        successMessage.textContent = "Form submitted successfully!";
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";

        return false;
    }

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        validateForm();
    });

  
    function changeImage(newImageSrc) {
        // Get the image element by its id
        var projectImage = document.getElementById("#projectImage");
        // Set the src attribute to the new image source
        projectImage.setAttribute("../Assist/Imges/istockphoto-1151872207-170667a.jpg", newImageSrc);
    }

    var typed = new Typed(".element", {
        strings: ["Front-End Developer", "Python Developer", "Application Developer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:95%;transition:1s all");
            p[1].setAttribute("style", "width:90%;transition:1.5s all");
            p[2].setAttribute("style", "width:90%;transition:1.7s all");
            p[3].setAttribute("style", "width:95%;transition:2s all");
            p[4].setAttribute("style", "width:85%;transition:2.3s all");
            p[5].setAttribute("style", "width:95%;transition:2.5s all");
        },
        offset: '40%'
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: false,
        singleItem: true
    });
});