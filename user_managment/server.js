import app from "./app.js"

app.listen(3000,(err,data)=>{
    console.log("server running");
})

export const updateUser = (req,res)=>{
    try {
        const {id} = req.params;

        const index = UserActivation.findIndex(u => u.id == id);

        if(index === -1){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }
        
    }
}