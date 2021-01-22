const quests = [
    {
        title: 'A Fairy Tale I - Growing Pains',
        skills: {},
        quests: ['Lost City', 'Nature Spirit']
    },
    {
        title: 'A Fairy Tale II - Cure a Queen',
        skills: {
            herblore: '57',
            farming: '49',
            thieving: '40'
        },
        quests: ['A Fairy Tale I - Growing Pains']
    },
    {
        title: "A Fairy Tale III - Battle at Ork's Rift",
        skills: {
            farming: '54',
            thieving: '51',
            magic: '59',
            summoning: '37',
            crafting: '36'
        },
        quests: ['A Fairy Tale II - Cure a Queen']
    },
    {
        title: 'A Tail of Two Cats',
        skills: {},
        quests: ["Gertrude's Cat", "Icthlarin's Little Helper"]
    },
    {
        title: 'A Void Dance',
        skills: {
            hunter: '46',
            construction: '47',
            mining: '47',
            summoning: '48',
            herblore: '49',
            woodcutting: '52',
            thieving: '54'
        },
        quests: ['Quiet Before the Swarm', 'Druidic Ritual']
    },
    {
        title: 'Another Slice of H.A.M.',
        skills: {
            attack: '15',
            prayer: '25'
        },
        quests: ['Death to the Dorgeshuun', 'The Giant Dwarf', 'The Dig Site']
    },
    {
        title: 'Big Chompy Bird Hunting',
        skills: {
            fletching: '5',
            cooking: '30',
            ranged: '30'
        },
        quests: []
    },
    {
        title: 'Biohazard',
        skills: {},
        quests: ['Plague City']
    },
    {
        title: 'Cabin Fever',
        skills: {
            agility: '42',
            crafting: '45',
            smithing: '50',
            ranged: '40'
        },
        quests: ['Rum Deal', "Pirate's Treasure"]
    },
    {
        title: "Cook's Assistant",
        skills: {},
        quests: []
    },
    {
        title: 'Creature of Fenkenstrain',
        skills: {
            thieving: '25',
            crafting: '20'
        },
        quests: ['The Restless Ghost', 'Priest in Peril']
    },
    {
        title: 'Death Plateau',
        skills: {},
        quests: []
    },
    {
        title: 'Death to the Dorgeshuun',
        skills: {
            agility: '23',
            thieving: '23'
        },
        quests: ['The Lost Tribe']
    },
    {
        title: 'Defender of Varrock',
        skills: {
            agility: '51',
            hunter: '51',
            smithing: '54',
            mining: '59'
        },
        quests: [
            'Shield of Arrav',
            "The Knight's Sword",
            'Demon Slayer',
            'Temple of Ikov',
            'Family Crest',
            'What Lies Below',
            'Garden of Tranquillity'
        ]
    },
    {
        title: 'Demon Slayer',
        skills: {},
        quests: []
    },
    {
        title: 'Desert Treasure',
        skills: {
            slayer: '10',
            firemaking: '50',
            magic: '50',
            thieving: '53'
        },
        quests: [
            'The Dig Site',
            'The Tourist Trap',
            'Temple of Ikov',
            'Priest in Peril',
            'Waterfall Quest',
            'Troll Stronghold'
        ]
    },
    {
        title: 'Devious Minds',
        skills: {
            smithing: '65',
            fletching: '50',
            runecrafting: '50'
        },
        quests: [
            'Wanted!',
            "What's Mine is Yours",
            'Troll Stronghold',
            'Enter the Abyss (miniquest)'
        ]
    },
    {
        title: 'Diamond in the Rough',
        skills: {},
        quests: ['Stolen Hearts']
    },
    {
        title: 'Dragon Slayer',
        skills: {},
        quests: []
    },
    {
        title: 'Dream Mentor',
        skills: {
            combat: '85'
        },
        quests: ['Lunar Diplomacy', "Eadgar's Ruse"]
    },
    {
        title: 'Druidic Ritual',
        skills: {},
        quests: []
    },
    {
        title: "Eadgar's Ruse",
        skills: {
            herblore: '31',
            agility: '47'
        },
        quests: ['Druidic Ritual', 'Troll Stronghold']
    },
    {
        title: "Enakhra's Lament",
        skills: {
            magic: '39',
            prayer: '43',
            firemaking: '45',
            crafting: '50'
        },
        quests: []
    },
    {
        title: 'Family Crest',
        skills: {
            crafting: '40',
            mining: '40',
            smithing: '40',
            magic: '59'
        },
        quests: []
    },
    {
        title: 'Fight Arena',
        skills: {},
        quests: []
    },
    {
        title: 'Fishing Contest',
        skills: {
            fishing: '10'
        },
        quests: []
    },
    {
        title: 'Garden of Tranquillity',
        skills: {
            farming: '25'
        },
        quests: ['Creature of Fenkenstrain']
    },
    {
        title: "Gertrude's Cat",
        skills: {
            fishing: '5'
        },
        quests: []
    },
    {
        title: 'Goblin Diplomacy',
        skills: {},
        quests: []
    },
    {
        title: 'Hazeel Cult',
        skills: {},
        quests: []
    },
    {
        title: "Heroes' Quest",
        skills: {
            herblore: '25',
            mining: '50',
            fishing: '53',
            cooking: '53',
            prayer: '43',
            quest: '56'
        },
        quests: [
            'Shield of Arrav',
            "Merlin's Crystal",
            'Dragon Slayer',
            'Lost City',
            'Druidic Ritual'
        ]
    },
    {
        title: 'Holy Grail',
        skills: {
            attack: '30'
        },
        quests: ["Merlin's Crystal"]
    },
    {
        title: 'Horror from the Deep',
        skills: {
            agility: '35'
        },
        quests: []
    },
    {
        title: "Icthlarin's Little Helper",
        skills: {},
        quests: ["Gertrude's Cat", 'Diamond in the Rough']
    },
    {
        title: 'Imp Catcher',
        skills: {},
        quests: []
    },
    {
        title: 'In Aid of the Myreque',
        skills: {
            mining: '15',
            crafting: '25',
            magic: '7'
        },
        quests: ['Nature Spirit', 'In Search of the Myreque']
    },
    {
        title: 'In Search of the Myreque',
        skills: {
            agility: '25'
        },
        quests: ['Nature Spirit']
    },
    {
        title: 'Jungle Potion',
        skills: {
            herblore: '3'
        },
        quests: ['Druidic Ritual']
    },
    {
        title: "King's Ransom",
        skills: {
            magic: '45',
            defence: '65'
        },
        quests: [
            "Merlin's Crystal",
            'Holy Grail',
            'Murder Mystery',
            'One Small Favour'
        ]
    },
    {
        title: 'Land of the Goblins',
        skills: {
            prayer: '30',
            agility: '36',
            fishing: '36',
            thieving: '36',
            herblore: '37'
        },
        quests: ['Another Slice of H.A.M.', 'Fishing Contest']
    },
    {
        title: 'Legacy of Seergaze',
        skills: {
            construction: '20',
            agility: '29',
            slayer: '31',
            mining: '35',
            firemaking: '40',
            crafting: '47',
            magic: '49'
        },
        quests: ['The Darkness of Hallowvale']
    },
    {
        title: "Legends' Quest",
        skills: {
            prayer: '42',
            herblore: '45',
            agility: '50',
            ranged: '50',
            crafting: '50',
            smithing: '50',
            strength: '50',
            thieving: '50',
            woodcutting: '50',
            mining: '52',
            magic: '56',
            quest: '108'
        },
        quests: [
            "Heroes' Quest",
            'Family Crest',
            'Underground Pass',
            'Waterfall Quest',
            'Shilo Village'
        ]
    },
    {
        title: 'Lost City',
        skills: {
            crafting: '31',
            woodcutting: '36'
        },
        quests: []
    },
    {
        title: 'Lunar Diplomacy',
        skills: {
            herblore: '5',
            defence: '40',
            firemaking: '49',
            woodcutting: '55',
            mining: '60',
            crafting: '61',
            magic: '65'
        },
        quests: ['The Fremennik Trials', 'Lost City', 'Shilo Village']
    },
    {
        title: "Merlin's Crystal",
        skills: {
            attack: '30'
        },
        quests: []
    },
    {
        title: "Merlin's Crystal",
        skills: {},
        quests: []
    },
    {
        title: 'Missing My Mummy',
        skills: {
            construction: '35',
            cooking: '35',
            crafting: '45',
            magic: '50',
            prayer: '45',
            thieving: '25'
        },
        quests: [
            'Diamond in the Rough',
            'The Golem',
            "Icthlarin's Little Helper"
        ]
    },
    {
        title: 'Monkey Madness',
        skills: {},
        quests: ['The Grand Tree', 'Tree Gnome Village']
    },
    {
        title: "Mourning's End Part I",
        skills: {
            ranged: '60',
            thieving: '50'
        },
        quests: ['Big Chompy Bird Hunting', 'Roving Elves', 'Sheep Herder']
    },
    {
        title: "Mourning's End Part II",
        skills: {},
        quests: ["Mourning's End Part I"]
    },
    {
        title: 'Murder Mystery',
        skills: {},
        quests: []
    },
    {
        title: 'Nature Spirit',
        skills: {
            crafting: '18'
        },
        quests: ['The Restless Ghost', 'Priest in Peril']
    },
    {
        title: 'One Small Favour',
        skills: {
            herblore: '18',
            crafting: '25',
            smithing: '30',
            agility: '36'
        },
        quests: ['Rune Mysteries', 'Druidic Ritual', 'Shilo Village']
    },
    {
        title: "Pirate's Treasure",
        skills: {},
        quests: []
    },
    {
        title: 'Plague City',
        skills: {},
        quests: []
    },
    {
        title: 'Priest in Peril',
        skills: {},
        quests: []
    },
    {
        title: 'Quiet Before the Swarm',
        skills: {
            attack: '35',
            strength: '42'
        },
        quests: ['Imp Catcher', 'Wanted!']
    },
    {
        title: 'Recipe for Disaster',
        skills: {
            cooking: '70',
            firemaking: '20',
            agility: '48',
            quest: '176'
        },
        quests: [
            "Cook's Assistant",
            'Fishing Contest',
            'Goblin Diplomacy',
            'Big Chompy Bird Hunting',
            'Biohazard',
            'Demon Slayer',
            'Murder Mystery',
            'Nature Spirit',
            'Priest in Peril',
            'The Restless Ghost',
            "Witch's House",
            "Gertrude's Cat",
            'Shadow of the Storm',
            'Lost City',
            'Monkey Madness',
            'Desert Treasure',
            "Legends' Quest",
            'Horror from the Deep'
        ]
    },
    {
        title: 'Recruitment Drive',
        skills: {},
        quests: ['Druidic Ritual']
    },
    {
        title: 'Regicide',
        skills: {
            crafting: '10',
            agility: '56'
        },
        quests: ['Underground Pass']
    },
    {
        title: 'Ritual of the Mahjarrat',
        skills: {
            agility: '77',
            crafting: '76',
            mining: '76'
        },
        quests: [
            'The Temple at Senntisten',
            'While Guthix Sleeps',
            'Hazeel Cult',
            "Enakhra's Lament",
            'The Slug Menace',
            "A Fairy Tale III - Battle at Ork's Rift",
            'A Tail of Two Cats',
            'Rocking Out',
            'Fight Arena'
        ]
    },
    {
        title: 'Rocking Out',
        skills: {
            agility: '60',
            thieving: '63',
            crafting: '66',
            smithing: '69'
        },
        quests: ['The Great Brain Robbery']
    },
    {
        title: 'Roving Elves',
        skills: {},
        quests: ['Waterfall Quest', 'Regicide']
    },
    {
        title: 'Rum Deal',
        skills: {
            farming: '40',
            fishing: '50',
            prayer: '47',
            crafting: '42',
            slayer: '42'
        },
        quests: ['Zogre Flesh Eaters']
    },
    {
        title: 'Rune Mysteries',
        skills: {},
        quests: []
    },
    {
        title: 'Sea Slug',
        skills: {
            firemaking: '30'
        },
        quests: []
    },
    {
        title: "Shades of Mort'ton",
        skills: {
            herblore: '15',
            crafting: '20'
        },
        quests: ['Priest in Peril']
    },
    {
        title: 'Shadow of the Storm',
        skills: {
            crafting: '30'
        },
        quests: ['Demon Slayer', 'The Golem']
    },
    {
        title: 'Sheep Herder',
        skills: {},
        quests: []
    },
    {
        title: 'Shield of Arrav',
        skills: {},
        quests: []
    },
    {
        title: 'Shilo Village',
        skills: {
            crafting: '20',
            agility: '32'
        },
        quests: ['Jungle Potion']
    },
    {
        title: 'Spirit of Summer',
        skills: {
            summoning: '19',
            farming: '26',
            prayer: '35',
            construction: '40'
        },
        quests: ['The Restless Ghost']
    },
    {
        title: 'Stolen Hearts',
        skills: {},
        quests: []
    },
    {
        title: "Summer's End",
        skills: {
            summoning: '23',
            hunter: '35',
            woodcutting: '37',
            mining: '45',
            firemaking: '47',
            prayer: '55'
        },
        quests: ['Spirit of Summer']
    },
    {
        title: 'Swan Song',
        skills: {
            runecrafting: '23',
            crafting: '40',
            firemaking: '42',
            smithing: '45',
            cooking: '62',
            fishing: '62',
            magic: '66'
        },
        quests: ['One Small Favour', 'Garden of Tranquillity']
    },
    {
        title: 'Tears of Guthix',
        skills: {
            firemaking: '49',
            crafting: '20',
            mining: '20',
            smithing: '20',
            quest: '44'
        },
        quests: []
    },
    {
        title: 'Temple of Ikov',
        skills: {
            ranged: '40',
            thieving: '42'
        },
        quests: []
    },
    {
        title: 'The Branches of Darkmeyer',
        skills: {
            woodcutting: '76',
            fletching: '70',
            magic: '70',
            slayer: '67',
            crafting: '64',
            agility: '63',
            farming: '63'
        },
        quests: ['Legacy of Seergaze', "Legends' Quest"]
    },
    {
        title: 'The Chosen Commander',
        skills: {
            agility: '46',
            strength: '46',
            thieving: '46'
        },
        quests: ['Land of the Goblins']
    },
    {
        title: 'The Curse of Arrav',
        skills: {
            slayer: '37',
            summoning: '41',
            agility: '61',
            ranged: '64',
            mining: '64',
            strength: '64',
            thieving: '66'
        },
        quests: [
            'Defender of Varrock',
            "Shades of Mort'ton",
            'Troll Romance',
            'The Tale of the Muspah',
            'Missing My Mummy'
        ]
    },
    {
        title: 'The Darkness of Hallowvale',
        skills: {
            construction: '5',
            mining: '20',
            thieving: '22',
            agility: '26',
            crafting: '32',
            magic: '33',
            strength: '40'
        },
        quests: ['In Aid of the Myreque']
    },
    {
        title: 'The Dig Site',
        skills: {
            thieving: '25',
            agility: '10',
            herblore: '10'
        },
        quests: []
    },
    {
        title: 'The Eyes of Glouphrie',
        skills: {
            construction: '5',
            magic: '46',
            runecrafting: '13',
            woodcutting: '45'
        },
        quests: ['The Grand Tree']
    },
    {
        title: "The Firemaker's Curse",
        skills: {
            agility: '64',
            firemaking: '74',
            constitution: '76'
        },
        quests: []
    },
    {
        title: 'The Fremennik Trials',
        skills: {
            fletching: '25',
            crafting: '40',
            woodcutting: '40'
        },
        quests: []
    },
    {
        title: 'The Giant Dwarf',
        skills: {
            crafting: '12',
            thieving: '14',
            firemaking: '16',
            magic: '33'
        },
        quests: []
    },
    {
        title: 'The Golem',
        skills: {
            crafting: '20',
            thieving: '25'
        },
        quests: []
    },
    {
        title: 'The Grand Tree',
        skills: {
            agility: '25'
        },
        quests: []
    },
    {
        title: 'The Great Brain Robbery',
        skills: {
            crafting: '16',
            construction: '30',
            prayer: '50'
        },
        quests: [
            'Creature of Fenkenstrain',
            'Cabin Fever',
            'Recipe for Disaster'
        ]
    },
    {
        title: 'The Hand in the Sand',
        skills: {
            thieving: '17',
            crafting: '49'
        },
        quests: []
    },
    {
        title: "The Knight's Sword",
        skills: {
            mining: '10'
        },
        quests: []
    },
    {
        title: 'The Lost Tribe',
        skills: {
            agility: '13',
            thieving: '13',
            mining: '17'
        },
        quests: ['Goblin Diplomacy']
    },
    {
        title: 'The Path of Glouphrie',
        skills: {
            agility: '45',
            ranged: '47',
            slayer: '56',
            thieving: '56',
            strength: '60'
        },
        quests: [
            'Waterfall Quest',
            'The Eyes of Glouphrie',
            'Tree Gnome Village'
        ]
    },
    {
        title: 'The Restless Ghost',
        skills: {},
        quests: []
    },
    {
        title: 'The Slug Menace',
        skills: {
            crafting: '30',
            runecrafting: '30',
            slayer: '30',
            thieving: '30'
        },
        quests: ['Wanted!', 'Sea Slug']
    },
    {
        title: 'The Tale of the Muspah',
        skills: {
            firemaking: '6',
            mining: '8',
            magic: '10',
            woodcutting: '10',
            crafting: '20'
        },
        quests: []
    },
    {
        title: 'The Temple at Senntisten',
        skills: {
            prayer: '50',
            kudos: '125'
        },
        quests: ['The Curse of Arrav', 'Desert Treasure', 'Devious Minds']
    },
    {
        title: 'The Tourist Trap',
        skills: {
            fletching: '10',
            smithing: '20'
        },
        quests: []
    },
    {
        title: 'The Void Stares Back',
        skills: {
            magic: '80',
            attack: '78',
            strength: '78',
            firemaking: '71',
            construction: '70',
            crafting: '70',
            smithing: '70',
            summoning: '55',
            defence: '25'
        },
        quests: ['A Void Dance']
    },
    {
        title: 'The World Wakes',
        skills: {
            combat: '100',
            firemaking: '74',
            prayer: '90',
            slayer: '70',
            attack: '85',
            defence: '85',
            magic: '85',
            ranged: '85',
            constitution: '85'
        },
        quests: [
            'The Branches of Darkmeyer',
            'Ritual of the Mahjarrat',
            'The Chosen Commander',
            "The Firemaker's Curse",
            'The Void Stares Back'
        ]
    },
    {
        title: 'Tree Gnome Village',
        skills: {},
        quests: []
    },
    {
        title: 'Troll Romance',
        skills: {
            agility: '28'
        },
        quests: ['Death Plateau', 'Troll Stronghold']
    },
    {
        title: 'Troll Stronghold',
        skills: {
            agility: '15',
            thieving: '30'
        },
        quests: ['Death Plateau']
    },
    {
        title: 'Underground Pass',
        skills: {
            ranged: '25'
        },
        quests: ['Biohazard']
    },
    {
        title: 'Underground Pass',
        skills: {
            ranged: '25'
        },
        quests: ['Biohazard']
    },
    {
        title: 'Wanted!',
        skills: {
            quest: '33'
        },
        quests: [
            'Recruitment Drive',
            'Priest in Peril',
            'The Lost Tribe',
            'Enter the Abyss (miniquest)'
        ]
    },
    {
        title: 'Waterfall Quest',
        skills: {},
        quests: []
    },
    {
        title: 'What Lies Below',
        skills: {
            runecrafting: '35',
            mining: '42',
            agility: '21'
        },
        quests: ['Enter the Abyss (miniquest)']
    },
    {
        title: "What's Mine is Yours",
        skills: {
            smithing: '5'
        },
        quests: []
    },
    {
        title: 'While Guthix Sleeps',
        skills: {
            summoning: '23',
            hunter: '55',
            thieving: '60',
            defence: '65',
            farming: '65',
            herblore: '65',
            magic: '75'
        },
        quests: [
            "Mourning's End Part II",
            'The Hand in the Sand',
            "King's Ransom",
            "Legends' Quest",
            'Dream Mentor',
            'Recipe for Disaster',
            "Summer's End",
            'Swan Song',
            'Defender of Varrock',
            'Tears of Guthix',
            'Zogre Flesh Eaters',
            'The Path of Glouphrie'
        ]
    },
    {
        title: "Witch's House",
        skills: {},
        quests: []
    },
    {
        title: 'Zogre Flesh Eaters',
        skills: {
            herblore: '8',
            ranged: '30',
            smithing: '4',
            strength: '20',
            fletching: '30'
        },
        quests: ['Jungle Potion', 'Big Chompy Bird Hunting']
    },
    {
        title: 'Enter the Abyss (miniquest)',
        skills: {},
        quests: ['Rune Mysteries']
    }
];

export default quests;
