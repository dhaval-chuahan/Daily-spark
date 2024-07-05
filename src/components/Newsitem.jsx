import React, { Component } from 'react'

export class Newsitem extends Component {
    articles = []
    render() {
        let {title,description,imageUrl,newsUrl}= this.props
         return (
            <div className="my-3 container">
                <div className="card" >
                    <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}....</p>
                        <a href={newsUrl} className="btn btn-primary" target='_blank'>Read More..</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Newsitem
