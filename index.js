
const PORT = 4000

app.get('/',(req,res) => {
    res.status(200).json('Hey there i am ready')
})