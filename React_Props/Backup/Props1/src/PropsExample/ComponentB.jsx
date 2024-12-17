// eslint-disable-next-line no-lone-blocks
{
  /*To receive the data props must be used,
  props is a object,instead of props could use any name
  pre tag is used to debug
  */
}

let ComponentB = (props) => {
  return (
    <div>
      <h1>Component B</h1>

      <pre>{JSON.stringify(props)}</pre>
      <h3>Employee Name:{props.first_Name}</h3>
      <h4>Employee Id: {props.id}</h4>
      <h4>Location:{props.loc}</h4>
      <h4>Location:{props.loc[1]}</h4>
      <hr />
    </div>
  );
};
export default ComponentB;
