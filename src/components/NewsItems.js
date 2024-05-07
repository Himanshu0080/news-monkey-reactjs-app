import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, discripton, imageurl, newsurl, author, date ,source} = this.props;
    return (
      <div className="my-3">
        this is news item items2
        <div className="card" style={{ overflowX: "hidden" }}>
          <img
            src={
              imageurl
                ? imageurl
                : "https://images.indianexpress.com/2024/04/HPBOSE-Class-12-result-when-where.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <span style={{position:"absolute",left:"90%",top:"10px"}} class="position-absolute translate-middle badge rounded-pill bg-danger">
                {source}
               
              </span>
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{discripton}</p>
            <p className="card-text">
              <small className=" text-danger ">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
