const dog = require("../model/dog")

class serviceDog {
    async findAll(transaction) {
        return await dog.findAll({ transaction })
    }
    async findById(id, transaction) {
        return await dog.findByPk(id, { transaction })
    }
    async create(name, spitz, owner, age, transaction) {
        if (!name) {
            throw new Error("Name is required")
        } else if (!spitz) {
            throw new Error("Spitz is required")
        } else if (!owner) {
            throw new Error("Owner is required")
        } else if (!age) {
            throw new Error("Age is required")
        } 

        return dog.create({ 
            name, spitz, owner, age
        }, { transaction })
    }
    async update(id, name, spitz, owner, age, transaction) {
        const oldDog = await this.findById(id, transaction)
        oldDog.name = name || oldDog.name
        oldDog.spitz = spitz || oldDog.spitz
        oldDog.owner = owner || oldDog.owner
        oldDog.age = age || oldDog.age

        await oldDog.save({transaction})

        return oldDog

    }
    async delete(id, transaction) {
        const dog = await this.findById(id, transaction)
        await dog.destroy({transaction})
        return true
    }
}

module.exports = new serviceDog();