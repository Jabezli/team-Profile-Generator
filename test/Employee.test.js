const Employee = require('../lib/Employee');
const employee = new Employee("Jun", "abc123", "test@email.com");

describe("Employee", () => {

    describe("constructor", () => {
        it(`should create an employee object using the person's info`, () => {
            expect(employee.name).toEqual("Jun");
            expect(employee.id).toEqual("abc123");
            expect(employee.email).toEqual("test@email.com");
            expect(employee.role).toEqual("Employee");
        })
    })

    describe("getName", () => {
        it(`should get employee name`, () => {
            expect(employee.getName()).toEqual("Jun");
        })
    })

    describe("getId", () => {
        it('should retrun employee id', ()=> {
            expect(employee.getId()).toEqual("abc123");
        })
    })

    describe("getEmail", () => {
        it('should get employee email', ()=> {
            expect(employee.getEmail()).toEqual('test@email.com');
        })
    })

    describe("getRole", () => {
        it('should get employee role', ()=> {
            expect(employee.getRole()).toEqual("Employee");
        })
        
    })

})