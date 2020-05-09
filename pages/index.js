import Head from "next/head"
import styled from "styled-components"

const SplashPageWrapper = styled.div`
  h1 {
    font-size: 10vw;
    text-align: center;
  }
`
const WelcomePage = (props) => (
  <>
    <Head>
      <title>CINEPLEX STOREFRONT</title>
    </Head>
    <SplashPageWrapper>
      <h1>TEST</h1>
    </SplashPageWrapper>
  </>
)

export default WelcomePage
