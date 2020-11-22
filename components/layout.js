import Meta from "../components/meta";
import Header from "../components/custom/Header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
