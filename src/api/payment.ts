


//This load function returns a Promise that resolves with a newly created Cashfree object once Cashfree.js has loaded. If you call load in a server environment it will resolve to null.
async function createOrder(plan: string,validity: string,customer_id:string,customer_email: string){
    const backend=import.meta.env.VITE_BACKEND
    const url=backend+"/api/createorder"
    return await fetch(url,{
        method: 'POST',
        headers: 
        {
         'Content-Type': 'application/json' // tells the server you're sending JSON
        },
        body: JSON.stringify(
        {
          'plan':plan,
          'validity':validity,
          'customer_id':customer_id,
          'customer_email':customer_email
        })
    }).then(async response=>{
      return await response.json()
    })
}
export default createOrder