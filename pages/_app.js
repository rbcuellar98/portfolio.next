import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Layout from '../components/Layout/Layout' 
import {ThemeProvider} from 'next-themes';

export default function App({ Component, pageProps }) {
  return( <Layout>
    <Component{...pageProps}/>
  </Layout>
  );
}


