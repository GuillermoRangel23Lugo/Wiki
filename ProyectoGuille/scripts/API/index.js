import  express  from 'express';
import bodyParser from 'body-parser';
import usersRuta from './rutas/users.js'

const api = express();
const PORT = 5000;

api.use(bodyParser.json());

api.use('/', usersRuta)

api.get('/', (req, res)=> {
    res.send("Hello")
})

api.listen(PORT, () => {console.log(`Server iniciado en: http://localhost:${PORT}`)} )