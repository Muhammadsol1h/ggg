let propertyRightTopBtn = document.querySelector('.property__right__top__btn');
let property__left__box = document.querySelector('.property__left__box');

propertyRightTopBtn.addEventListener('click', function () {
    let jsdiv = document.createElement('div');
    jsdiv.style.position = 'fixed';
    jsdiv.style.right = '25%';
    jsdiv.style.top = '25%';
    jsdiv.innerHTML = `
        <div class="jscontainer">
            <input type="number" class="jscontainer__number" placeholder="money">
            <input type="text" class="jscontainer__title" placeholder="joy">
            <input type="text" class="jscontainer__link" placeholder="location">
            <input type="number" class="jscontainer__bed" placeholder="beds">
            <input type="number" class="jscontainer__m" placeholder="metr">
            <p class="jscontainer__text" style="display: none; color: red;">Toliq toldirib chiqing!</p>
            <button class="jscontainer__btn">Start</button>
        </div>
    `;
    document.body.appendChild(jsdiv);   

    let btn = jsdiv.querySelector('.jscontainer__btn');
    btn.addEventListener('click', function () {
        let inputs = jsdiv.querySelectorAll('input');
        let isEmpty = false;

        // Input qiymatlarini o'qish
        let money = jsdiv.querySelector('.jscontainer__number').value.trim();
        let title = jsdiv.querySelector('.jscontainer__title').value.trim();
        let link = jsdiv.querySelector('.jscontainer__link').value.trim();
        let beds = jsdiv.querySelector('.jscontainer__bed').value.trim();
        let metr = jsdiv.querySelector('.jscontainer__m').value.trim();

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isEmpty = true;
            }
        });

        let errorText = jsdiv.querySelector('.jscontainer__text');
        if (isEmpty) {
            errorText.style.display = 'block';
        } else {
            errorText.style.display = 'none';
            jsdiv.style.display = 'none';
            
            // Ma'lumotlarni ko'rsatish
            property__left__box.innerHTML = `
                <div class="property__left__box">
                    <img src="./image/property/right/banner.png" alt=""
                    class="property__center__wrap__left__banner">
                    <div class="">
                        <span class="property__center__wrap__left__span">${money} so'm</span>
                        <h2 class="property__center__wrap__left__title">${title}</h2>    
                        <a href="${link}" class="property__center__wrap__left__link" target="_blank">
                            <img src="./image/property/right/location 2.svg" alt="">
                            Location
                        </a>
                        <div class="property__center__wrap__left__box">
                            <p class="property__center__wrap__left__text">
                                <img src="./image/property/right/Icon-bed.svg" alt="">
                                ${beds} Beds
                            </p>
                            <p class="property__center__wrap__left__text">
                                <img src="./image/property/right/Icon-cross.svg" alt="">
                                ${metr} M
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
    });
});
