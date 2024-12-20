import passport from "passport";
import { localStrateg } from "passport-local"
import { getUserByName } from "./db/queries.js";
import bcrypt from "bcrypt"

async function verifyCallback(username, password, done){
    const user = await getUserByName(username);
    if(!user) return done(false, null)
    
    const isValid = await bcrypt.compare(password, )
}