// Database of all character information (All using exact .png filenames)
const characters = {
    'thor': {
        name: 'THOR ODINSON',
        background: 'The Asgardian God of Thunder, wielding the enchanted hammer Mjolnir (and later Stormbreaker). He possesses immense superhuman strength, durability, and the ability to summon lightning.',
        affiliation: 'Avengers, Asgardians',
        image: '/static/thor_thumbnail.png', 
        theme: 'theme-thor'
    },
    'captain_america': {
        name: 'STEVE ROGERS',
        background: 'A frail World War II volunteer who was enhanced to the peak of human physical perfection by the Super Soldier Serum. He wields a vibranium shield.',
        affiliation: 'Avengers',
        image: '/static/cap_thumbnail.png',
        theme: 'theme-captain_america'
    },
    'iron_man': {
        name: 'TONY STARK',
        background: 'Genius, Billionaire, Playboy, Philanthropist. He fights foes in a high-tech suit of armor of his own design equipped with advanced weaponry.',
        affiliation: 'Avengers',
        image: '/static/ironman_thumbnail.png',
        theme: 'theme-iron_man'
    },
    'hulk': {
        name: 'BRUCE BANNER',
        background: 'A brilliant scientist who, after surviving a massive dose of gamma radiation, transforms into a giant, green, rage-fueled behemoth. The angrier he gets, the stronger he becomes.',
        affiliation: 'Avengers',
        image: '/static/hulk_thumbnail.png',
        theme: 'theme-hulk'
    },
    'spiderman': {
        name: 'PETER PARKER',
        background: 'A teenager from Queens who was bitten by a radioactive spider. He gained superhuman strength, agility, the ability to cling to walls, and a precognitive "spider-sense".',
        affiliation: 'Avengers',
        image: '/static/spiderman_thumbnail.png',
        theme: 'theme-spiderman'
    },
    'scarlet_witch': {
        name: 'WANDA MAXIMOFF',
        background: 'A tremendously powerful being capable of harnessing Chaos Magic. Her abilities allow her to alter reality, manipulate energy, and employ advanced telekinesis.',
        affiliation: 'Avengers',
        image: '/static/scarlet_witch_thumbnail.png',
        theme: 'theme-scarlet_witch'
    }
};

function selectCharacter(id) {
    const char = characters[id];
    
    if (!char) {
        console.error("Character data missing for: " + id);
        return; 
    }

    // Update HTML with character data
    document.getElementById('detail-name').innerText = char.name;
    document.getElementById('detail-bg').innerText = char.background;
    document.getElementById('detail-group').innerText = char.affiliation;
    document.getElementById('detail-image').src = char.image;

    // Update CSS Theme color
    document.body.className = ''; 
    document.body.classList.add(char.theme); 

    // Swap views
    document.getElementById('carousel-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');
}

function goBack() {
    // Swap the views back
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('carousel-view').classList.remove('hidden');
    
    // Clear theme
    document.body.className = ''; 
}