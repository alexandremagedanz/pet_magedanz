const database = require("../../src/database");
const serviceDog = require("../../src/services/dog")

describe("Teste de Cachorro", () => {

    beforeAll(async () => {
        this.transaction = await database.db.transaction()
    })

    afterAll(async() => {
        await this.transaction.rollback()
    })

    it("should create a dog", async () => {
        const dog = {
            name : "Rex", 
            spitz : "Pastor Alemão",
            owner : "Lucas Magedanz",
            age : 2
        }

        const addDog = await serviceDog.create(dog.name, dog.spitz, dog.owner, dog.age, this.transaction); 
        this.id = addDog.id  
        expect(addDog.name).toBe(dog.name)
        expect(addDog.spitz).toBe(dog.spitz)
        expect(addDog.owner).toBe(dog.owner)
        expect(addDog.age).toBe(dog.age)     
    });
    it("should update a dog", async () => {
        const dog = {
            id: this.id,
            name: "July", 
            spitz : "Pastor Alemão",
            owner : "Lucas Magedanz",
            age : 2
         };

        const updateDog = await serviceDog.update(dog.id, dog.name, dog.spitz, dog.owner, dog.age, this.transaction);

        expect(updateDog.name).toBe(dog.name)
        expect(updateDog.spitz).toBe(dog.spitz)
        expect(updateDog.owner).toBe(dog.owner)
        expect(updateDog.age).toBe(dog.age)           
    });
    it("should delete a dog", async () => {
        const dog = {
            id: this.id};

        const response = await serviceDog.delete(dog.id, this.transaction);
        expect(response).toBe(true)           
    });

});