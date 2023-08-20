export default async function getCards(): Promise<any> {
    const userId = {
      _id: "64df1d6d660b27f90c195a3a",
    };
  
    try {
      const response = await fetch("http://localhost:4000/api/payments/savedCards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userId),
      });
  
      if (response.ok) {
        console.log("Cards fetched successfully");
      } else {
        console.log("Cards fetching failed");
      }
  
      const data = await response.json();
      //console.log(data, "function working");
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
  