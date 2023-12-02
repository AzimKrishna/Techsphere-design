$(document).ready(function() {
    $('.project-card').hover(
        function() {
            // Mouse over
            $(this).find('.read-more').addClass('expanded');
            $(this).find('.arrow-up').addClass('rotated');
        },
        function() {
            // Mouse out
            $(this).find('.read-more').removeClass('expanded');
            $(this).find('.arrow-up').removeClass('rotated');
        }
    );

    const logoUrls = [
        'img/ara.svg',
        'img/ara.svg',
        'img/ara.svg',
        'img/ara.svg',
        'img/ara.svg'
    ];

    // Reference to the client-logos container
    const clientLogosContainer = $('.client-logos');

    // Generate logo-holder elements and append them to the container
    for (let i = 0; i < logoUrls.length; i++) {
        const logoHolder = $('<div>').addClass('logo-holder');
        const logoImg = $('<img>').attr('src', logoUrls[i]).attr('alt', `Logo ${i + 1}`);

        logoHolder.append(logoImg);
        clientLogosContainer.append(logoHolder);
    }

});

for (let i = 1; i <= 4; i++) {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            // Extract user data from the API response
            const user = data.results[0];

            // Select the card corresponding to the current iteration
            const card = $(`.testimonials-cards-holder .cards:nth-child(${i})`);
            const pfpHolder = card.find('.pfp-holder img');
            const nameElement = card.find('.name');
            const designationElement = card.find('.designation');
            const reviewElement = card.find('.review');

            // Fill in the content of the HTML elements with user data
            pfpHolder.attr('src', user.picture.large);
            nameElement.text(`${user.name.title} ${user.name.first} ${user.name.last}`);
            designationElement.text(`CEO, ${user.location.city}`);
            reviewElement.text(`HOP is an invaluable part of our team and process to forge products that exceed customer expectations. Highly recommended if you are lucky enough to find and engage this group.`);
        }
    });
}