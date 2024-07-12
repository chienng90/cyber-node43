import code from "../models/code.js";
import connect from "../models/connect.js";
import initModels from "../models/init-models.js";


const models = initModels(connect);

const getCodes = async(_, res) => {
    try {
        const result = await models.code.findAll();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createCode = async (req, res) => {
    try {
        const result = await connect.transaction(async trans => {
            const code = await models.code.create(
                {
                    code: req.body.code
                },
                {transaction: trans}
            )
            return code;
        })
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export {
    getCodes,
    createCode
}