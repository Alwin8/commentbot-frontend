import { useEffect, useState } from "react";
import { auth } from "../../firebase/config"
import createOrder from "../../api/payment"
import type { DocumentData } from "firebase/firestore";
interface Props{
  dataList?:DocumentData
}
function PlanPage(props:Props){
  type PlanKey = 'monthly' | 'semesterly' | 'yearly';
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>('yearly');
  const [cashfree,setCashFree]=useState<any>();

  const plans: Record<PlanKey, { title: string; price: string }> = {
    'monthly': { title: '1 Month Plan', price: '₹799/month' },
    'semesterly': { title: '6 Month Plan', price: '₹699/month' },
    'yearly': { title: '1 Year Plan', price: '₹499/month' },
  };

  const handlePayment=async(plan:string)=>{
    if(auth.currentUser && auth.currentUser.email){
      const order=await createOrder(plan,selectedPlan,props.dataList?.user_id,auth.currentUser?.email)
      let checkoutOptions = {
        paymentSessionId: order["payment_session_id"],
        redirectTarget: "_self",
      };
    await cashfree.checkout(checkoutOptions)
    }
  }
  useEffect(() => {
    const fetchPlansAndLoadScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';  // Replace with actual URL
      script.onload = () => {
        setCashFree(Cashfree({mode:'sandbox'}));
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };
    fetchPlansAndLoadScript();

    // Cleanup function for removing the script
    return () => {
      const script = document.querySelector('script[src="https://sdk.cashfree.com/js/v3/cashfree.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div style={styles.container}>
      <h2>Pricing</h2>
      
      <div style={styles.navbar}>
        <button 
          style={selectedPlan === 'monthly' ? styles.activeBtn : styles.btn}
          onClick={() => setSelectedPlan('monthly')}
        >
          1 Month
        </button>
        <button 
          style={selectedPlan === 'semesterly' ? styles.activeBtn : styles.btn}
          onClick={() => setSelectedPlan('semesterly')}
        >
          6 Months
        </button>
        <button 
          style={selectedPlan === 'yearly' ? styles.activeBtn : styles.btn}
          onClick={() => setSelectedPlan('yearly')}
        >
          1 Year
        </button>
        
      </div>

      <div style={styles.planCard}>
        <h3>{plans[selectedPlan].title}</h3>
        <p style={styles.price}>{plans[selectedPlan].price}</p>
        <button className="btn btn-primary" onClick={()=>handlePayment('basic')}>pay</button>
      </div>
      <br></br>
      <h6>Pay only after connecting Instagram</h6>
    </div>
  );

}
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center" as const,
    padding: "30px",
    fontFamily: "Arial",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  btn: {
    padding: "10px 20px",
    backgroundColor: "#eee",
    color:"black",
    border: "1px solid #ccc",
    cursor: "pointer",
    borderRadius: "4px",
  },
  activeBtn: {
    padding: "10px 20px",
    backgroundColor: "#D4AF37",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  planCard: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    width: "250px",
    margin: "0 auto",
  },
  price: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginTop: "10px",
  },
};


export default PlanPage