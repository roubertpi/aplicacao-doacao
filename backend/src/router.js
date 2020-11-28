const express = require ('express');
const OngControlle= require ('./controllers/OngController')
const IncidentsController = require ('./controllers/IncidentController')
const ProfileControlle= require ('./controllers/ProfileController')
const SessionControlle= require ('./controllers/SessionController')


const routes = express.Router(); 
routes.post('/sessions', SessionControlle.create)

routes.get('/ongs',OngControlle.index);
routes.post('/ongs',OngControlle.create);

routes.get('/profile',ProfileControlle.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

    

module.exports =routes;