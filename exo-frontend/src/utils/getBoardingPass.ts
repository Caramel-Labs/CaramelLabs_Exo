export default async function getBoardingPass(): Promise<any> {
    const passId = {
      _id: "64ddabe6c50e42701f869076",
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
      //console.log(data, "function working");
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
  