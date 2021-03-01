import request from '../utils/requests'

const getClients = async (req) => {
  try{
    console.log(req.session)
    const userList = await request.requestQuery('clients',req.session.token)
    return userList.data
  }
  catch(error){
    const handledError =  await request.errorHandler('clients',error, req)
    return handledError.data
  }
};

export default {
  getClients
}