function Home() {
  return (
    <div className="flex flex-col overflow-hidden lg:h-screen lg:flex-row">
      <div className="w-full bg-yellow-500">X</div>

      <div className="w-full h-full overflow-auto">
        <div className="bg-pink-600 h-64">1</div>
        <div className="bg-blue-600 h-64">2</div>
        <div className="bg-purple-600 h-64">3</div>
        <div className="bg-red-600 h-64">4</div>
        <div className="bg-yellow-600 h-64">5</div>
        <div className="bg-green-600 h-64">6</div>
      </div>
    </div>
  );
}

export default Home;
