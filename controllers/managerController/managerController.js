import Manager from "../../models/managerModel/managerModel.js";
import bcrypt from 'bcrypt';

export const getManagers = async (req, res) => {
    try {
        const managers = await Manager.findAll();
        res.json(managers);
    } catch (error) {
        console.log(error);
    }
};

export const getManager = async (req, res) => {
    try {
        const manager = await Manager.findAll({
            where:{id: req.params.id}
        })
        res.json(manager)
    } catch (error) {
        console.log(error)
        
    }
}

export const register = async (req, res) => {
    const { managerName, managerEmail, managerPassword, confirmPassword, companyName } = req.body;
    if (managerPassword !== confirmPassword) return res.status(400).json({ msg: "the password does not match" });

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(managerPassword, salt);

    try {
        await Manager.create({
            managerName: managerName,
            managerEmail: managerEmail,
            managerPassword: hashPassword,
            companyName: companyName
        });

        res.json({ msg: "Manager created!" })
    } catch (error) {
        console.log(error);

    }

};

export const login = async (req, res) => {
    
    try {
        const manager = await Manager.findAll({
            where: {
                managerEmail: req.body.managerEmail
            }
        });

        const match = await bcrypt.compare(req.body.managerPassword, manager[0].managerPassword);
        if (!match) return res.status(400).json({ msg: "Wrong password" });
        res.json(manager[0].id )
    } catch (error) {
        res.status(400).json({ msg: "wrong email" })

    }
};



