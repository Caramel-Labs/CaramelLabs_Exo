export default async function getTripData(): Promise<any> {
  const tripId = {
    _id: "64ddabe6c50e42701f869076",
  };

  try {
    const response = await fetch("http://localhost:4000/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripId),
    });

    if (response.ok) {
      console.log("Data fetched successfully");
    } else {
      console.log("Data fetching failed");
    }

    const data = await response.json();
    //console.log(data, "function working");
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
