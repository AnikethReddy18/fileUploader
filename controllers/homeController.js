
export function getHome(req, res){
    if(req.isUnauthenticated()){
        res.redirect("/login")
    }
    else{
    res.render("home")
    }
}