import React from "react";

interface BlogPostPreviewProps {
  link: string;
  title: string
  date: string | Date;
  className:string
}

const BlogComponent: React.FC<BlogPostPreviewProps> = ({ link, title, date ,className}) => {


  return (
    <a href={link}>
    <div className={"blog-post-preview "+className} >
      <h2 className="preview-title">{title}</h2>
      <div className="preview-meta">
        {new Date(date).toLocaleDateString()}
      </div>
    </div>
    </a>
  );
};

export default BlogComponent;
