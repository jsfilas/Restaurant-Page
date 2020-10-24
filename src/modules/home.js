function loadHome() {
    const contentSection = document.querySelector('#content');


    let divBody =document.createElement('div');
    divBody.id = 'divBody';
    divBody.innerHTML = 
    `<div id='about'>
        <h1 id='abtTitle'>Casanova Bros Pizza & Pasta Italian Restaurant</h1>
        <p id='abtInfo'>Started in 2008 by brothers Michael and Anthony Casanova, Casanova Bros. Pizza and Pasta has quickly made a name for itself as one of the MUST VISIT
         destinations in the East Valley. With their knock out combination of amazing food, beer and wine as well as a great atmosphere and unparalleled customer service they 
         raise the bar of dining experiences. </p>
    </div>
    `

    contentSection.appendChild(divBody);


    
}

export {
    loadHome
};