export default async function getPlanetData(planetName:string): Promise<any>{
   
      try {
        const response = await fetch(`http://localhost:4000/api/planets/${planetName}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status === 200) {
          const data = await response.json()
          console.log(data)
          return data
        } else {
          console.log("Planet data fetching failed")
        }
      } catch (error) {
        console.error("An error occurred:", error)
        // You can handle the error further if needed
      }
    };
    