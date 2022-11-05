import express, { response } from "express";
import cors from "cors"

let currentUsers = []
let tweets = []

const app = express()
app.use(cors())
app.use(express.json())



app.post("/sign-up", (req, resp) => {

    const { username, avatar } = req.body

    currentUsers.push({

        id: currentUsers.length + 1,
        username,
        avatar
    })

    resp.status(201).send("OK")
    

})


app.post("/tweets", (req, resp) => {

    const { username, tweet } = req.body
    let userExist = (currentUsers.find((user) => user.username === username))

    if (userExist === undefined) {
        resp.status(404).send("Esse usuario nao existe")
        return
    }
    tweets.push({

        id: tweets.length + 1,
        username,
        tweet
    })

    resp.status(201).send("OK")


})

app.get("/tweets", (req, res) => {
    let n = tweets.length
    let response = []
    const responseArray = []
    tweets.forEach((obj) => {

        let correspondingobj = (currentUsers.find((user) => user.username === obj.username))

        const avatar = correspondingobj.avatar
        const { username, tweet } = obj


        responseArray.push({
            id: responseArray.length + 1,
            avatar,
            username,
            tweet
        })

    })

    if (n > 10) {

        response = responseArray.slice(n - 10, n)
        res.send(response)
    }
    else {
        response = responseArray
        res.send(response)
    }

})


app.listen(5000, () => console.log("App running in port 5000"))
