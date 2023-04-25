$(document).ready(function () {
    // Fade in the current page
    $("body").css("opacity", 0).animate({ opacity: 1 }, 500);

    // Fade out and load the target page when a navigation link is clicked
    $("nav a").on("click", function (event) {
        event.preventDefault();
        var targetUrl = $(this).attr("href");

        $("body").animate({ opacity: 0 }, 500, function () {
            window.location.href = targetUrl;
        });
    });
});
