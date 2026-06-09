import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import styles from './Layout.module.css';

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

      <Footer />

    </div>
  );
}

export default Layout;