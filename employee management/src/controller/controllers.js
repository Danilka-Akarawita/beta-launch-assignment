export const createEmployee = async (fullName, nameWithInital, email,mobile) => {
    const data = { fullName, nameWithInital, email, mobile};
    console.log(data);
    const response = await fetch(
      `http://localhost:5000/api/employee/insertEmployee`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    const user = await response.json();
    console.log(user);
    return user;
  };

  export const getUsers = async () => {
    const response = await fetch(
      `http://localhost:5000/api/employee/`
    );
    const users = await response.json();
    return users;
  };

export const deleteEmployee = async (id) => {
  
  console.log(id)
  const response=await fetch(`http://localhost:5000/api/employee/delete/${id}`)
  const json=await response.json()
  {
    method: "DELETE"
    
  }

  }