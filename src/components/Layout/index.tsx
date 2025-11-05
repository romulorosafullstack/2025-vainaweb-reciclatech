import "./index.scss"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="main__wrapper">
      <div className="main__content">
        {children}
      </div>
    </main>
  );
};

export default Layout;