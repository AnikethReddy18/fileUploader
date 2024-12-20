import express from "express"
import session from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import {PrismaClient} from "@prisma/client"

import signupRouter from "./routes/signupRouter.js"
import loginRouter from "./routes/loginRouter.js"

const app = express();
app.set("view engine", 'ejs')
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({"extended": true}))

app.use(session({
    secret: process.env.SECRET,
    store: new PrismaSessionStore(
        new PrismaClient(),
        {
          checkPeriod: 2 * 60 * 1000, 
          dbRecordIdIsSessionId: true,
          dbRecordIdFunction: undefined,
        }
      ),
    resave: false,
    saveUninitialized: false  
}))

app.get("/", (req, res)=>{
    res.render("home")
})

app.use("/signup", signupRouter)
app.use("/login", loginRouter)

app.listen(3000, ()=>console.log("Listening at http://localhost:3000"))