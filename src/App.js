import FetchAPI from "./Components/FetchAPI";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <FetchAPI />
    </div>
  );
}

export default App;

{
  /* {prodArray[4].title} */
}
{
  /* {prodArray.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>
            {item.description}, {item.price}
          </p>
        </div>
      ))} */
}
{
  /* Display it in a table */
}
{
  /* <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {prodArray.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <img
                  src={item.thumbnail}
                  alt="I am a thumbnail"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */
}
