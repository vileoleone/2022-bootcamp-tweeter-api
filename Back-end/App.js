import express, { response } from "express";
import cors from "cors"

const app = express()
app.use(express.json())

const currentUsers = []

const responseArray = []

const tweets = []

app.post("/sign-up", (req, resp) => {

    const { username, avatar } = req.body

    currentUsers.push({

        id: currentUsers.length + 1,
        username,
        avatar
    })

    resp.send(currentUsers)
    //resp.send("OK")

})


app.post("/tweets", (req, resp) => {

    const { username, tweet} = req.body

    tweets.push({

        id: currentUsers.length + 1,
        username,
        tweet
    })

    resp.send(currentUsers)
    //resp.send("OK")

})

app.get("/tweets", (req, res) => {
    let n = tweets.length

    tweets.forEach((obj) => {

        let correspondingobj = (currentUsers.find((user) => user.username === obj.username))

        const { avatar } = correspondingobj
        const { username, tweet } = obj


        responseArray.push({
            id: responseArray.length + 1,
            avatar,
            username,
            tweet
        })

    })

    if (n > 10) {

        let response = tweets.slice(n - 10, n)
        res.send(response)
        return 
    }

   res.send(responseArray)

})


app.listen(5000, () => console.log("App running in port 5000"))
