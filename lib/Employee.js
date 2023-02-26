class Employee {
    constructor(name, id, email) {
        this.role = "Employee" 
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //methods below
    getName(){
        return this.name
    };

    getId(){
        return this.id
    };

    getEmail(){
        return this.email
    };

    getRole(){
        return this.role
    };
}

module.exports = Employee;