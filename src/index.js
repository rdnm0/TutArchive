
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

