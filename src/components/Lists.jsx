import {
  Box,
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function Lists() {
  const [userData, setUserData] = useState([
    { id: 1, name: "John", email: "john@gmail.com", number: 9608232121, task : "abc", dueDate : "20/2/2024" },
    { id: 2, name: "Sam", email: "sam@gmail.com", number: 9632232121, task : "xyz", dueDate : "22/2/2024" },
    { id: 3, name: "Sam", email: "sam@gmail.com", number: 9632232121, task : "pqr", dueDate : "24/2/2024" },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("api")
  //     .then((res) => {
  //       setUserData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Box mt={4}>
      <Center><Heading color="teal">User Details</Heading></Center>
      <TableContainer mt={4}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Assiged Task</Th>
              <Th>Due Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData &&
              userData.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.number}</Td>
                  <Td>{user.task}</Td>
                  <Td>{user.dueDate}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Lists;

// {
//   userData && userData.map((user)=>(

//   ))
// }
