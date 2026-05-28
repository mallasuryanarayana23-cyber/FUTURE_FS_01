/**
 * Service to handle communication with the Node.js/Express Backend API
 */

const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? 'http://localhost:5000' : '');

export const sendContactMessage = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong. Please try again.');
    }

    return {
      success: true,
      message: data.message || 'Inquiry sent successfully!',
      data: data.data
    };
  } catch (error) {
    console.error('API Error in sendContactMessage:', error);
    return {
      success: false,
      message: error.message || 'Network connection failed. Please check your connection.'
    };
  }
};
