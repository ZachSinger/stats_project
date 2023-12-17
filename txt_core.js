/**
 * Create Character class
 * Create Skill class
 * 
 * -Create Stat Profile
 * -Create Trait Profile
 * -Create Skill Profile
 */

class SP_Character {
    name="Fork"
    stats=new SP_Stat_Profile()
    level=1
    experience=0
    constructor(){}
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
    strength=10
    dexterity=10
    constitution=10
    intelligence=10
    wisdom=10
    charisma=10
    
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

    getBonus(property){
        let currentValue = this[property];

        return Math.floor((currentValue - 10) / 2)
    }
}


const BaseStatProfileManager = {
    testProfile: (() => {
        return new SP_Stat_Profile()
            .setProperty(STATS.STRENGTH, 12)
            .setProperty(STATS.DEXTERITY, 15)
            .setProperty(STATS.CONSTITUTION, 14)
            .setProperty(STATS.INTELLIGENCE, 10)
            .setProperty(STATS.WISDOM, 8)
            .setProperty(STATS.CHARISMA, 13)
    })()
}