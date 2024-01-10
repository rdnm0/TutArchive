function toggleRepoLink() {
    var repoLink = document.getElementById("repoLink");
    repoLink.style.display = (repoLink.style.display === "none" || repoLink.style.display === "") ? "block" : "none";
}
document.addEventListener('DOMContentLoaded', function () {
    var htmlButton = document.querySelector('.nav-button');

    htmlButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('transitioning');
        setTimeout(function () {
            window.location.href = 'hypertext.html';
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

    document.body.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'opacity') {
            document.body.classList.remove('wave-transition');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var htmlButton = document.querySelector('.nav-button');

    htmlButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('scale-transition');
        setTimeout(function () {
            window.location.href = 'hypertext.html';
        }, 1000);
    });

    document.body.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'opacity') {
            document.body.classList.remove('scale-transition');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var htmlButton = document.querySelector('.nav-button');

    htmlButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('color-transition');
        setTimeout(function () {
            window.location.href = 'hypertext.html';
        }, 1000);
    });

    document.body.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'opacity') {
            document.body.classList.remove('color-transition');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');

    function showSidebar() {
        if (window.scrollY > 50) {
            sidebar.classList.add('show');
        } else {
            sidebar.classList.remove('show');
        }
    }

    window.addEventListener('scroll', showSidebar);
});
