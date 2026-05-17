const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://eshop-d0hk.onrender.com";

export async function getProducts() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    console.log("Products:", data);

    return data;

  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
}