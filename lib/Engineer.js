const Employee = require ('./Emplooyee')
class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github
    }
    getGithub (){
        return this.github
    }
    GetRole (){
        return "Engineer "
    }
}

module.exports = Engineer