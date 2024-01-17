document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.querySelector('.nav-button');

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('transitioning');
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 500);
    });

    document.body.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'opacity') {
            document.body.classList.remove('transitioning');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var htmlButton = document.querySelector('.nav-button');

    htmlButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('wave-transition');
        setTimeout(function () {
            window.location.href = 'hypertext.html';
        }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', function () {

});
document.addEventListener('DOMContentLoaded', function () {

});
document.addEventListener('DOMContentLoaded', function () {

});
document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.querySelector('.home-button');
    var htmlButton = document.querySelector('.html-button');

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('transitioning');
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 500);
    });

    htmlButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('wave-transition');
        setTimeout(function () {
            window.location.href = 'hypertext.html';
        }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', function () {

    var repoLink = document.getElementById('repoLink');

    function toggleRepoVisibility() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 100) {
            repoLink.classList.add('hidden');
        } else {
            repoLink.classList.remove('hidden');
        }
    }

    window.addEventListener('scroll', toggleRepoVisibility);

    toggleRepoVisibility();
});
document.addEventListener('DOMContentLoaded', function () {
    var placeholders = document.querySelectorAll('.placeholder');

    // Hide all placeholders initially
    placeholders.forEach(function (placeholder) {
        placeholder.style.display = 'none';
    });

    var sidebarButtons = document.querySelectorAll('.sidebar li');

    sidebarButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Hide all placeholders
            placeholders.forEach(function (placeholder) {
                placeholder.style.display = 'none';
            });

            // Show the corresponding placeholder
            placeholders[index].style.display = 'block';

            // Trigger a reflow before applying the transition class
            void placeholders[index].offsetWidth;

            // Add a class to apply the transition
            placeholders[index].classList.add('show-placeholder');
        });
    });
});
