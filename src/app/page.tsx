import React from 'react';
import { Box, Card, CardHeader, Container, Flex, Heading } from '@chakra-ui/react';
import Blog from '@/app/blogs/page';

const Home: React.FC = () => {
  return (
    <Flex mt={4} mb={4}>
      <Container maxW="2xl">
        <Blog />
      </Container>
      <Box mr={8} maxW="lg" border={0}>
        <Card border={0}>
          <CardHeader>
            <Heading>Test</Heading>
          </CardHeader>
        </Card>
      </Box>
    </Flex>
  );
};

export default Home;
