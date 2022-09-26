class Users {
    constructor(xPos, yPos, user) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.user = user;
    }

    setXPos(xPos) {
        this.xPos = xPos;
    }
    getXPos() {
        return this.xPos;
    }

    setYPos(yPos) {
        this.yPos = yPos;
    }
    getYPos() {
        return this.yPos;
    }

    setUser(user) {
        this.user = user;
    }
    getUser() {
        return this.user;
    }
}