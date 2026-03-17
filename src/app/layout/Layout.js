import Header from '../../widgets/header/header';
import Footer from '../../widgets/footer/footer';

function Layout({ children }) {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  );
}

export default Layout;