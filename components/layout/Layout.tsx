import { Sider } from 'components/layout/Sider';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import styles from 'styles/layout/layout.module.scss';
import { useActiveToggle } from 'hooks/useActiveToggle';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: JSX.Element;
}

const { content, layout } = styles;

export const Layout = ({ children }: LayoutProps) => {
  const { isActive, handleClick } = useActiveToggle(false);

  return (
    <div className={layout}>
      <Header showButton={!isActive} callback={handleClick} />
      <Sider callback={handleClick} isActive={isActive} />
      <div className={content}>{children}</div>
      <Footer />
    </div>
  );
};
