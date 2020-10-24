function loadMenu() {
    let divBody = document.getElementById('divBody');
    divBody.innerHTML = 
    `<div id='Menu'>
        <h1 id='menuTitle'>Menu</h1>
        <p class='menuInfo'>Pizza: Large - $18, Medium - $15, Small - $12</p>
        <p class='menuInfo'>Toppings ($.50 each): Pepperoni, sausage, ham, bacon, anchovies, peppers, olives, basil, oregano, extra cheese, and pineapple</p>
        <br>
        <p class='menuInfo'>Pasta ($10 a bowl): Spaghetti, Fettuccine, Tortellini, Lasagne, Rigatoni, Linguine, and Macaroni </p>
        <p class='menuInfo'>Pasta Sauces: Alfredo, Carbonara, Marinara, Pesto</p>
    </div>
    `
}

export {
    loadMenu
};