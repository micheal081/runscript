const axios = require('axios');

async function runCronJob() {
  try {
    console.log("script started")
    const nestJsUrl = 'http://127.0.0.1:3000';
    const response = await axios.get(`${nestJsUrl}/instagram/getInstagramDetails?limit=300000`, {
      timeout: 888885000, 
    });
    console.log("script finished")
    console.log('Cron job triggered:', response.data);
  } catch (error) {
    console.error('Error triggering cron job:', error.message);
  }
}

runCronJob();
