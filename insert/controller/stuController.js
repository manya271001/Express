const stuModel=require('../model/stuModel')
const homePage=(req,res)=>{
    res.render('home')
}
const   InserPage = (req,res)=>{
    res.render('insert')
}
const displayPage = async (req,res)=>{
    const data =  await stuModel.find()
    res.render('display',{stuData:data})
}
const savePage = async(req,res)=>{
    const{rollno,name,city,fees}=req.body;
    const data = await stuModel.create({
        rollNo:rollno,
        name:name,
        city:city,
        fees:fees

    })
    res.render('insert')


res.render('contact')
}


module.exports={
homePage,
InserPage,
displayPage,
savePage
}