const Manager = require('../lib/Manager');

const manager = new Manager("Jun", "abc123", "test@email.com", "office301");

describe("Manager", () => {

    describe("constructor", () => {
        it(`should create an manager object using the person's info`, () => {
            expect(manager.name).toEqual("Jun");
            expect(manager.id).toEqual("abc123");
            expect(manager.email).toEqual("test@email.com");
            expect(manager.role).toEqual("Manager");
            expect(manager.officeNumber).toEqual('office301');
        })
    })

    describe("getName", () => {
        it(`should get manager name`, () => {
            expect(manager.getName()).toEqual("Jun");
        })
    })

    describe("getId", () => {
        it('should retrun manager id', ()=> {
            expect(manager.getId()).toEqual("abc123");
        })
    })

    describe("getEmail", () => {
        it('should get manager email', ()=> {
            expect(manager.getEmail()).toEqual('test@email.com');
        })
    })

    describe("getRole", () => {
        it('should get manager role', ()=> {
            expect(manager.getRole()).toEqual("Manager");
        })
        
    })
    describe("getOfficeNumber", () => {
        it('should get manager office number', ()=> {
            expect(manager.getOfficeNumber()).toEqual("office301");
        })
        
    })

})