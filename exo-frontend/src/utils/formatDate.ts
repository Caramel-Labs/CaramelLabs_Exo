

export default function formatDate(date: string):Array<string> {
    const options:Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
  
    const inputDate = new Date(date);
    const output= inputDate.toLocaleString("en-US", options).split(",")
     return (output)
  }
  

  