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
        <button onClick={()=>changePage(4)} className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container">
      <div className="row g-4 text-center">
        <div className="col-md-4">
          <div className="card">
            <h2 className="h5">Instant Instagram Auto-Reply</h2><br></br>
            <p className="text-muted">Reply to comments immediately with custom DMs and links to boost engagement and conversions.</p><br></br>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h2 className="h5">No-Code Instagram Integration</h2><br></br>
            <p className="text-muted">Connect your Instagram in seconds — no coding skills required. Start automating replies with just a few clicks.</p><br></br>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h2 className="h5">Grow Instagram Engagement & Reach</h2>
            <p className="text-muted">Boost your reach by replying with links and CTAs directly in your Instagram comments. More interaction = more visibility.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
export default Home