// Personal website for John Tyler
import { Box, Flex, Heading, Text, Image, Link, VStack, Button } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585076799786-cc362a32ca40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKb2huJTIwVHlsZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ0MTQzODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Tyler" mb={4} />
        <Heading as="h2" size="xl" fontWeight="bold" color="primary.800">
          John Tyler
        </Heading>
        <Text fontWeight="500" color="gray.500" mb={4}>
          Software Engineer | Web Developer | Tech Enthusiast
        </Text>
        <Text textAlign="center" color="gray.700" px={3}>
          I am a passionate software engineer with a focus on modern web technologies and a commitment to developing innovative, user-centric solutions.
        </Text>
        <VStack mt={5} spacing={3} alignItems="center">
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            <Link href="mailto:john.tyler@example.com">Email Me</Link>
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            <Link href="https://www.linkedin.com/in/johntyler" isExternal>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
            <Link href="https://github.com/johntyler" isExternal>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<FaFilePdf />} colorScheme="red" variant="solid">
            <Link href="https://johntyler.com/resume.pdf" isExternal>
              Download Resume
            </Link>
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
