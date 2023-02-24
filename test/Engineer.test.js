const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Jun", "abc123", "test@email.com", "github/engineer");

describe("Engineer", () => {

    describe("constructor", () => {
        it(`should create an engineer object using the person's info`, () => {
            expect(engineer.name).toEqual("Jun");
            expect(engineer.id).toEqual("abc123");
            expect(engineer.email).toEqual("test@email.com");
            expect(engineer.role).toEqual("Engineer");
            expect(engineer.github).toEqual('github/engineer');
        })
    })

    describe("getName", () => {
        it(`should get engineer name`, () => {
            expect(engineer.getName()).toEqual("Jun");
        })
    })

    describe("getId", () => {
        it('should retrun engineer id', ()=> {
            expect(engineer.getId()).toEqual("abc123");
        })
    })

    describe("getEmail", () => {
        it('should get engineer email', ()=> {
            expect(engineer.getEmail()).toEqual('test@email.com');
        })
    })

    describe("getRole", () => {
        it('should get engineer role', ()=> {
            expect(engineer.getRole()).toEqual("Engineer");
        })
        
    })
    describe("getGithub", () => {
        it('should get engineer github', ()=> {
            expect(engineer.getGithub()).toEqual("github/engineer");
        })
        
    })

})