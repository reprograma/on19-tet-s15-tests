const bankSchema = require("../model/bankSchema");

const getAll =  async( req, res)=>{
    bankSchema.find(function (error, clientes){
        if (error){
            return res.status(500).send({
                message: error.message
            })
        }
        return res.status(200).json(clientes)
    })
};

const createCliente = async(req, res)=>{
    try {
        const newCliente =  new bankSchema(req.body);
        const saveCliente = await newCliente.save();
        return res.status(201).send({
            message: "Cliente, criado com sucesso", saveCliente
        });

    } catch (error) {
        console.log(error)
        
    };
};

const deleteClientePorId = async (req, res)=>{
    try {
        const clienteNotFound = await bankSchema.findById(req.params.id)
        await clienteNotFound.delete()
        return res.status(200).send({
            message: `Cliente com o id  ${clienteNotFound.id}, excluido com sucesso`, clienteNotFound
        });
    } catch (error) {
        return res.status(404).send({
            message: error.message
        });
        
    }
}
module.exports ={
    getAll,
    createCliente,
    deleteClientePorId
}