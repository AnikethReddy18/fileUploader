import { createUser, getUserByName } from "../db/queries.js"
import bcrypt from "bcrypt"

export function getSignup(req, res){
    res.render("signup")
}

export async function postSignup(req, res){
    const username = req.body.username
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await createUser(username, hashedPassword);
    res.redirect("/")
}