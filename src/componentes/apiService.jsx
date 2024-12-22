const API_BASE_URL = 'https://web-production-4880.up.railway.app';

// Agregar el token manualmente aquí
const manualToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0ODkzNjk1LCJpYXQiOjE3MzQ4OTMzOTUsImp0aSI6ImEwMmJmMmFjN2FlMDRhYmFiMjNiNzk3OThmNzY3NTFiIiwidXNlcl9pZCI6Mn0.68uR7bXpMQAEHzXUrNnOy4Y7EtTJtLMBJ4702_9L76o';

// Realizar una solicitud a la API con el token manual
export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${manualToken}`, // Usar el token manual
        ...options.headers,
      },
    });

    if (response.status === 401) {
      throw new Error('Token expirado o no autorizado.');
    }

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};
