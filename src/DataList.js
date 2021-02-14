export default function NameList({ peopleInfo = [], clearList = (f) => f }) {
  return (
    <div className="StyleList">
      <h2>List</h2>
      <div className="Demographics">
        <select name="PeopleList" className="List" size="7">
          {peopleInfo.map((name, index) => (
            <option key={index} value={name}>
              {`${name}`}
            </option>
          ))}
        </select>
      </div>

      <button onClick={clearList}>Clear</button>
    </div>
  );
}
