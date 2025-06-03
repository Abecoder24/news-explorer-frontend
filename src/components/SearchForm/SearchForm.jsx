import { useContext } from "react"
import "./SearchForm.css"
import HomeContext from "../Contexts/HomeContext"
export default function SearchForm() {
    const { handleSubmit, isLoading, searchValueGetter, searchValueSetter, handleInputChange } = useContext(HomeContext)
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" name="search" className="search__input" placeholder="Enter topic" value={searchValueGetter.q} onChange={(e) => handleInputChange(e, "q", searchValueSetter)} />
            <input type="submit" value={isLoading ? "Searching..." : "Search"} className="search__submit" />
        </form>
    )
}