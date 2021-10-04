
import HeaderIndex from './header';
import Footer from './footer';
import Sidebar from './aside';
import { useRouter } from 'next/dist/client/router';
import HeaderAll from './header_all';

export default function Layout({children}) {
    const router = useRouter()
    // console.log(router.pathname);
    let head;
    if (router.pathname == '/'){
        head = <HeaderIndex />
    }
    else{
        head = <HeaderAll />
    }
    return (
        <>
            {head}
            {children}
            <Footer />
            <Sidebar />
        </>
    )
}