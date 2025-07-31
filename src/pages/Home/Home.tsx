import React from "react";

type HomeProps = {
    changePage: (page:number) => void;
};

function Home({ changePage }: HomeProps){
    return (
        <div>
  <section className="py-5 text-center bg-white rounded m-2">
    <div className="container">
      <h1 className="display-4 fw-bold">Automate Your Instagram Comments</h1>
      <p className="lead text-muted mt-3">
        Save time and engage your audience with our smart comment bot. No code. No hassle.
      </p>
      <div className="mt-4">
        <a onClick={()=>changePage(4)} className="btn btn-primary btn-lg">Get Started</a>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container">
      <div className="row g-4 text-center">
        <div className="col-md-4">
          <div className="card">
            <h5>✅ Fast DM</h5>
            <p className="text-muted">Automatically respond to comments with predefined messages and link without any delay.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5>⚙️ Easy Setup</h5>
            <p className="text-muted">Connect your Instagram in seconds. No coding skills needed.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5>More Instagram Engagement</h5>
            <p className="text-muted">Sharing links through comments help increase instagram engagement and reach</p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
export default Home