import { userData, policyData, uac, auth } from '../controllers/index.js';

module.exports = (express) => {

    const apiRouter = express.Router();
    

    apiRouter.post('/login', auth.login);
    
    apiRouter.get('/clients', userData.getClients);
    apiRouter.get('/policies', policyData.policyUser);    

    return apiRouter
}