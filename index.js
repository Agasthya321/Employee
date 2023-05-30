const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Rootroot123!',
    database: 'employeesystem'
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;


    db.query('INSERT INTO employees (name,age,gender,country, position, wage, email, phonenumber) VALUES (?,?,?,?,?,?,?,?)',
        [name, age,gender, country, position, wage, email, phonenumber],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        })

})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees" , (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Hey, your server is running")
});
