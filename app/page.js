import {
  Header,
  About,
  Testimonials,
  Services,
  Team,
  Blog,
  Contact,
  Footer,
  Portfolio,
} from "../containers";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Portfolio />
      <Testimonials />
      <Services />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
