class Player {
    constructor(name) {
        this.name = name;
        this.isAlive = true;
        this.isInnocent = true;
        this.isMafia = false;
        this.roleName = "Innocent";
        this.isSpecialInnocent = false;
    }
}

export {Player}