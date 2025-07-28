const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000';

export async function fetchData(endpoint: string): Promise<string> {
  const response = await fetch(`${apiBaseUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  console.log('Build mode',import.meta.env.MODE);
  console.log('API Base URL:', apiBaseUrl);

  const contentType = response.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    return response.json();
  } else {
    return response.text();
  }
}