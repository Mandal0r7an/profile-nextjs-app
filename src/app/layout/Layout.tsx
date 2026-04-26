import Header from '../../widgets/header/header';
import Footer from '../../widgets/footer/footer';
import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;