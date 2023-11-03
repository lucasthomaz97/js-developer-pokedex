
const pageBody = document.getElementById('pageBody')

function closeDetailsModal() {
    const modal = document.getElementById('detailsModal')
    pageBody.removeChild(modal)
}

function loadDetailsScreen(index) {
    function getById(pokemon){
        return pokemon.id === index
    }

    const desired = pokeApi.rawPokemons.find(getById)

    console.log(desired)

    const spritePath = desired.sprites.other.dream_world.front_default
    const name = desired.name
    const primaryType = desired.types[0].type.name
    const types = desired.types
    const height = desired.height
    const weight = desired.weight
    const hp = desired.stats[0].base_stat
    const attack = desired.stats[1].base_stat
    const defense = desired.stats[2].base_stat
    const specialAttack = desired.stats[3].base_stat
    const specialDefense = desired.stats[4].base_stat
    const speed = desired.stats[5].base_stat

    pageBody.innerHTML += `
    <section id="detailsModal" class="content details ">
        <div class="header">
            <span class="detailsNumber">#${desired.id}</span>
            <img src="${spritePath}" alt="photo"/>
            <span onclick="closeDetailsModal()" class="close" id="close">X</span>
        </div>
        <div class="info ${primaryType}">
            <div class="generalInfo">
                <span class="nameDetails">${name}</span>
                <Ol id="typeList" class="typeList"></Ol>
                <div class="attributes">
                    <div class="attribute height">
                        <span class="attrName">Height</span>
                        <span>${height/10} m</span>
                    </div>
                    <div class="attribute weight">
                        <span class="attrName">Weight</span>
                        <span>${weight/10} kg</span>
                    </div>
                </div>
                <ol id="statsList" class="statsList">
                    <li class="stat">
                        <span class="statName">HP</span>
                        <div class="backgroundBar">
                            <div class="bar ${primaryType}" style="--stat:${(hp/255)*100}%"></div>
                        </div>
                        <span>${hp}</span}
                    </li>
                    <li class="stat">
                        <span class="statName">Attack</span>
                        <div class="backgroundBar">
                            <div class="bar ${primaryType}" style="--stat:${(attack/255)*100}%"></div>
                        </div>
                        <span class="statNumber">${attack}</span}
                    </li>
                    <li class="stat">
                        <span class="statName">Defense</span>
                        <div class="backgroundBar">
                            <div class="bar ${primaryType}" style="--stat:${(defense/255)*100}%"></div>
                        </div>
                        <span "statNumber">${defense}</span}
                    </li>
                    <li class="stat">
                        <span class="statName">Special Attack</span>
                        <div class="backgroundBar">
                            <div class="bar ${primaryType}" style="--stat:${(specialAttack/255)*100}%"></div>
                        </div>
                        <span "statNumber">${specialAttack}</span}
                    </li>
                    <li class="stat">
                        <span class="statName">Special Defense</span>
                        <div class="backgroundBar">
                            <div class="bar ${primaryType}" style="--stat:${(specialDefense/255)*100}%"></div>
                        </div>
                        <span "statNumber">${specialDefense}</span}
                    </li>
                    <li class="stat">
                        <span class="statName">Speed</span>
                        <div class="backgroundBar">
                            <div class="bar ${primaryType}" style="--stat:${(speed/255)*100}%"></div>
                        </div>
                        <span "statNumber">${speed}</span}
                    </li>
                </ol>
            </div>
        </div>
    </section>
    `
    const typeListElement = document.getElementById('typeList')

    for (let index = 0; index < types.length; index++) {
        const type = types[index]
        const typeName = type.type.name
        typeListElement.innerHTML += `<li class="pokeType ${typeName}">${typeName}</li>`
    }
}