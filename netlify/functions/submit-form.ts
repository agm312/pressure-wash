import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const formData = JSON.parse(event.body || '{}')
    
    // Here you can add any additional processing like:
    // - Sending emails
    // - Storing in a database
    // - Integrating with other services
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Form submitted successfully',
        data: formData
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error processing form submission',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    }
  }
} 