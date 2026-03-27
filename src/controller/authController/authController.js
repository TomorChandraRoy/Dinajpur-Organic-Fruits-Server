const bcrypt = require('bcrypt');
const authModel = require('../../models/authModel/authSchema');

//POST User create Data
const userCreate = async (req, res) => {
    try {
        const { name, email, role, method, phoneNumber } = req.body;
        // Check if the user already exists
        const existingUser = await authModel.findOne({ email});
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" }); //fontend a aer message ta ami dekate parbo
        }
        const userData = new authModel({
            name,
            email,
            phoneNumber,
            role,
            method
        });

        await userData.save();
        res.status(200).json({ message: "User data saved to MongoDB successfully" }); //fontend a aer message ta ami dekate parbo

    } catch (error) {
        console.error("Error Ripon:", error.message); // টার্মিনালে এরর দেখার জন্য
        res.status(500).json({ message: error.message });
    }
};

//GET all UserData:
const getUserAllData = async (req, res) => {
    try {
        const getIdData = await authModel.find();
        res.status(200).json(getIdData);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//getSingleUser check if the user already exists
const getSingleUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await authModel.findOne({ email: email.toLowerCase() });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(200).json({ role: "user", newUser: true });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// google create or update user (Upsert)
const googleCreateUser = async (req, res) => {
    try {
        const { name, photoURL, email, role, method } = req.body;

        const query = { email: email.toLowerCase() };

        const updateDoc = {
            $set: {
                name,
                photoURL,
                email: email.toLowerCase(),
                method,
                // যদি ইউজার নতুন হয় তবেই 'user' রোল সেট হবে, পুরাতন হলে আগের রোলই থাকবে
            },
            $setOnInsert: { role: role || "user" }
        };

        // upsert: true মানে হলো না থাকলে তৈরি করো, থাকলে আপডেট করো
        const result = await authModel.findOneAndUpdate(query, updateDoc, {
            upsert: true,
            new: true
        });

        console.log(`✅ User ${email} synced to database`);
        res.status(200).json(result);

    } catch (error) {
        console.error("🔥 Error syncing Google user:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { userCreate,getUserAllData,getSingleUser,googleCreateUser};



