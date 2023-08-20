export default async function getBoardingPass(): Promise<any> {
    const passId = {
        _id: "64e0d0ebaf0e95c173313169"
    };
  
    try {
      const response = await fetch("http://localhost:4000/api/user/boardingPass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passId),
      });
  
      if (response.ok) {
        console.log("Boarding pass fetched successfully");
      } else {
        console.log("Boarding pass fetching failed");
      }
  
      const data = await response.json();
     // console.log(data, "function working");
      return data
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
  