const Client = require('../model/clientMessage');

module.exports.client =  async (req,res)=>{
  try {
    const clientMessage = await Client.create(req.body);
    return res.status(200).json({
     data:clientMessage,
     message:"message received",
     success:true
    });
  } catch (error) {
    return res.status(500).json({
        message:error.message,
        success:false
    });
    
  }
}