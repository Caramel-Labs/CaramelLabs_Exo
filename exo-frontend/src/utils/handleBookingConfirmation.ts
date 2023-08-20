export default async function getBookingConfirmation(): Promise<any> {
    const ids = {
        bookingId: "64e0d0ebaf0e95c173313169",
        price:69
    };
  
    try {
      const response = await fetch("http://localhost:4000/api/booking/confirm", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ids),
      });
  
      if (response.ok) {
        console.log("Booking confirmation successfull");
      } else {
        console.log("Booking confirmation failed");
      }
  
      const data = await response.json();
     // console.log(data, "function working");
      return response
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
  