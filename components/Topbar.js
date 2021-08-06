import { Box, Flex } from "@chakra-ui/react";

const Topbar = () => {
  const bgColor = "#FAFAFA";
  const color = "#1A202C";
  const borderColor = "#DDD";

  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={99999}
      bgColor={bgColor}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        maxW="1200px"
        margin="0 auto"
        h="60px"
        px={[4, 8]}
      >
        <Box>pablowinter.io</Box>
        <Box>login</Box>
      </Flex>
    </Flex>
  );
};
export default Topbar;
