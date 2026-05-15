const API_BASE_URL = "http://127.0.0.1:8000";

export async function getProducts() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();

  } catch (error) {
    console.log("FastAPI backend is not running");
    return [];
  }
}