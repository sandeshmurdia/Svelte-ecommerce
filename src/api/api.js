export async function throwerror(status) {
    try {
      const response = await fetch(`http://localhost:4000/api/error/${status}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: "kjbdfhdh.djbr.scrff",
        },
        
      });
      window.zipy.logError('API FETCH', `${status}`)
      return response;
    } catch (e) {
     
      console.error(e);
    }
  }
  