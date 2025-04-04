const axios = require('axios');

//GENERETAE token
const getToken = async () => {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://ims-na1.adobelogin.com/ims/token/v2',
    params: {
      grant_type: 'client_credentials',
      client_id: 'bc4db24a1ce845fcbe8c99d30048af8f',
      client_secret: 'p8e-kAGpnGo7V5_fcRORbY4YwmPh7Oz-Vxte',
      scope: 'openid,AdobeID,read_organizations,additional_info.projectedProductContext,session'
    },
    headers: { 
     'Cookie': 'ftrset=82; relay=55e8da71-d2a2-4c85-9fc4-42bfa77cefe3',
    }
  };
  try {
    const response = await axios(config);
    const token = response.data.access_token;
    console.log('Token:', token); // Log the token to the console or do further processing
    // You can return the token or handle it as needed
    return token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error; // Handle errors appropriately in your application
  }
};
module.exports = {getToken};