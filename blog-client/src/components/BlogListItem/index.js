import React from "react";
import { NavLink } from "react-router-dom";

const BlogListItem = (props) => {
    return (
        <li key={props.item} className="blog-list-item">
            <section className="blog-list-item-header">
                <h4>{props.item.title}</h4>
                <span className="createdAt">{props.item.createdAt}</span>
            </section>
            <section className="blog-list-item-body">
                <div className="blog-list-item-image-wrapper">
                    <img src={props.item.image} />
                </div>
                <p>{props.item.body.substring(0, 30)} ...</p>
            </section>
            <section className="blog-list-item-footer">
                <span>Date Created: {props.item.createdAt}</span>
                <span>Read Whole Article</span>
            </section>
        </li>
    )
}

export default BlogListItem;