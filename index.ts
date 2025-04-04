import axios from 'axios';

// Generate Token
export const getToken = async (): Promise<string> => {
    try {
        interface TokenResponse {
            access_token: string;
        }

        const response = await axios.post<TokenResponse>(
            'https://ims-na1.adobelogin.com/ims/token/v2',
            null, // No request body required for this call
            {
                params: {
                    grant_type: 'client_credentials',
                    client_id: 'bc4db24a1ce845fcbe8c99d30048af8f',
                    client_secret: 'p8e-kAGpnGo7V5_fcRORbY4YwmPh7Oz-Vxte',
                    scope: 'openid,AdobeID,read_organizations,additional_info.projectedProductContext,session'
                },
                headers: {
                    'Cookie': 'ftrset=82; relay=55e8da71-d2a2-4c85-9fc4-42bfa77cefe3',
                }
            }
        );

        const token: string = response.data.access_token;
        console.log('Token:', token); // Log the token
        return token;
    } catch (error) {
        console.error('Error fetching token:', error);
        throw new Error('Failed to fetch token');
    }
};