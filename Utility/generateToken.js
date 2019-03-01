const jwt = require('jsonwebtoken');
module.exports = {
    tokenGenerated(payload) {
        console.log("4-----payload :",payload);
        
        const jwtToken = jwt.sign({ payload }, 'secretkey', { expiresIn: '24h' });
        const obj = {
            success: true,
            message: 'Authentication successful!',
            token: jwtToken
        }
        console.log("12---utility---generatetoken----obj :",obj);      
        return obj;
    }
}