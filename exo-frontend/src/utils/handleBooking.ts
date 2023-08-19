export default async function handleBooking(formData: any): Promise<any>{
    try {
      const response = await fetch("http://localhost:4000/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("Booking creation failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // You can handle the error further if needed
    }
  };
  