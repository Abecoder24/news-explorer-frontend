import { createContext } from "react";

const HomeContext = createContext({
    handleSubmit: () => { },
    isLoading: false,
    searchResults: [],
    visibleCardsLimit: 4,
    searchValueGetter: {},
    searchValueSetter: () => { },
    handleLoadMore: () => { },
    handleInputChange: () => { },
    apiErrors: {
        isError: false,
        errorTitle: "",
        errorMessage: ""
    },
    isLoggedIn: false,
    handleArticleSave: () => { }
})

export default HomeContext