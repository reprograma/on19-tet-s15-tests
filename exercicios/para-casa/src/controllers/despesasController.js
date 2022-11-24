const despesasModel = require("../models/despesasModel");

const getAll = async (req, res) => {
    try {
        const despesas = await despesasModel.find();
        res.status(200).send(despesas);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const postDespesa = async (req, res) => {
    try {
        const { nome, itemComprado, categoria, metodoDePagamento, valor } = req.body;

        const novaDespesa = new despesasModel({
            nome, itemComprado, categoria, metodoDePagamento, valor
        });

        const despesaExiste = await despesasModel.findOne({ itemComprado });

        if (despesaExiste) {
            return res.status(422).send({ message: "Despesa ja registrada. Digite outra" });
        }

        const salvaDespesa = await novaDespesa.save();
        res.status(201).send({
            message: "Nova despesa registrada com sucesso", salvaDespesa
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    };
};

const deleteDespesa = async (req, res) => {
    try {
        const encontraDespesa = await despesasModel.findById(req.params.id)
    
        await encontraDespesa.delete()
    
        return res.status(200).send({
          "mensagem": `Despesa '${encontraDespesa.itemComprado}' deletada com sucesso!`,
          encontraDespesa
        })
    
      } catch (error) {
        return res.status(400).send({
          "mensagem": error.message
        });
      };
};

module.exports = {
    getAll,
    postDespesa,
    deleteDespesa
}