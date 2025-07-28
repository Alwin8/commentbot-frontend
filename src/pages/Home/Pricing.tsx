function Pricing(){
    return (
        <div className="bg-light rounded my-1">
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1 className="mb-3">Choose Your Plan</h1>
      <p className="text-muted">Simple, transparent pricing. No hidden fees.</p>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-80 text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Trial</h5>
            <h2 className="card-price">$0 <small className="text-muted">/mo</small></h2>
            <ul className="list-unstyled my-4">
              <li>✘ 100 comment dm's per month</li>
              <li>✘ Have Watermark</li>
            </ul>
            <a href="login" className="btn btn-outline-primary">Start for Free</a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-80 text-center shadow border-primary">
          <div className="card-body">
            <h5 className="card-title text-primary">Basic</h5>
            <h2 className="card-price text-primary">$10 <small className="text-muted">/mo</small></h2>
            <ul className="list-unstyled my-4">
              <li>✔ Unlimited comment replies</li>
              <li>✔ No watermark</li>
            </ul>
            <a href="login" className="btn btn-primary">Choose Basic</a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-80 text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Pro</h5>
            <h2 className="card-price">$15 <small className="text-muted">/mo</small></h2>
            <ul className="list-unstyled my-4">
              <li>✔ AI Chatbot + Comment Bot</li>
              <li>✔ Unlimited comment replies</li>
            </ul>
            <a href="#" className="btn btn-outline-primary">Coming soon</a>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}
export default Pricing