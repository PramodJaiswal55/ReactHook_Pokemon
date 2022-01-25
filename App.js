import jsonData from "./pokemon.json";
import _ from "underscore";

export default function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Weaknesses</th>
            <th>Next Evolution</th>
          </tr>
        </thead>
        <tbody>
          {_.sortBy(jsonData.pokemon, "name").map((item, index) => {
            return (
              <tr key={item.name + index}>
                <td>{item.name}</td>
                <td>{item.num}</td>
                <td>
                  {item.type?.map((item, index) => {
                    return <span key={item + index}>{", " + item} </span>;
                  })}
                </td>
                <td>{item.height}</td>
                <td>{item.weight}</td>
                <td>
                  {item.weaknesses?.map((item, index) => {
                    return <span key={item + index}>{", " + item} </span>;
                  })}
                </td>
                <td>
                  {item.next_evolution?.map((item) => {
                    return (
                      <span key={item.num + item.name}>
                        {", " + item.num + " " + item.name}{" "}
                      </span>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
