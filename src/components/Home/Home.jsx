import "./Home.css"
import SearchForm from "../SearchForm/SearchForm"
import { useContext } from "react"
import HomeContext from "../Contexts/HomeContext"
import Preloader from "../Preloader/Preloader"
import NewsCard from "../NewsCard/NewsCard"
export default function Home() {
    const { isLoading, searchResults, visibleCardsLimit, handleLoadMore, apiErrors } = useContext(HomeContext)
    return (
        <>
            <div className="home">
                <img className="home__background" src="images/background_image.jpeg" alt="background image for NewsExplorer" />
                <div className="home__background-overlay"></div>
                <div className="home__search">
                    <h1 className="home__title">
                        What&apos;s going on in the world?
                    </h1>
                    <p className="home__para">
                        Find the latest on any topic and save them in your personal account.
                    </p>
                    <SearchForm />
                </div>
            </div>

            <Preloader isLoading={isLoading} />

            {
                !isLoading ?
                    searchResults && searchResults.length > 0 ? <div className="search-results">
                        <h2 className="search-results__title">Search results</h2>
                        <div className="search-reasults__cards">
                            <NewsCard data={searchResults} visibleCardsLimit={visibleCardsLimit} />
                        </div>
                        {
                            searchResults.length > visibleCardsLimit && <div className="search-results__more">
                                <button className="search-results__more-btn" onClick={() => handleLoadMore(searchResults)}>Show more</button>
                            </div>
                        }
                    </div>
                        : !searchResults.length > 0 && apiErrors.isError &&
                        <div className="not-found">
                            <svg className="not-found__icon" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="36.5" stroke="#D1D2D6" />
                                <path d="M63 63L82.5 82.5" stroke="#D1D2D6" />
                                <path d="M52.3283 49.959C48.6606 45.6979 43.2275 42.9998 37.1642 42.9998C31.1009 42.9998 25.6678 45.6979 22 49.959" stroke="#D1D2D6" />
                                <circle cx="49.5" cy="27.5" r="1.5" fill="#D1D2D6" />
                                <circle cx="24.5" cy="27.5" r="1.5" fill="#D1D2D6" />
                            </svg>
                            <h2 className="not-found__title">{apiErrors.errorTitle}</h2>
                            <p className="not-found__para">
                                {apiErrors.errorMessage}
                            </p>
                        </div>
                    : ""
            }
        </>
    )
}