import User from "../model/user.model.js";

export const userRegister = async(req,res) => {
    const data = req.body;
    if(!data) {
        return res.status(400).json({error: "Invalid Request"})
    }
    const user = await User.find({email: req.params.email})
    console.log(user);
    
    if(!user) {
        return res.status(409).json({error: "Email already exists"})
    }
    const newUser = new User(data);
    try {
        await newUser.save();
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const userLogin = async(req,res) => {
    const data = req.body;
    if(!data) {
        return res.status(400).json({error: "Invalid Request"})
    }
    const user = await User.findOne({email: req.body.email})
    //console.log(user);
    if(!user) {
        return res.status(404).json({error: "User not found"})
    }
    // user.map((item) => {
    //     if(item.password === req.body.password){
    //         return res.status(200).json(item)
    //     }
    // })
    if(user.password === data.password){
        return res.status(200).json({msg: "LOGIN Successful :)"})
    }
    return res.status(500).json({msg: "500 server error"})
    
}
export const getAllUserProfile = async(req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const getUserProfile = async(req,res) => {
    if (req.params.id){
        const user = await User.findById(req.params.id);
    if(!user) {
        return res.status(404).json({error: "User not found"})
    }
    return res.status(200).json(user)
    }else {
        const user = await User.find();
        return res.status(200).json(user)
    }
    
}
