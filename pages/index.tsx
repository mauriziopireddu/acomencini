import { Heading } from "components/heading";

function Home() {
  return (
    <div className="flex flex-col lg:h-screen lg:flex-row">
      <aside className="w-full bg-primary">X</aside>

      <main className="flex flex-col justify-center w-full">
        <Heading>Hi, I'm Alessandra.</Heading>
        <p>
          I'm a digital marketer.
          <br />
          Originally from Italy, currently in Ireland.
          <br />
          I’m an avid reader, dog lover and travel obsessed.
          <br />
          I'm highly organised. I write things and develop plans.
          <br />
          I'm good with numbers, but in love with colors.
          <br />A glass of prosecco, few friends and deep conversations is my
          idea of happiness.
        </p>
      </main>
    </div>
  );
}

export default Home;
