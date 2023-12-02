$(document).ready(function () {
  $(".project-card").hover(
    function () {
      // Mouse over
      $(this).find(".read-more").addClass("expanded");
      $(this).find(".arrow-up").addClass("rotated");
    },
    function () {
      // Mouse out
      $(this).find(".read-more").removeClass("expanded");
      $(this).find(".arrow-up").removeClass("rotated");
    }
  );

  const logoUrls = [
    "img/ara.svg",
    "img/ara.svg",
    "img/ara.svg",
    "img/ara.svg",
    "img/ara.svg",
  ];

  // Reference to the client-logos container
  const clientLogosContainer = $(".client-logos");

  // Generate logo-holder elements and append them to the container
  for (let i = 0; i < logoUrls.length; i++) {
    const logoHolder = $("<div>").addClass("logo-holder");
    const logoImg = $("<img>")
      .attr("src", logoUrls[i])
      .attr("alt", `Logo ${i + 1}`);

    logoHolder.append(logoImg);
    clientLogosContainer.append(logoHolder);
  }

  // Burger click event
  $('.burger').click(function () {
    // Toggle the 'v-class' id on the navbar
    $('.nav-links').attr('id', function (_, attr) {
      return attr === 'v-class' ? '' : 'v-class';
    });

    // Toggle the 'cross' class on the burger
    $('.burger').toggleClass('cross');
  });

  // Nav links click event
  $('nav .nav-links a').click(function () {
    // Remove the 'selected' class from all links
    $('nav .nav-links a').removeClass('selected');

    // Add the 'selected' class to the clicked link
    $(this).addClass('selected');

    // Close the side menu by removing the 'v-class' id
    $('.nav-links').removeAttr('id');

    // Restore the burger icon to its original state
    $('.burger').removeClass('cross');
  });

  // Cache the navigation links
  var navLinks = $("nav .nav-links a");

  // Function to update the selected class based on scroll position
  function updateSelected() {
    var scrollPosition = $(window).scrollTop();

    // Iterate through sections and update the selected class
    $("section").each(function () {
      var section = $(this);
      var sectionId = section.attr("id");

      if (
        scrollPosition >= section.offset().top &&
        scrollPosition < section.offset().top + section.outerHeight()
      ) {
        // Remove selected class from all links
        navLinks.removeClass("selected");

        // Add selected class to the corresponding link
        $('nav  .nav-links a[href="#' + sectionId + '"]').addClass("selected");
      }
    });
  }

  // Call the updateSelected function on document ready and scroll
  $(document).on("scroll", updateSelected);
  updateSelected();
});

for (let i = 1; i <= 4; i++) {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      // Extract user data from the API response
      const user = data.results[0];

      // Select the card corresponding to the current iteration
      const card = $(`.testimonials-cards-holder .cards:nth-child(${i})`);
      const pfpHolder = card.find(".pfp-holder img");
      const nameElement = card.find(".name");
      const designationElement = card.find(".designation");
      const reviewElement = card.find(".review");

      // Fill in the content of the HTML elements with user data
      pfpHolder.attr("src", user.picture.large);
      nameElement.text(
        `${user.name.title} ${user.name.first} ${user.name.last}`
      );
      designationElement.text(`CEO, ${user.location.city}`);
      reviewElement.text(
        `HOP is an invaluable part of our team and process to forge products that exceed customer expectations. Highly recommended if you are lucky enough to find and engage this group.`
      );
    },
  });
}
    $(document).ready(function () {
        var navHeight = $('nav').outerHeight();
      // Smooth scroll to target section with an offset
      $('.nav-links a').on('click', function (event) {
        event.preventDefault();
        var targetId = $(this).attr('href');
        var offset = $(targetId).offset().top - navHeight;

        $('html, body').animate({
          scrollTop: offset
        }, 100);
      });
    });


