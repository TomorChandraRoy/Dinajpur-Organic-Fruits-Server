//require with sampleSchema

const productModel = require('../../models/productModel/productSchema');

//POST create Data
const create = async (req, res) => {
    try {
        //password bcrypt format and 10 mane password ti koybar poriborton hobe then database a save hobe
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword

        const userData = new productModel(req.body);

        //optional
        if (!userData) {
            return res.status(404).json({ msg: "User data not added" });
        }

        await userData.save();
        res.status(200).json({ msg: "User created data add successfully database" });

    } catch (error) {
        res.status(500).json({ message: error.message }); // কোডে কোনো ত্রুটি পাওয়া গেলে
    }
};

//GET ALL create data
const getAllData = async (req, res) => {
    try {
        const allGetData = await productModel.find();

        //optional
        if (!allGetData) {
            return res.status(404).json({ msg: "User data not get" });
        }

        res.status(200).json(allGetData);
        // res.send(allGetData).status(200);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET only singleData:
const getSingleData = async (req, res) => {
    try {
        const id = req.params.id;
        const getIdData = await productModel.findById(id);
        res.status(200).json(getIdData);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//Upadate only singleData:
const updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const updataIdData = await productModel.findByIdAndUpdate(id,req.body);
        res.status(200).json(updataIdData);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Delete only singleData:
const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        await productModel.findByIdAndDelete(id);
        res.status(200).json({msg: "sample data delete successfully for the database" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { create, getAllData, getSingleData, updateData, deleteData };