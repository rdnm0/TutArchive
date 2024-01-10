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
