const makeModelYear: HTMLElement | null = document.getElementById("#make-model-year");
const imageURL: HTMLElement | null = document.getElementById("photo");
const perfomanceMods: HTMLElement | null = document.getElementById("perfomace-mods");
const functionalMods: HTMLElement | null = document.getElementById("functional-mods");
const cosmeticMods: HTMLElement | null = document.getElementById("cosmetic-mods");


export const NewCarData = () => {

    let carData = {
        makeModelYear: makeModelYear?.innerHTML,
        photo: imageURL?.innerHTML,
        mod_preformance: perfomanceMods?.innerHTML,
        mod_functional: functionalMods?.innerHTML,
        mod_cosmetic: cosmeticMods?.innerHTML
    };

    //POST Request goes here


};

export const UpdateCarData = (id:string) => {

    let carData = {
        _id: id,
        makeModelYear: makeModelYear?.innerHTML,
        photo: imageURL?.innerHTML,
        mod_preformance: perfomanceMods?.innerHTML,
        mod_functional: functionalMods?.innerHTML,
        mod_cosmetic: cosmeticMods?.innerHTML
    };

    //PUT request goes here

};