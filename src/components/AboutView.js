import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text={"About"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              pariatur autem assumenda consequuntur placeat similique, harum,
              quis neque, sequi omnis dolore! Temporibus qui ducimus, at neque
              voluptatem facere. Possimus, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat, voluptates consequuntur
              minus inventore eum, nobis minima eaque voluptatum possimus
              deleniti nam cupiditate pariatur, asperiores quaerat odit vero
              error expedita debitis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
