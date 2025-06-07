import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedArticles from "../SavedArticles/SavedArticles";
import HomeContext from "../Contexts/HomeContext";
import Home from "../Home/Home";
import { searchArticles, getSavedArticles } from "../../utils/api";
import "./App.css"
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import HeaderContext from "../Contexts/HeaderContext";
import ModalContext from "../Contexts/ModalContext";
import ModalWithAlert from "../ModalWithAlert/ModalWithAlert";


export default function App() {

    //User Hook
    const [useIsLoggedIn, setIsLoggedIn] = useState(false)

    //Form Hook
    const [useFormData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [useFormValidation, setFormValidation] = useState({
        form: {
            isValid: false,
            msg: ""
        },
        username: {
            isValid: false,
            msg: ""
        },
        email: {
            isValid: false,
            msg: ""
        },
        password: {
            isValid: false,
            mag: ""
        }
    })

    //Modal Hook
    const [useActiveModal, setActiveModal] = useState("")

    //Search Page Hooks
    const [useSearchHook, setSearchHook] = useState({
        q: ""
    })
    const [useSearchResults, setSearchResults] = useState([])
    const [useIsSearching, setIsSearching] = useState(false)
    const [useVisibleCardsLimit, setVisibleCardsLimit] = useState(4)

    //News API Hooks
    const [useApiErrors, setApiErrors] = useState({
        isError: false,
        errorTitle: "",
        errorMessage: ""
    })

    //Saved Article Hook
    const [useSavedArticles, setSavedArticles] = useState([])

    //Show Modal
    function showModal(modalName) {
        setActiveModal(modalName)
    }
    //Clear Modal
    function clearModal() {
        setActiveModal("")
    }

    //Handle Search
    function handleSearch(e) {
        e.preventDefault()
        if (useSearchHook.q == "") {
            return;
        }
        setIsSearching(true)
        searchArticles(useSearchHook.q).then(res => {
            if (res?.status == "ok") {
                if (res.articles.length > 0) {
                    setSearchResults(res.articles)
                } else {
                    setApiErrors({
                        isError: true,
                        errorTitle: "Nothing found",
                        errorMessage: "Sorry, but nothing matched your search terms."
                    })
                    setSearchResults([])
                }
            } else {
                setApiErrors({
                    isError: true,
                    errorTitle: "News API not working",
                    errorMessage: "Unable to get a valid response from the API."
                })
                setSearchResults([])
            }
            setIsSearching(false)
        }).catch(err => {
            setApiErrors({
                isError: true,
                errorTitle: "News API Error",
                errorMessage: "Encountered an Error while getting results form API."
            })
            console.error(err)
            setIsSearching(false)
        })
        //reset visibleCardsLimit
        setVisibleCardsLimit(4)
    }

    //Handle Input Change
    function handleInputChange(e, key, setter) {
        setter((oldData) => (
            {
                ...oldData,
                [key]: e.target.value
            }
        ))
    }

    //Handle Article Save
    function toggleArticleSave(elem) {
        if (elem.classList.contains("card--saved")) {
            elem.classList.remove("card--saved")
        } else {
            elem.classList.add("card--saved")
        }
    }

    //Delete Article from SavedArticles
    function handleArticleDelete(index) {
        setSavedArticles(useSavedArticles.filter((articles, key) => key != index))
    }

    //get SavedArticles
    useEffect(() => {
        getSavedArticles().then(data => {
            if (data) {
                setSavedArticles(data)
            }
        }).catch(console.error)
    }, [])

    //handle Login 
    function handleLogin() {
        if (useFormValidation.email.isValid && useFormValidation.password.isValid) {
            console.log({
                email: useFormData.email,
                password: useFormData.password
            })
        }
    }
    //handle Register
    function handleRegister() {
        if (useFormValidation.email.isValid && useFormValidation.password.isValid && useFormValidation.username.isValid) {
            setActiveModal("registrationSuccessful")
            console.log({
                username: useFormData.username,
                email: useFormData.email,
                password: useFormData.password
            })
        }
    }
    //Handle Load More Results
    function handleLoadMore(data) {
        setVisibleCardsLimit(getter => {
            if (data.length > getter) {
                return getter + 4
            }
            return getter
        })
    }

    //toggleMobileMenu
    function toggleMobileMenu() {
        let navElement = document.getElementsByClassName('nav__list')[0]
        if (navElement.classList.contains('nav__mobile--active')) {
            navElement.classList.remove("nav__mobile--active")
        } else {
            navElement.classList.add("nav__mobile--active")
        }
    }

    //Update form Validation
    useEffect(() => {
        //validating Email
        if (useFormData.email.length > 0) {
            if (useFormData.email.includes('@') && useFormData.email.includes('.')) {
                setFormValidation(oldData => ({
                    ...oldData,
                    email: {
                        isValid: true,
                        msg: ""
                    }
                }))
            } else {
                setFormValidation(oldData => ({
                    ...oldData,
                    email: {
                        isValid: false,
                        msg: "Email not working"
                    }
                }))
            }
        } else {
            setFormValidation(oldData => ({
                ...oldData,
                email: {
                    isValid: false,
                    msg: ""
                }
            }))
        }

        //validating Password
        if (useFormData.password.length > 0) {
            if (useFormData.password.length > 8 && useFormData.password.length <= 18) {
                setFormValidation(oldData => ({
                    ...oldData,
                    password: {
                        isValid: true,
                        msg: ""
                    }
                }))
            } else if (useFormData.password.length < 8) {
                setFormValidation(oldData => ({
                    ...oldData,
                    password: {
                        isValid: false,
                        msg: "Password is too short"
                    }
                }))
            } else if (useFormData.password.length > 18) {
                setFormValidation(oldData => ({
                    ...oldData,
                    password: {
                        isValid: false,
                        msg: "Password is too long"
                    }
                }))
            }
        } else {
            setFormValidation(oldData => ({
                ...oldData,
                email: {
                    isValid: false,
                    msg: ""
                }
            }))
        }


        //validating Username
        if (useFormData.username.length > 0) {
            if (useFormData.username.length >= 3 && useFormData.username.length <= 18) {
                setFormValidation(oldData => ({
                    ...oldData,
                    username: {
                        isValid: true,
                        msg: ""
                    }
                }))
            } else if (useFormData.username.length < 3) {
                setFormValidation(oldData => ({
                    ...oldData,
                    username: {
                        isValid: false,
                        msg: "Username is too short"
                    }
                }))
            } else if (useFormData.username.length > 18) {
                setFormValidation(oldData => ({
                    ...oldData,
                    username: {
                        isValid: false,
                        msg: "Username is too long"
                    }
                }))
            }
        } else {
            setFormValidation(oldData => ({
                ...oldData,
                username: {
                    isValid: false,
                    msg: ""
                }
            }))
        }
    }, [useFormData])


    return (
        <div className="content">
            <HeaderContext.Provider value={
                {
                    showModal,
                    toggleMobileMenu,
                    activeModal: useActiveModal
                }
            }>
                <Header />
            </HeaderContext.Provider>
            <main className="main">
                <Routes>
                    <Route path="/" element={
                        <HomeContext.Provider value={
                            {
                                handleSubmit: handleSearch,
                                isLoading: useIsSearching,
                                searchResults: useSearchResults,
                                visibleCardsLimit: useVisibleCardsLimit,
                                searchValueGetter: useSearchHook,
                                searchValueSetter: setSearchHook,
                                handleLoadMore,
                                handleInputChange,
                                apiErrors: useApiErrors,
                                isLoggedIn: useIsLoggedIn,
                                handleArticleSave: toggleArticleSave
                            }
                        }>
                            <Home />
                            <AboutAuthor />
                        </HomeContext.Provider>
                    }>
                    </Route>
                    <Route path="/saved-articles" element={
                        <SavedArticles savedArticles={useSavedArticles} visibleCardsLimit={useVisibleCardsLimit} handleLoadMore={handleLoadMore} getSavedArticles={getSavedArticles} handleArticleDelete={handleArticleDelete} />
                    }></Route>
                </Routes>
            </main>
            <ModalContext.Provider value={
                {
                    showModal,
                    clearModal,
                    formSetter: setFormData,
                    formGetter: useFormData,
                    formValidation: useFormValidation,
                    handleLogin,
                    handleRegister,
                    handleInputChange
                }
            }>
                {useActiveModal == "sign in" && <LoginModal />}
                {useActiveModal == "sign up" && <RegisterModal />}
                {useActiveModal == "registrationSuccessful" && <ModalWithAlert title={"Registration successfully completed!"} modalSwitch="Sign in" />}
            </ModalContext.Provider>
            <Footer />
        </div>
    )
}