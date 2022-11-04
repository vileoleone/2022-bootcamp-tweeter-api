import express, { response } from "express";
import cors from "cors"

const app = express()
app.use(express.json())

const currentUsers = []

const user = [
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]

const tweets = [

    {
        id: 1,
        username: "bobesponja",
        tweet: "eu amo o hub"
    }

]


app.post("/sign-up", (req, resp) => {

    const { username, avatar } = req.body

    currentUsers.push({

        id: tweets.length + 1,
        username,
        avatar
    })
    /* tweets.push({

        id: tweets.length + 1,
        username,
        avatar
    }) */

    resp.send("OK")

})


app.post("/tweets", (req, resp) => {

    const { username, tweet } = req.body

    tweets.push({

        id: tweets.length + 1,
        username,
        tweet
    }) 

    resp.send("OK")

})

app.get("/tweets", (req, res) => {
    let n = tweets.length

    let response = tweets

    if (n > 10) {

        response = tweets.slice(n - 10, n)
    }

    res.send(response)

})


app.listen(5000, () => console.log("App running in port 5000"))
