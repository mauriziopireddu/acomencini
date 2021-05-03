import { Heading } from "components/heading";

function Home() {
  return (
    <div className="flex flex-col lg:h-screen lg:flex-row">
      <aside className="w-full bg-primary">X</aside>

      <main className="flex flex-col justify-center w-full">
        <div className="max-w-md mx-auto">
          <Heading>Hi, I'm Alessandra.</Heading>
          <p className="leading-relaxed">
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
          <p className="mt-6">Is that all? Yes.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
