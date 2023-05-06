import Header from "@/components/Header";

export default function Banner() {
  return (
    <section className='banner'>
      <Header />
      <div className='content'>
        <p className='content_hello'>Hello</p>
        <h1 className='content_title'>
          <span> I'm Diomedes Lajara,</span> <br /> a Web Developer specializing
          Frontend User Interfaces using WordPress and ReactJS.
        </h1>
      </div>
    </section>
  );
}
