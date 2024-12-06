let EmployeeTable = () => {
  let emp = [
    { id: 1, name: "Rivalee", gender: "Female" },
    { id: 2, name: "Cecil", gender: "Male" },
    { id: 3, name: "Audie", gender: "Female" },
    { id: 4, name: "Bordy", gender: "Male" },
    { id: 5, name: "Claudina", gender: "Female" },
    { id: 6, name: "Tulley", gender: "Male" },
    { id: 7, name: "Petronille", gender: "Female" },
    { id: 8, name: "Fanechka", gender: "Female" },
    { id: 9, name: "Flor", gender: "Female" },
    { id: 10, name: "Donal", gender: "Male" },
    { id: 11, name: "Sophie", gender: "Non-binary" },
    { id: 12, name: "Jacintha", gender: "Female" },
    { id: 13, name: "Gherardo", gender: "Male" },
    { id: 14, name: "Kettie", gender: "Female" },
    { id: 15, name: "Richmound", gender: "Genderfluid" },
    { id: 16, name: "Tiffie", gender: "Female" },
    { id: 17, name: "Stavro", gender: "Male" },
    { id: 18, name: "Gasper", gender: "Polygender" },
    { id: 19, name: "Marline", gender: "Female" },
    { id: 20, name: "Moreen", gender: "Female" },
    { id: 21, name: "Myriam", gender: "Female" },
    { id: 22, name: "Opalina", gender: "Female" },
    { id: 23, name: "Livvyy", gender: "Female" },
    { id: 24, name: "Zebulen", gender: "Male" },
    { id: 25, name: "Reamonn", gender: "Male" },
    { id: 26, name: "Brittan", gender: "Female" },
    { id: 27, name: "Audy", gender: "Female" },
    { id: 28, name: "Lian", gender: "Female" },
    { id: 29, name: "Korrie", gender: "Female" },
    { id: 30, name: "Shirline", gender: "Female" },
    { id: 31, name: "Andrew", gender: "Male" },
    { id: 32, name: "Corabel", gender: "Female" },
    { id: 33, name: "Daffi", gender: "Female" },
    { id: 34, name: "Shayne", gender: "Male" },
    { id: 35, name: "Elsworth", gender: "Male" },
    { id: 36, name: "Kerrie", gender: "Female" },
    { id: 37, name: "Curtis", gender: "Agender" },
    { id: 38, name: "Anton", gender: "Male" },
    { id: 39, name: "Fitz", gender: "Male" },
    { id: 40, name: "Ronnie", gender: "Bigender" },
    { id: 41, name: "Molly", gender: "Female" },
    { id: 42, name: "Emlen", gender: "Male" },
    { id: 43, name: "Berni", gender: "Female" },
    { id: 44, name: "Bibby", gender: "Female" },
    { id: 45, name: "Karlee", gender: "Female" },
    { id: 46, name: "Grover", gender: "Male" },
    { id: 47, name: "Anders", gender: "Male" },
    { id: 48, name: "Garry", gender: "Male" },
    { id: 49, name: "Che", gender: "Male" },
    { id: 50, name: "Tarah", gender: "Female" },
    { id: 51, name: "Edeline", gender: "Female" },
    { id: 52, name: "Bradley", gender: "Male" },
    { id: 53, name: "Booth", gender: "Male" },
    { id: 54, name: "Pavlov", gender: "Male" },
    { id: 55, name: "Ariella", gender: "Genderfluid" },
    { id: 56, name: "Culver", gender: "Male" },
    { id: 57, name: "Minor", gender: "Genderfluid" },
    { id: 58, name: "Fin", gender: "Male" },
    { id: 59, name: "Minni", gender: "Genderqueer" },
    { id: 60, name: "Christa", gender: "Female" },
    { id: 61, name: "Rickey", gender: "Male" },
    { id: 62, name: "Mort", gender: "Male" },
    { id: 63, name: "Davis", gender: "Male" },
    { id: 64, name: "Kania", gender: "Female" },
    { id: 65, name: "Merry", gender: "Female" },
    { id: 66, name: "Alberto", gender: "Male" },
    { id: 67, name: "Rodrique", gender: "Male" },
    { id: 68, name: "Aurore", gender: "Female" },
    { id: 69, name: "Ruy", gender: "Male" },
    { id: 70, name: "Shermy", gender: "Male" },
    { id: 71, name: "Jess", gender: "Female" },
    { id: 72, name: "Giacomo", gender: "Male" },
    { id: 73, name: "Web", gender: "Male" },
    { id: 74, name: "Silas", gender: "Male" },
    { id: 75, name: "Ciro", gender: "Male" },
    { id: 76, name: "Cassi", gender: "Female" },
    { id: 77, name: "Saree", gender: "Female" },
    { id: 78, name: "Christabel", gender: "Female" },
    { id: 79, name: "Mitch", gender: "Male" },
    { id: 80, name: "Currey", gender: "Male" },
    { id: 81, name: "Lockwood", gender: "Male" },
    { id: 82, name: "Loydie", gender: "Male" },
    { id: 83, name: "Adelle", gender: "Female" },
    { id: 84, name: "Christina", gender: "Female" },
    { id: 85, name: "Jeffrey", gender: "Male" },
    { id: 86, name: "Roderic", gender: "Male" },
    { id: 87, name: "Munmro", gender: "Male" },
    { id: 88, name: "Daile", gender: "Bigender" },
    { id: 89, name: "Boniface", gender: "Male" },
    { id: 90, name: "Shaine", gender: "Male" },
    { id: 91, name: "Bill", gender: "Male" },
    { id: 92, name: "Horatio", gender: "Male" },
    { id: 93, name: "Cyndia", gender: "Female" },
    { id: 94, name: "Valida", gender: "Female" },
    { id: 95, name: "Rustie", gender: "Male" },
    { id: 96, name: "Zeke", gender: "Male" },
    { id: 97, name: "Breanne", gender: "Female" },
    { id: 98, name: "Dionis", gender: "Female" },
    { id: 99, name: "Dotti", gender: "Female" },
    { id: 100, name: "Clarisse", gender: "Female" },
  ];

  return (
    <div>
      <h1>Employee Details</h1>
      {/* <pre>{JSON.stringify(emp)}</pre> */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
