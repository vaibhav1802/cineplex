export const addDataToSessionStorage = (mediaObj) => {
  const myCollection = []
  myCollection.push(mediaObj)
  const existingData = retrieveDataFromSessionStorage()

  if (existingData?.length > 0) {
    sessionStorage.setItem(
      "cineplexMyList",
      JSON.stringify([...existingData, ...myCollection])
    )
  } else {
    sessionStorage.setItem("cineplexMyList", JSON.stringify(myCollection))
  }
}

export const retrieveDataFromSessionStorage = () => {
  const sessionMyListData = sessionStorage.getItem("cineplexMyList")
  return sessionMyListData ? JSON.parse(sessionMyListData) : null
}

export const removeDataFromSessionStorage = (mediaId) => {
  const existingData = retrieveDataFromSessionStorage()
  if (existingData?.length > 0) {
    const filteredData = existingData.filter(
      (mediaItem) => mediaItem.id !== mediaId
    )
    sessionStorage.setItem("cineplexMyList", JSON.stringify(filteredData))
  }
}

export const ifDataAlreadyInList = (id) => {
  const existingData = retrieveDataFromSessionStorage()
  if (existingData?.length > 0) {
    const itemFound = existingData.filter((mediaItem) => mediaItem.id === id)
    return itemFound?.length > 0 ? true : false
  }
}
