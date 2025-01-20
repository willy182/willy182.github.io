// import { useEffect } from 'react'
import { BodyAttributes } from './components/body-attribute'
import { Header } from './components/header'
import { Menu } from './components/menu'
import { Profile } from './components/profile'
import { Resume } from './components/resume'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import './assets/vendors/themify-icons/css/themify-icons.css'
// import './assets/css/johndoe.css'
// import jqueryMin from './assets/vendors/jquery/jquery-3.4.1.min.js'
// import bootstrapBundle from './assets/vendors/bootstrap/bootstrap.bundle.js'
// import johndoe from './assets/js/johndoe.js'
// import { addScript, removeScript } from './components/utils'

function App() {
  // useEffect(() => {
  //   // Menambahkan script
  //   addScript({
  //     src: jqueryMin,
  //   });
  //   addScript({
  //     src: bootstrapBundle,
  //   });
  //   addScript({
  //     src: johndoe,
  //   });

  //   // Membersihkan script saat komponen di-unmount
  //   return () => {
  //     removeScript(jqueryMin);
  //     removeScript(bootstrapBundle);
  //     removeScript(johndoe);
  //   };
  // }, []);

  return (
    <>
      <div>
        <BodyAttributes
          attributes={[
            { name: 'data-spy', value: 'scroll' },
            { name: 'data-target', value: '.navbar' },
            { name: 'data-offset', value: '40' },
            { name: 'id', value: 'home' },
          ]}
        />
        <Header></Header>
        <Menu></Menu>
        <Profile></Profile>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
