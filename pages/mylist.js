import GridMediaTile from "components/elements/GridMediaTile/GridMediaTile.component"
import { retrieveDataFromSessionStorage } from "utilities/dataPersistenceInSession"
import { useEffect, useState } from "react"
import { Layout } from "styles/global"
import Head from "next/head"

const MyList = () => {
  const [myListCollection, setMediaListCollection] = useState([])
  useEffect(() => {
    const myListCollectionSession = retrieveDataFromSessionStorage()
    if (myListCollectionSession?.length > 0) {
      setMediaListCollection(myListCollectionSession)
    }
  }, [])
  return (
    <>
      <Head>
        <title>CINEPLEX MYLIST</title>
      </Head>
      <Layout>
        {myListCollection?.length > 0 && (
          <h4 style={{ marginTop: 0 }}>Your list</h4>
        )}
        <GridMediaTile
          mediaCollectionData={myListCollection}
          customMessage={"Your list is empty."}
        />
      </Layout>
    </>
  )
}

export default MyList
