

import Header from "./header/Header";
import Footer from "./footer/Footer";



export default function Layout({ children }: React.PropsWithChildren<{}>) {


  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
