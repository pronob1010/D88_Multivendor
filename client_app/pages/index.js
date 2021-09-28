import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Index/footer';
import Header from './components/Index/header'
import MainContent from './components/Index/maincontent';
import Sidebar from './components/Index/aside';

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer/>
      <Sidebar />
    </div>
  )
}
