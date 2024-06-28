import express from "express"
import User from "../../../frontend/src/models/user"


const router = express.Router

router.post("/register", async (req: Request, res:Response)=>{
    try{
        let user = await UserActivation.findOne({
            email: req.body.email,
        });
        if(user) {
            return res.status(400).json({message: "User already exists"})
        }
        user = new User(req.body)
        await user.save();
    }
    catch(error){
        res.status(500).send({"something went wrong"})

    }
})