import connect from "../models/connect.js";
import initModels from "../models/init-models.js";
import users from "../models/users.js";


const models = initModels(connect)

const getUsers = async (_, res) => {
    try {
        const result = await models.users.findAll();
        res.send({result})
    } catch (error) {
        res.status(500).send({error})
    }
}

const getUser = async (req, res) => {
    try {
        const result = await models.users.findOne({
            where: {
                user_id: req.params.id
            }
        });
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const createUser = async(req, res) => {
    try {
        const result = await connect.transaction(async trans => {
            const user = users.create(
                
            )
        })
    } catch (error) {
        
    }
}

export {
    getUsers, 
    getUser
}