import passport from "passport";
import { getUserByName, getUserByID } from "./db/queries.js";
import { Strategy } from "passport-local"
import bcrypt from "bcrypt"

async function verifyCallback(username, password, done){
    const user = await getUserByName(username);
    if(!user) return done(null, false)
    
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) return done(null, false)

    return done(null, user)
}

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(async function(id, done) {
    const user = getUserByID(id)
    done(null, user);
});

const strategy = new Strategy(verifyCallback);
passport.use(strategy)