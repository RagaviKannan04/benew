const User = require('../model/user')

const getdata = async(req,res) =>{
    let dataid;
    try{
        dataid = await User.find()
    }
    catch(err){
        console.log(err)
    }

    if(!dataid){
        return res.status(404).json({message: "Data is not found"})
    }
    return res.status(200).json({dataid}) 

}

const postdata = async(req,res) => {
    const {name,email,phone} = req.body;
    let postid;
    try{
        postid = new User({
            name,email,phone
        })
        await postid.save()
    }
    catch(err){
        console.log(err)

    }
    if(!postid){
        return res.status(404).json({message: "Data is not found"})
    }
    return res.status(200).json({postid})



}

const getbyid = async(req,res) =>{
    const id = req.params.id;
    let getid;
    try{
        getid = await User.findById(id)
    }
    catch(err){
        console.log(err)
    }
    if(!getid){
        return res.status(404).json({message: 'Data no found'})
    }
    return res.status(200).json({getid})

}

const delbyid = async(req,res) =>{
    const id = req.params.id;
    let delid;
    try{
      delid = await User.findByIdAndRemove(id)
    }
    catch(err){
        console.log(err)
    }
    if(!delid){
        return res.status(404).json({message: 'Data no found'})
    }
    return res.status(200).json({delid})

}

const updata = async(req,res) =>{
    const {name,email,phone} = req.body;
    const id = req.params.id;

    let upd;
    try{
        upd = await User.findByIdAndUpdate(id,{
            name,email,phone
        })
        upd = await upd.save()
    }
    catch(err){
        console.log(err)
    }

    if(!upd){
        return res.status(404).json({
            success : false,
            message : 'Data is not found'
        })

    }
    return res.status(200).json({upd})
}



exports.getdata = getdata;
exports.postdata = postdata;
exports.getbyid = getbyid;
exports.delbyid = delbyid;
exports.updata = updata;