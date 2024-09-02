import axios from "axios";

export async function getHomestays() {
  try {
    // const response = await axios.get("http://localhost:8000/v1/homestays");
    const response = await axios.get(
      "https://63c66c75d307b7696738bca3.mockapi.io/api/v1/homestays",
    );

    return response; //use response.data if using local server
  } catch (error) {
    console.log(error);
  }
}
