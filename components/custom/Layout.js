import Header from "./Header";

// const layoutStyle = {
//     margin: 20,
//     padding: 20
// };

const Layout = (props) => (
  //style={layoutStyle}
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
