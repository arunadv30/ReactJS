import ComponentB from "../PropsExample2/ComponentB";

let ComponentA = () => {
  let ename = "Rahul";
  let eid = 102;
  let loc = ["Wayanad", "New Delhi", "Bangalore"];

  return (
    <div>
      <h1>Component A</h1>
      <hr />
      {/*first_Name is a property sending as a varible */}
      <ComponentB first_Name={ename} id={eid} loc={loc} />
    </div>
  );
};
export default ComponentA;
