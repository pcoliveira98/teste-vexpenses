const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('../config/multer');
const userController = require('./controllers/User');
const sessionController = require('./controllers/Session');
const contactController = require('./controllers/Contact');
const phoneController = require('./controllers/Phone');
const addressController = require('./controllers/Address');
const fileController = require('./controllers/File');
const authMiddleware = require('./middlewares/Auth');

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);
routes.use(authMiddleware);
routes.put('/users/', userController.update);
routes.get('/contacts', contactController.index);
routes.get('/contacts/:id', contactController.getOne);
routes.post('/contacts', contactController.store);
routes.put('/contacts/:id', contactController.update);
routes.delete('/contacts/:id', contactController.delete);
routes.post('/phones', phoneController.store);
routes.put('/contacts/phones/:id', phoneController.update);
routes.delete('/contacts/phones/:id', phoneController.delete);
// routes.post('/contacts/addresses', addressController.store);
routes.put('/contacts/addresses/:id', addressController.update);
routes.delete('/contacts/addresses/:id', addressController.delete);
routes.post('/files', upload.single('file'), fileController.store);

module.exports = routes;