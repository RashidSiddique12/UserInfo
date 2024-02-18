import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function AssignTask() {
  const [taskName, setTaskName] = useState("");
  const [assignUser, setAssignUser] = useState("");
  const [date, setDate] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("api",{
        taskName,
        
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <VStack p={4}>
        <Container maxW="md">
          <FormControl>
            <FormLabel mt={4}>Assign Task</FormLabel>
            <Input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <FormLabel mt={4}>To user</FormLabel>
            <Select placeholder="Select option">
              {users &&
                users.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
            </Select>
            <FormLabel mt={4}>Due Date</FormLabel>
            <Input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Button
              colorScheme="teal"
              type="submit"
              //   onClick={handleSubmit}
              mt={4}
            >
              Submit
            </Button>
          </FormControl>
        </Container>
      </VStack>
    </>
  );
}

export default AssignTask;
