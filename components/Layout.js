import { Box, Flex } from "@chakra-ui/layout";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  const bgColor = "#F4F6F8";

  return (
    <Box bgColor={bgColor} minH="100vh">
      <Topbar />
      <Flex flexDirection="column" pt={62}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
