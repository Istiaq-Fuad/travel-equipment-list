function Layout({ children }) {
  return (
    <div className="container">
      <div className="sub-container">{children}</div>
    </div>
  );
}

export default Layout;
