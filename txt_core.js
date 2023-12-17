/**
 * Create Character class
 * Create Skill class
 * 
 * -Create Stat Profile
 * -Create Trait Profile
 * -Create Skill Profile
 */

class SP_Character {
    name
    statProfile
    constructor(){

    }
}

const STATS = {
    STRENGTH: 'strength',
    DEXTERITY: 'dexterity',
    CONSTITUTION: 'constitution',
    INTELLIGENCE: 'intelligence',
    WISDOM: 'wisdom',
    CHARISMA: 'charisma'
}

class SP_Stat_Profile {
    strength
    dexterity
    constitution
    intelligence
    wisdom
    charisma
    
    constructor() {
        return this;
    }
    setProperty(property, value){
        this[property] = value;
        return this;
    }

    incrementProperty(property, value=1){
        let currentValue = this[property];
        return this.setProperty(property, currentValue + value);
    }
}


const BaseStatProfileManager = {
    testProfile: (() => {
        return new SP_Stat_Profile()
            .setProperty(STATS.STRENGTH, 10)
            .setProperty(STATS.DEXTERITY, 10)
            .setProperty(STATS.CONSTITUTION, 10)
            .setProperty(STATS.INTELLIGENCE, 10)
            .setProperty(STATS.WISDOM, 10)
            .setProperty(STATS.CHARISMA, 10)
    })()
}