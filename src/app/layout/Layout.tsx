import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import styles from './Layout.module.css';
import { MobileNavigation } from '@/widgets/mobile-navigation/MobileNavigation';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <MobileNavigation />

      <Footer />

    </div>
  );
}

export default Layout;