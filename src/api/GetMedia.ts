async function GetMedia(token:string,page:string){
    const ApiUrl="https://637lnk48-5000.inc1.devtunnels.ms/api/getMedia"
    return await fetch(ApiUrl,{
        method: 'POST',
        headers: 
        {
         'Content-Type': 'application/json' // tells the server you're sending JSON
        },
        body: JSON.stringify(
        {
          'token':token,
          'paging':page
        })
    })
    .then(async response => {
        if (!response.ok) throw new Error("Network response was not ok");
        const data:{'data':[],'paging':{cursors:{after:'',before:''}}}=await response.json()
        return data // read response body
    })

}
export default GetMedia;