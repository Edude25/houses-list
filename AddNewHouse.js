function AddNewHouse() {
    let number = document.querySelector("input[name = residenceNumber]").value;
    let neighborhood = document.querySelector("input[name = neighborhood]").value;
    let city = document.querySelector("input[name = city]").value;
    let area = document.querySelector("input[name = area]").value;
    let housesGroup = document.querySelector("ul#housesGroup")
    let housePosition = housesGroup.children.length + 1
    console.log(number, city, area, neighborhood, housePosition)

    let newLi = document.createElement("li");
    newLi.setAttribute('class', '')
    let conteudoNovo = (`House ${housePosition} \n Number: ${number} \n Neighborhood: ${neighborhood} \n City: ${city} \n Area: ${area}m² \n` );
    newLi.innerText = conteudoNovo;
    let deletButton = document.createElement("button")
    deletButton.innerText = "Delet House"
    deletButton.setAttribute('onclick', 'deletHouse(this)')
    deletButton.setAttribute('type', 'button')
    deletButton.setAttribute("class", 'button is-danger is-small')
    newLi.appendChild(deletButton)

    // let insertedElement = document.getElementById("housesGroup");
    // insertedElement.insertAdjacentElement('beforeend', newLi);

    document.getElementById("housesGroup").appendChild(newLi)
}

