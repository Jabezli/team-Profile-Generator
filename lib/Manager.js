const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //as of now, I can understand this super below as that the "name, id, email" will
        //use what we already created in class Employee. and then add a new officeNumber parameter here
        super(name, id, email);
        this.officeNumber = officeNumber;
        //same as the one in Employee, hard-coding the role to be Manager here.
        this.role = "Manager"
    }
    //so now, the class Manager has all the methods we created in Employee, such as getName, getId, getEmail, and get Role.
    //I also want to add a getOfficeNumber method below only for this class.
    
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager;