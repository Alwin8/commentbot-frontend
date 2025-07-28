async function makeToken(code:string){
    const backend=import.meta.env.VITE_BACKEND
    const ApiUrl=backend+"/api/connectinstagram"
    return fetch(ApiUrl,{
        method: 'POST',
        headers: 
        {
         'Content-Type': 'application/json' // tells the server you're sending JSON
        },
        body: JSON.stringify(
        {
          'code':code
        })
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        const data=response.json()
        return data; // read response body
    })

}
export default makeToken;