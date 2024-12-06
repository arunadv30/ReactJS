let Message = () => {
  let msg = "Good Morning";
  let price = 700;
  let colors = ["Red", "Blue", "Black"];
  let emp = {
    eid: 101,
    ename: "Rahul",
  };

  return (
    <div>
      <h1>Message Component-Arrow Function</h1>
      <h2>Message Value:{msg}</h2>
      <h3>Price:{price}</h3>
      <h3>colors:{colors}</h3>
      <h3>Employee details:{JSON.stringify(emp)}</h3>
    </div>
  );
};

export default Message;
