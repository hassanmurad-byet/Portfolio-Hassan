import React from "react";
import "./blog.css";
const Blog = () => {
  return (
    <section  id ='blog' className="myblogss">
      <div className="myallblogs">
        <h2 className="clientHead">My BLOG </h2>

        <div className="channel">
          <div className="channel1">
            <p className="channeltxt">Travel Blog</p>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/fWY871x4-uc?si=ZDq1jt8G_32CEru5"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/SogdXu6F98c?si=_d81TYSKptGxW2nK"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/Vgwm51fXqlA?si=lGTjIU7uvOwXng7A"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/SYReT4XlbYY?si=z3d83JwkEqelqsfm"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/6ITd0ZwzXZw?si=y8ZiqsjFooiWHBSg"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="channel2">
            <p className="channeltxt">Voice Artist</p>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/tPfRECbAwhk?si=fRHtIu229rv_QEa9"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/OdjKQxmAOj8?si=pWrpNtz6fjq94ZEM"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/PDKE-NYU5X8?si=giWze_f9VP8tGN3G"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/9i7OELYT0JE?si=RvFmJbop89SbWqsk"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 hassan">
              <iframe
                className="blogvideo"
                src="https://www.youtube.com/embed/qWvaYucQpRo?si=cjSda92eohHrValY"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
