const Dog = ({ name, temperament, image: { url } }) => (
  <div className="dog">
    <img src={url} alt="dog" width="300" />
    <h5> {name}</h5>
  </div>
);

export default Dog;
