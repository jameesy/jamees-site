import '../styles/global.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <footer>
      {` ${new Date().getFullYear()} © James Bedford.`}
    </footer>
  </>
)
