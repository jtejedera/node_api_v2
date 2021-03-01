import request from '../utils/requests'

const getPolicies = async (req) => {
  try{
    const policyList = await request.requestQuery('policies',req.session.token)
    return policyList.data
  }
  catch(error){
    const handledError =  await request.errorHandler('policies',error, req)
    return handledError.data
  }
};

export default {
  getPolicies
}