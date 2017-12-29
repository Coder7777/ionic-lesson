const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

router.render = (req, res) => {
    res.jsonp({
        Result: {
            Data: res.locals.data
        },
        Status: {
            Success: true,
            Msg: "success"
        }
    })
}