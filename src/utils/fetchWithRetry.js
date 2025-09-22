const axios = require('axios');
async function fetchWithRetry(url, options = {}, retries = 3, delay = 500, timeout = 5000){
    for(let i = 0; i<retries; i++){
        try {
            return await axios.get(url, { ...options, timeout });
        } catch (error) {
            // check if last attempt 
            if(i === retries -1) throw error;
              
            // Log retry info 
            console.log(`Retring ${url}... attempt ${i+1}`);
            
            // wait with exponential backoff before rtrying
            await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
            
        }
    }
}

module.exports = fetchWithRetry;