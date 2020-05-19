import GridMediaTile from "components/elements/GridMediaTile/GridMediaTile.component"
import { retrieveDataFromSessionStorage } from "utilities/dataPersistenceInSession"
import { useEffect, useState } from "react"
import { Layout } from "styles/global"

const MyList = () => {
  const [myListCollection, setMediaListCollection] = useState([])
  useEffect(() => {
    const myListCollectionSession = retrieveDataFromSessionStorage()
    if (myListCollectionSession?.length > 0) {
      setMediaListCollection(myListCollectionSession)
    }
  }, [])
  return (
    <Layout>
      {myListCollection?.length > 0 && <h3>Your list</h3>}
      <GridMediaTile
        mediaCollectionData={myListCollection}
        customMessage={"Your list is empty."}
      />
    </Layout>
  )
}

export default MyList
