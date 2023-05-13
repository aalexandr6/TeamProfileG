//This is the base class for all other employee types
//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
class Employee {
    constructur (name, id ,email) {
        this.name = name
        this.id = id 
        this.email = email
    }
    getName () {
        return this.name 
    }
    getid (){
        return this.id
    }
    get Email() {
        return this.email
    }
    getEmail() {
        return "Employee"
    }
}

module.exportd = Employee
