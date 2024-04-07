import { Flex, Box, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <Flex p={4} alignItems="center">
      <Box>Logo</Box>
      <Spacer />
      <Box>
        <Link href="/">Home</Link>
      </Box>
      <Box ml={4}>
        <Link href="/aboutme">About Me</Link>
      </Box>
      <Box ml={4}>
        <Link href="/blogs">Blog</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
