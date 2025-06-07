import "./AboutAuthor.css"
export default function AboutAuthor() {
    return (
        <div className="about">
            <div className="about__avatar">
                <div className="about__avatar-holder"></div>
                <img src="images/abe.jpg" alt="Author Avatar" className="about__avatar-element" />
            </div>
            <div className="about__info">
                <h2 className="about__title">About The Author</h2>
                <p className="about__para">
                    Abraham is multitalented and has a multidisciplinary mindset; aspiring to be a jack of all trade but a master of none. As someone who is always eager and to ready to learn, Abraham decided to follow his deep interest in technology.
                </p>
                <p className="about__para">
                    Through TripleTen Abraham has learned new skills. Skills that will help him as he pursue a career in the technological space.
                </p>
            </div>
        </div>
    )
}