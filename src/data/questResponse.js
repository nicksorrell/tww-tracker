const questResponse = [
    {
        title: 'A Shadow over Ashdale',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "A Soul's Bane",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Animal Magnetism',
        status: 'COMPLETED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Buyers and Cellars',
        status: 'COMPLETED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Cook's Assistant",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Death Plateau',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Demon Slayer',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Diamond in the Rough',
        status: 'COMPLETED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Doric's Task I (miniquest)",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Druidic Ritual',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 4,
        userEligible: true
    },
    {
        title: 'Ernest the Chicken',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 4,
        userEligible: true
    },
    {
        title: "Gertrude's Cat",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Goblin Diplomacy',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 5,
        userEligible: true
    },
    {
        title: 'Gower Quest',
        status: 'COMPLETED',
        difficulty: 2,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Gunnar's Ground",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 5,
        userEligible: true
    },
    {
        title: 'Imp Catcher',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Jungle Potion',
        status: 'COMPLETED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Let Them Eat Pie',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'One Piercing Note',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'One Small Favour',
        status: 'COMPLETED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: "Pirate's Treasure",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Plague City',
        status: 'COMPLETED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Priest in Peril',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Rune Memories',
        status: 'COMPLETED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Rune Mysteries',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Sheep Shearer (miniquest)',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Shield of Arrav',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Shilo Village',
        status: 'COMPLETED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Song from the Depths',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Stolen Hearts',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Swept Away',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'The Blood Pact',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Grand Tree',
        status: 'COMPLETED',
        difficulty: 2,
        members: true,
        questPoints: 5,
        userEligible: true
    },
    {
        title: "The Knight's Sword",
        status: 'COMPLETED',
        difficulty: 1,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Restless Ghost',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Unstable Foundations',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Vampyre Slayer',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Violet is Blue',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Violet is Blue Too',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "What's Mine is Yours",
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Witch's House",
        status: 'COMPLETED',
        difficulty: 1,
        members: false,
        questPoints: 4,
        userEligible: true
    },
    {
        title: 'Wolf Whistle',
        status: 'COMPLETED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Missing, Presumed Death',
        status: 'STARTED',
        difficulty: 0,
        members: false,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Recipe for Disaster',
        status: 'STARTED',
        difficulty: 250,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: "Recipe for Disaster: Another Cook's Quest",
        status: 'STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Recipe for Disaster: Defeating the Culinaromancer',
        status: 'STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Tai Bwo Wannai Trio',
        status: 'STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'The Death of Chivalry',
        status: 'STARTED',
        difficulty: 0,
        members: false,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Tower of Life',
        status: 'STARTED',
        difficulty: 0,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: "'Phite Club",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'A Clockwork Syringe',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'A Fairy Tale I - Growing Pains',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'A Fairy Tale II - Cure a Queen',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "A Fairy Tale III - Battle at Ork's Rift",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'A Guild of Our Own (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'A Tail of Two Cats',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'A Void Dance',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'All Fired Up',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Another Slice of H.A.M.',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'As a First Resort',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Back to my Roots',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Back to the Freezer',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Bar Crawl (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Beneath Cursed Tides',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Benedict's World Tour (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Between a Rock...',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Big Chompy Bird Hunting',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Biohazard',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Birthright of the Dwarves',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Blood Runs Deep',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Boric's Task I (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: "Boric's Task II (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Boric's Task III (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Bringing Home the Bacon',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Broken Home',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Cabin Fever',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Call of the Ancestors',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Carnillean Rising',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Catapult Construction',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Chef's Assistant",
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Children of Mah',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Clock Tower',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Cold War',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Contact!',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Creature of Fenkenstrain',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Crocodile Tears',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Curse of the Black Stone',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 4,
        userEligible: false
    },
    {
        title: 'Damage Control (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Deadliest Catch',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Dealing with Scabaras',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Death to the Dorgeshuun',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Defender of Varrock',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Desert Slayer Dungeon (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Desert Treasure',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Desperate Measures',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Desperate Times',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Devious Minds',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Dimension of Disaster',
        status: 'NOT_STARTED',
        difficulty: 250,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Dimension of Disaster: Coin of the Realm',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Dimension of Disaster: Curse of Arrav',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Dimension of Disaster: Defender of Varrock',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Dimension of Disaster: Demon Slayer',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Dimension of Disaster: Shield of Arrav',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Dishonour among Thieves',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Do No Evil',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Doric's Task II (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: "Doric's Task III (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: false,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Doric's Task IV (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: false,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Doric's Task V (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Doric's Task VI (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Doric's Task VII (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Doric's Task VIII (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Dragon Slayer',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: false,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Dream Mentor',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Dwarf Cannon',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Eadgar's Ruse",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Eagles' Peak",
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Elemental Workshop I',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Elemental Workshop II',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Elemental Workshop III',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Elemental Workshop IV',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Enakhra's Lament",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Enlightened Journey',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Enter the Abyss (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: "Evil Dave's Big Day Out",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Eye for an Eye (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Family Crest',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Fate of the Gods',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Father and Son',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Fight Arena',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Final Destination (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Fishing Contest',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Flag Fall (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Forgettable Tale of a Drunken Dwarf',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Forgiveness of a Chaos Dwarf',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'From Tiny Acorns (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: "Fur 'n Seek",
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Garden of Tranquillity',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Ghosts Ahoy',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Ghosts from the Past (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Glorious Memories',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Grim Tales',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Harbinger (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Haunted Mine',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Hazeel Cult',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Head of the Family (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Heart of Stone',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Helping Laniakea',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: "Hero's Welcome",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Heroes' Quest",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Holy Grail',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Hopespear's Will (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Horror from the Deep',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Hunt for Red Raktuber',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Icthlarin's Little Helper",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Impressing the Locals',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'In Aid of the Myreque',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'In Memory of the Myreque (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'In Pyre Need',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'In Search of the Myreque',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Jed Hunter (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Kennith's Concerns",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Kindred Spirits',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'King of the Dwarves',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "King's Ransom",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Koschei's Troubles (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Lair of Tarn Razorlor (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Land of the Goblins',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Legacy of Seergaze',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Legends' Quest",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 4,
        userEligible: false
    },
    {
        title: 'Lost City',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Lost Her Marbles (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Love Story',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Lunar Diplomacy',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Mahjarrat Memories (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Making History',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Meeting History',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Merlin's Crystal",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 6,
        userEligible: true
    },
    {
        title: 'Missing My Mummy',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Monk's Friend",
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Monkey Madness',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Mountain Daughter',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: "Mourning's End Part I",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Mourning's End Part II",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Murder Mystery',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: "My Arm's Big Adventure",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Myths of the White Lands',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Nadir (saga)',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Nature Spirit',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: "Nomad's Elegy",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: "Nomad's Requiem",
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Observatory Quest',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: "Olaf's Quest",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Once Upon a Slime',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'One Foot in the Grave (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'One of a Kind',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Our Man in the North',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Perils of Ice Mountain',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Pieces of Hate',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: "Plague's End",
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Purple Cat (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Quiet Before the Swarm',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Rag and Bone Man',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Raksha, the Shadow Colossus (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Rat Catchers',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Rebuilding Edgeville (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing Evil Dave',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing King Awowogei',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing Pirate Pete',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing Sir Amik Varze',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing Skrach Uglogwee',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing the Goblin Generals',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing the Lumbridge Sage',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recipe for Disaster: Freeing the Mountain Dwarf',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Recruitment Drive',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Regicide',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Ritual of the Mahjarrat',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'River of Blood',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Rocking Out',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Roving Elves',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Royal Trouble',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Rum Deal',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Rune Mechanics',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Salt in the Wound',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Scorpion Catcher',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Sea Slug',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Shades of Mort'ton",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: 'Shadow of the Storm',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Sheep Herder',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 4,
        userEligible: true
    },
    {
        title: 'Sins of the Father (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Sliske's Endgame",
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'Smoking Kills',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Some Like It Cold',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Spirit of Summer',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Spirits of the Elid',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Spiritual Enlightenment (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Summer's End",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Swan Song',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Tales of Nomad (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Tales of the God Wars (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Tears of Guthix',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Temple of Ikov',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Branches of Darkmeyer',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Brink of Extinction',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'The Chosen Commander',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 3,
        userEligible: false
    },
    {
        title: 'The Curse of Arrav',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Curse of Zaros (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'The Darkness of Hallowvale',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Dig Site',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'The Elder Kiln',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Eyes of Glouphrie',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Feud',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "The Firemaker's Curse",
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Fremennik Isles',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Fremennik Trials',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: "The General's Shadow (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'The Giant Dwarf',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'The Golem',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Great Brain Robbery',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Hand in the Sand',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Hunt for Surok (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'The Jack of Spades',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Light Within',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Lord of Vampyrium',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Lost Toys (miniquest)',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'The Lost Tribe',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Mighty Fall',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Needle Skips',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Path of Glouphrie',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Prisoner of Glouphrie',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Slug Menace',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The Tale of the Muspah',
        status: 'NOT_STARTED',
        difficulty: 0,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'The Temple at Senntisten',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'The Tourist Trap',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'The Void Stares Back',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'The World Wakes',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 3,
        userEligible: true
    },
    {
        title: "Thok It To 'Em (saga)",
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Thok Your Block Off (saga)',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Three's Company (saga)",
        status: 'NOT_STARTED',
        difficulty: 1,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Throne of Miscellania',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'TokTz-Ket-Dill',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Tree Gnome Village',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 2,
        userEligible: true
    },
    {
        title: 'Tribal Totem',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Troll Romance',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'Troll Stronghold',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: "Tuai Leit's Own (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Underground Pass',
        status: 'NOT_STARTED',
        difficulty: 2,
        members: true,
        questPoints: 5,
        userEligible: false
    },
    {
        title: 'Vengeance (saga)',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: "Wandering Ga'al (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 0,
        userEligible: false
    },
    {
        title: 'Wanted!',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    },
    {
        title: 'Watchtower',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 4,
        userEligible: true
    },
    {
        title: 'Waterfall Quest',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'What Lies Below',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'While Guthix Sleeps',
        status: 'NOT_STARTED',
        difficulty: 4,
        members: true,
        questPoints: 5,
        userEligible: false
    },
    {
        title: "Witch's Potion (miniquest)",
        status: 'NOT_STARTED',
        difficulty: 0,
        members: false,
        questPoints: 0,
        userEligible: true
    },
    {
        title: 'Within the Light',
        status: 'NOT_STARTED',
        difficulty: 3,
        members: true,
        questPoints: 2,
        userEligible: false
    },
    {
        title: 'You Are It',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: true
    },
    {
        title: 'Zogre Flesh Eaters',
        status: 'NOT_STARTED',
        difficulty: 1,
        members: true,
        questPoints: 1,
        userEligible: false
    }
];

export default questResponse;
