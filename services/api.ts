const API_BASE_URL = "http://127.0.0.1:8000";

export async function getProducts() {

  const response = await fetch(
    `${API_BASE_URL}/products`
  );

  return response.json();

}