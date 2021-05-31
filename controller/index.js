const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbmsbdb"

});

exports.data = (req, res) => {

    // db.query("select email,pass from users", (err, results) => {
    //     if (err) throw err
    //     console.log(results);
    //     return res.render('index', {
    //         data: results,
    //         message: '',
    //         userData: null,
    //         title: 'Express'
    //     });
    // });


    return res.render('login');

};

exports.login = (req,res) =>{

    console.log("check");
    const { email,pass } = req.body;
    
    console.log("email: " + email + "\n " + "pass: "+ pass);

    db.query("select email,pass from users where email = ? and pass = ?",[email,pass], (err, results) => {
        if (err) throw err
        console.log(results);
        return res.render('home', {
            data: results,
            message: '',
            userData: null,
            title: 'Express'
        });
    });


};