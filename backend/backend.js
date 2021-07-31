const   express     = require('express'),
        app         = express(),
        mongoose    = require('mongoose'),
        cors        = require('cors'),
        bodyParser  = require('body-parser');


const Demografico = require('./models/demograficoModel');

app.listen('5000');

app.use(express.json());

app.use(express.urlencoded({extended: false}));

// mongoose.connect('mongodb://localhost:27017/cv', {useNewUrlParser: true} );

const connection = mongoose.connection;

app.use(cors());

connection.once('open', () => console.log('Connected to Database'));

// app.get('/', (req,res) => res.send('backend page') );

// app.post('/', function(req,res) {

//     Demografico.create({
//         nombres: req.body.nombres,
//         apellidos: req.body.apellidos,
//         ocupacion: req.body.ocupacion,
//         barrio: req.body.barrio,
//         celular: req.body.celular,
//         telefono: req.body.telefono,
//         email: req.body.email,
//         licencia: req.body.licencia,
//         vehiculo: req.body.vehiculo,
//         traslado: req.body.traslado
//     }, (err,passed) => !err ? console.log('Data added') : console.log(err));
    

// } );


 