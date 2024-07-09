const unkownError = (res,req)=>{
    res.status(404).send({err :'unknown end point'})
}

module.exports = unkownError ;