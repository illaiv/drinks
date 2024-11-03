//display name and ingredients. hovering card = recipe, clicking = calories. 

const establishDrinkInfo = (index) => {
    console.log(drinks[index].drink_name)
    $(".instructions").eq(index).html(`${drinks[index].drink_name}<br>Main Ingredients: ${drinks[index].main_ingredients}`);
};

const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"),establishDrinkInfo);

$(".box").on("click", function() {

let indexOfDrink = $(".box").index(this);
$(this).find("p.instructions").text(drinks[indexOfDrink].calories);
});

$(".box").on("mouseover", function () {
    let indexOfDrink = $(".box").index(this);
    $(this)
    .find("p.instructions")
    .text(
        drinks[indexOfDrink].recipe
    );
    
});
$(".box").on("mouseout", function () {
    let indexOfDrink = $(".box").index(this);
    $(this).find("p.instructions").html(`${drinks[indexOfDrink].drink_name}<br>Main Ingredients: ${drinks[indexOfDrink].main_ingredients}`);

});
};

const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    drinks.forEach((drink)=>{
        let boxMarkup= ` <div class="box">
        <img class="drink_pic" src="./images/${drink.drink_name.toLowerCase()}.png" />
        <p class="instructions"></p>
        </div>`;
        wrapperRef.append(boxMarkup);

    }
);
}

$(document).ready(showInformation);