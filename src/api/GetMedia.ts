async function GetMedia(token:string,page:string){
    const backend=import.meta.env.VITE_BACKEND
    const ApiUrl=backend+"/api/getMedia"
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
        const respons=await response.json();
        const data: { data: []; paging: { cursors: { after: string; before: string } }; error?: string }  = respons
        if(respons[0]=='error') throw new Error ('Instagram Connection Error')
        return data // read response body
    })

}
export default GetMedia;