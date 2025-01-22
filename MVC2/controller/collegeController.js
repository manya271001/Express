const homePage=(req,res)=>{
    res.render('home')
}
const AboutPage = (req,res)=>{
    res.render('about')
}
const CoursePage = (req,res)=>{
    res.render('course')
}
const contactPage =(req,res)=>{
res.render('contact')
}
const faultyPage =(req,res)=>{
res.render('faculty')
}

module.exports={
homePage,
AboutPage,
CoursePage,
contactPage,
faultyPage

}