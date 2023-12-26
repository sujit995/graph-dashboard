import {
  Box,
  Divider,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdPeople,
  MdCalendarToday,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";

const Sidebar = () => {

  return (
    <Box w="200px" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.800", "white")} p="4">
      <Text fontSize="lg" mb={2} fontWeight="bold">
        Menu
      </Text>
      <Divider mb={4} borderColor={useColorModeValue("gray.300", "gray.600")} />
      <List spacing={3}>
        <ListItem cursor="pointer">
          <ListIcon as={MdDashboard} fontSize="xl" />
          Dashboard
        </ListItem>
        <ListItem cursor="pointer">
          <ListIcon as={MdAssignment} fontSize="xl" />
          Tasks
        </ListItem>
        <ListItem cursor="pointer">
          <ListIcon as={MdPeople} fontSize="xl" />
          Users
        </ListItem>
        <ListItem cursor="pointer">
          <ListIcon as={MdCalendarToday} fontSize="xl" />
          Calendar
        </ListItem>
        <ListItem cursor="pointer">
          <ListIcon as={MdInsertDriveFile} fontSize="xl" />
          Files
        </ListItem>
        <ListItem cursor="pointer">
          <ListIcon as={MdAnalytics} fontSize="xl" />
          Analytics
        </ListItem>
        <ListItem cursor="pointer">
          <ListIcon as={MdSettings} fontSize="xl" />
          Settings
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
