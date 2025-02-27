import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text={"Home"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              pariatur autem assumenda consequuntur placeat similique, harum,
              quis neque, sequi omnis dolore! Temporibus qui ducimus, at neque
              voluptatem facere. Possimus, eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
