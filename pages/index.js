import { Box, Flex, Button, Text, Heading } from "@chakra-ui/react";
// import useAuth from "src/hooks/useAuth";
import Layout from "src/components/Layout";

const Cover = () => {
  const bgColor = "#FFF";
  return (
    <Box bgColor={bgColor}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          px={[4, 8]}
          py={[0, 20]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: "42px", md: "52px", lg: "72px" }}
            mb={4}
            fontWeight="xBold"
          >
            Bem vindo ao
            <Box>meu portifólio,</Box>
            <Box bgGradient="linear(to-l, #180ab8,#2495ff)" bgClip="text">
              Como posso te ajudar?
            </Box>
          </Heading>
          <Text fontSize={{ base: "16px", md: "20px", lg: "22px" }}>
            <Box>
              Aqui no site você poderá ver algumas tecnologias que desenvolvi!{" "}
            </Box>
            <Box>No entanto, se estiver a procura de um atendimento...</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="blue"
              variant="outline"
              size="lg"
              href="#contato"
            >
              Clique aqui!
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default function Home() {
  // const { signin } = useAuth();
  return (
    <Layout>
      <Cover />

      {/* <button onClick={() => signin()}>Entrar com github</button> */}
    </Layout>
  );
}
