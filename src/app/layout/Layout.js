import Header from '../../widgets/header/header';
import Footer from '../../widgets/footer/footer';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
        <Header />
          <main className={styles.main}>
            {children}
          </main>
        <Footer />
    </div>
  );
}

export default Layout;