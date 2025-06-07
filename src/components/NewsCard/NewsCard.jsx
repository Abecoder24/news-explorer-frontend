import { Link, useLocation } from "react-router-dom";
import "./NewsCard.css";
import { useContext } from "react";
import HomeContext from "../Contexts/HomeContext";

export default function NewsCard({ data, visibleCardsLimit, handleArticleDelete }) {
    const location = useLocation()
    const { isLoggedIn, handleArticleSave } = useContext(HomeContext)
    return (
        <section className="cards">
            {
                data.map((mappedData, key) => {
                    if (key < visibleCardsLimit) {
                        return <Link key={"card-" + key} to={mappedData.url} target="_blank" className="card">
                            <div className="card__floating-buttons" onClick={(e) => e.preventDefault()}>
                                {
                                    location.pathname == "/saved-articles" && <span className="floating-buttons-keyword">
                                        {mappedData.keyword}
                                    </span>
                                }
                                <div className="floating-buttons__wrapper">
                                    <span className="floating-buttons__info">
                                        {
                                            location.pathname == "/saved-articles" ? "Remove from saved" : location.pathname == "/" && !isLoggedIn && "Sign in to save articles"
                                        }
                                    </span>                                    
                                    {
                                        location.pathname == "/saved-articles"
                                        ?                                        
                                        <svg className="floating-buttons__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                            handleArticleDelete(key)
                                        }}>
                                            <path className="floating-buttons__icon-path" fillRule="evenodd" clipRule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" fill="#1A1B22" />
                                        </svg>

                                        : 
                                        <svg className="floating-buttons__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                                            if (isLoggedIn) {
                                                handleArticleSave(e.target)
                                            }
                                        }}>
                                            <path className="floating-buttons__icon-path" d="M18 4V19.9424L12.6182 15.7139L12 15.2285L11.3818 15.7139L6 19.9424V4H18Z" stroke="#B6BCBF" strokeWidth="2" />
                                        </svg>
                                    }
                                </div>
                            </div>
                            <div className="card__image">
                                <div className="card__image-placeholder"></div>
                                <img src={mappedData.urlToImage} alt={"Image - " + mappedData.title} className="card__image-element" />
                            </div>
                            <div className="card__info">
                                <span className="card__date">
                                    {
                                        getThePublishDate(mappedData.publishedAt)
                                    }
                                </span>
                                <h3 className="card__title">
                                    {mappedData.title}
                                </h3>
                                <p className="card__para">
                                    {mappedData.description}
                                </p>
                                <span className="card__author">
                                    {mappedData.author}
                                </span>
                            </div>
                        </Link>
                    }
                })
            }
        </section>

    )

}
function getThePublishDate(publishTime) {
    let dateMonth = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    let d = new Date(publishTime)
    let year = d.getFullYear()
    let date = d.getDate()
    let month = dateMonth[d.getMonth()]

    return (
        `${month} ${date}, ${year}`
    )
}