import BlogComponent from "../../components/BlogComponent"

function BlogPage(){
    return (
        <div className="pageviewport">
            <h1>Blogs</h1>
        <BlogComponent
        className="d-grid align-content-center justify-content-start"
        title="Boost Instagram Engagement: Automatically Send Links to Commenters with LinkBridge"
        link="/posts/linkbridge-instagram-automation.html"
        date="8/28/2025"/>
        <BlogComponent
        className="d-grid align-content-center justify-content-start"
        title="ManyChat vs LinkBridge: Which Instagram Automation Tool is Best for You?"
        link="/posts/ManyChat-vs-LinkBridge.html"
        date="8/31/2025"/>
        </div>
    )
}
export default BlogPage