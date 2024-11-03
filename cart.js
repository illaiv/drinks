$(document).ready(function () {
    function animateCart() {
      $("#cart").animate(
        {
          left: "90%",
          opacity: 1,
        },
        3000,
        function () {
          $("#cart").animate(
            {
              left: "0",
              opacity: 1,
            },
            4000,
            animateCart
          );
        }
      );
    }
    animateCart();
  });
  