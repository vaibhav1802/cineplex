import Header from "components/elements/Header/Header.component"
import { useState, useEffect } from "react"
import Router from "next/router"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const { route, asPath } = router
  useEffect(() => {
    if (route !== "/search") {
      // Store the route of the page from where the search was originated
      sessionStorage.setItem("lastRoute", asPath)
    }
  }, [asPath])

  const [inputValue, setInputValue] = useState("")

  const onChangeSearchInput = (e) => {
    setInputValue(e.target.value)
    Router.push({
      pathname: "/search",
      query: { keyword: e.target.value }
    })
    /* When the input is empty in text input, route the user to previous page
     from where  the search was originated*/
    const lastRoute = sessionStorage.getItem("lastRoute")

    if (route === "/search" && e.target.value === "") {
      Router.push(lastRoute || "/")
    }
  }

  const onIconCloseClick = () => {
    setInputValue("")
  }

  return (
    <>
      <Header
        inputValue={inputValue}
        onChangeSearchInput={onChangeSearchInput}
        onIconCloseClick={onIconCloseClick}
      />
      <Component {...pageProps}></Component>
    </>
  )
}

export default MyApp
