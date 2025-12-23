const serviceDog = require("../services/dog")

class apiDog {
    async findAll(_, res) {
        try {   
            const result = await serviceDog.findAll()
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async findById(req, res) {
        try {
            const {id} = req.params
            const result = await serviceDog.findById(id)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async create(req, res) {
        try {
            const {name, spitz, owner, age} = req.body
            await serviceDog.create(name, spitz, owner, age)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async update(req, res) {
        try {
            const {name, spitz, owner, age} = req.body
            const {id} = req.params
            const result = await serviceDog.update(id, name, spitz, owner, age)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            await serviceDog.delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new apiDog();