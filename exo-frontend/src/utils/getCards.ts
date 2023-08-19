export default async function getCards(): Promise<any> {
    const userId = {
      _id: "64ddabe6c50e42701f869076",
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
  