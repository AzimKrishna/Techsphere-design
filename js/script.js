$(document).ready(function () {
  $(".project-card").hover(
    function () {
      $(this).find(".read-more").addClass("expanded");
      $(this).find(".arrow-up").addClass("rotated");
    },
    function () {
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

  const clientLogosContainer = $(".client-logos");

  for (let i = 0; i < logoUrls.length; i++) {
    const logoHolder = $("<div>").addClass("logo-holder");
    const logoImg = $("<img>")
      .attr("src", logoUrls[i])
      .attr("alt", `Logo ${i + 1}`);

    logoHolder.append(logoImg);
    clientLogosContainer.append(logoHolder);
  }

  // Burger click event
  $(".burger").click(function () {
    $("nav .nav-links").attr("id", function (_, attr) {
      return attr === "v-class" ? "" : "v-class";
    });

    $(".burger").toggleClass("cross");
  });

  // Nav links click event
  $("nav .nav-links a").click(function () {
    $("nav .nav-links a").removeClass("selected");

    $(this).addClass("selected");

    $(".nav-links").removeAttr("id");

    $(".burger").removeClass("cross");
  });

  // Cache the navigation links
  var navLinks = $("nav .nav-links a");

  function updateSelected() {
    var scrollPosition = $(window).scrollTop();

    $("section").each(function () {
      var section = $(this);
      var sectionId = section.attr("id");

      if (
        scrollPosition >= section.offset().top &&
        scrollPosition < section.offset().top + section.outerHeight()
      ) {
        navLinks.removeClass("selected");

        $('nav  .nav-links a[href="#' + sectionId + '"]').addClass("selected");
      }
    });
  }

  $(document).on("scroll", updateSelected);
  updateSelected();

  var navHeight = $("nav").outerHeight();

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = $(this).attr("href");
    var offset = $(targetId).offset().top - navHeight;

    $("html, body").animate(
      {
        scrollTop: offset,
      },
      100
    );
  }

  // Attach or detach click event based on window width
  function updateSmoothScroll() {
    if ($(window).width() < 800) {
      $(".nav-links a").on("click", smoothScroll);
    } else {
      $(".nav-links a").off("click", smoothScroll);
    }
  }

  updateSmoothScroll();

  $(window).resize(updateSmoothScroll);
});

for (let i = 1; i <= 4; i++) {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      const user = data.results[0];

      const card = $(`.testimonials-cards-holder .cards:nth-child(${i})`);
      const pfpHolder = card.find(".pfp-holder img");
      const nameElement = card.find(".name");
      const designationElement = card.find(".designation");
      const reviewElement = card.find(".review");

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

$(document).on("click", function (event) {
  if ($(window).width() < 800) {
    const navBar = $("nav .nav-links");
    const burgerIcon = $(".burger");
    // Check if the clicked element is not inside the navBar or burgerIcon
    if (
      !navBar.is(event.target) &&
      !burgerIcon.is(event.target) &&
      navBar.has(event.target).length === 0 &&
      burgerIcon.has(event.target).length === 0
    ) {
      navBar.removeAttr("id");
      burgerIcon.removeClass("cross");
    }
  }
});
