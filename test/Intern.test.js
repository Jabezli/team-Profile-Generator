const Intern = require('../lib/Intern');

const intern = new Intern("Jun", "abc123", "test@email.com", "UCLA");

describe("Intern", () => {

    describe("constructor", () => {
        it(`should create an intern object using the person's info`, () => {
            expect(intern.name).toEqual("Jun");
            expect(intern.id).toEqual("abc123");
            expect(intern.email).toEqual("test@email.com");
            expect(intern.role).toEqual("Intern");
            expect(intern.school).toEqual('UCLA');
        })
    })

    describe("getName", () => {
        it(`should get intern name`, () => {
            expect(intern.getName()).toEqual("Jun");
        })
    })

    describe("getId", () => {
        it('should retrun intern id', ()=> {
            expect(intern.getId()).toEqual("abc123");
        })
    })

    describe("getEmail", () => {
        it('should get intern email', ()=> {
            expect(intern.getEmail()).toEqual('test@email.com');
        })
    })

    describe("getRole", () => {
        it('should get intern role', ()=> {
            expect(intern.getRole()).toEqual("Intern");
        })
        
    })
    describe("getSchool", () => {
        it('should get intern school', ()=> {
            expect(intern.getSchool()).toEqual("UCLA");
        })
        
    })

})