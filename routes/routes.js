const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/get-user-info/:name',async (req, res)=>{
    let name = req.params.name
    try{

        
        let resp = await axios.get(`https://codeforces.com/api/user.info?handles=${name}`)
        // console.log("here", resp.data);
        // resp = await resp.json()
        console.log("here");
        res.status(200).json(resp.data)



    }catch(err){
        console.log(err.response.data);

        res.status(400).json({
            message:err.response.data
        })

    }

    
})


router.get('/get-user-contests/:name', async (req, res)=>{
    let name = req.params.name

    try{

        let resp = await axios.get(`https://codeforces.com/api/user.rating?handle=${name}`)
        res.status(200).json(resp.data)

    }catch(err){

        res.status(400).json({
            message:err.response.data
        })

    }
})



module.exports = router