import { useEffect, useState } from "react"
import NewsCard from "../NewsCard/NewsCard"
import "./SavedArticles.css"
export default function SavedArticles({ savedArticles, visibleCardsLimit, handleLoadMore, handleArticleDelete }) {

    const [useKeywords, setKeywords] = useState([])

    useEffect(() => {
        let theTempArray = []
        savedArticles.map(item => {
            if (!theTempArray.includes((item.keyword)?.toLowerCase())) {
                theTempArray.push((item.keyword).toLowerCase())
            }
        })
        setKeywords(theTempArray)
    }, [savedArticles])

    return (
        <>
            <div className="saved-articles">
                <span className="saved-articles__intro">
                    Saved articles
                </span>
                <h1 className="saved-articles__title">
                    Abe, you have {savedArticles.length} saved articles
                </h1>
                <span className="saved-articles__keywords">
                    {
                        useKeywords.length > 0 && <>
                            By keywords <b className="saved-articles__keywords-data">
                                {
                                    useKeywords.length > 2
                                        ?
                                        `${useKeywords[0]}, ${useKeywords[1]} and ${useKeywords.length - 2} other`
                                        :
                                        useKeywords.length == 2
                                            ?
                                            `${useKeywords[0]} and ${useKeywords[1]}`
                                            :
                                            '' + useKeywords[0]}
                            </b></>


                    }
                </span>
            </div>
            <div className="saved-articles__cards">
                {
                    <NewsCard data={savedArticles} visibleCardsLimit={visibleCardsLimit} handleArticleDelete={handleArticleDelete} />
                }
                {
                    savedArticles.length > visibleCardsLimit && <div className="saved-articles__more">
                        <button className="saved-articles__more-btn" onClick={() => handleLoadMore(savedArticles)}>Show more</button>
                    </div>
                }
            </div>
        </>
    )
}