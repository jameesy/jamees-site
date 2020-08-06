import '../styles/global.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <footer>
      {`© James Bedford ${new Date().getFullYear()}`}
    </footer>
  </>
)
