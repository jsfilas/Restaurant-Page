function loadContact() {
    let divBody = document.getElementById('divBody');
    divBody.innerHTML = 
    `<div id='Contact'>
        <h1 id='contactTitle'>Contact</h1>
        <p class='contactInfo'>Phone: (111)-222-3333</p>
        <p class='contactInfo'>Email: cbpizza@fakemail.com</p>
        <p class='contactInfo'>Yelp: yelp.cbpizza.com</p>
    </div>
    `
}

export {
    loadContact
};