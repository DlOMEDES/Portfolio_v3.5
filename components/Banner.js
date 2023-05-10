import Header from "@/components/Header";

export default function Banner() {
  return (
    <section className='banner'>
      <Header />
      <div className='content'>
        {/* <p className='content_hello'>Hello</p> */}
        <h1 className='content_title'>
          <span> Diomedes Lajara.</span> <br /> A Web Developer / Designer / Freelancer
        </h1>
      </div>
    </section>
  );
}
