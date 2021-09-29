import { useEffect  } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head> 
        
        {/* <title>Home-v1 | Electro - Responsive Website Template</title> */}

        
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        
        <link rel="shortcut icon" href="/favicon.png" />

       
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet" />

        
        <link rel="stylesheet" href="/assets/vendor/font-awesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/font-electro.css" />

        <link rel="stylesheet" href="/assets/vendor/animate.css/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendor/hs-megamenu/src/hs.megamenu.css" />
        <link rel="stylesheet" href="/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css" />
        <link rel="stylesheet" href="/assets/vendor/fancybox/jquery.fancybox.css" />
        <link rel="stylesheet" href="/assets/vendor/slick-carousel/slick/slick.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" />

        
        <link rel="stylesheet" href="/assets/css/theme.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
        
        <script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
        <script src="/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
        <script src="/assets/vendor/popper.js/dist/umd/popper.min.js"></script>
        <script src="/assets/vendor/bootstrap/bootstrap.min.js"></script>

        
        <script src="/assets/vendor/appear.js"></script>
        <script src="/assets/vendor/jquery.countdown.min.js"></script>
        <script src="/assets/vendor/hs-megamenu/src/hs.megamenu.js"></script>
        <script src="/assets/vendor/svg-injector/dist/svg-injector.min.js"></script>
        <script src="/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/assets/vendor/jquery-validation/dist/jquery.validate.min.js"></script>
        <script src="/assets/vendor/fancybox/jquery.fancybox.min.js"></script>
        <script src="/assets/vendor/typed.js/lib/typed.min.js"></script>
        <script src="/assets/vendor/slick-carousel/slick/slick.js"></script>
        <script src="/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>

        
        <script src="/assets/js/hs.core.js"></script>
        <script src="/assets/js/components/hs.countdown.js"></script>
        <script src="/assets/js/components/hs.header.js"></script>
        <script src="/assets/js/components/hs.hamburgers.js"></script>
        <script src="/assets/js/components/hs.unfold.js"></script>
        <script src="/assets/js/components/hs.focus-state.js"></script>
        <script src="/assets/js/components/hs.malihu-scrollbar.js"></script>
        <script src="/assets/js/components/hs.validation.js"></script>
        <script src="/assets/js/components/hs.fancybox.js"></script>
        <script src="/assets/js/components/hs.onscroll-animation.js"></script>
        <script src="/assets/js/components/hs.slick-carousel.js"></script>
        <script src="/assets/js/components/hs.show-animation.js"></script>
        <script src="/assets/js/components/hs.svg-injector.js"></script>
        <script src="/assets/js/components/hs.go-to.js"></script>
        <script src="/assets/js/components/hs.selectpicker.js"></script>

        <script src="/assets/js/loader.js"></script>

        {/* <Load /> */}
    
        </body> 
      </Html>
    )
  }
}

export default MyDocument