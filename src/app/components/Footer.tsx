import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.400" py={8} px={4} color="white" textAlign="center">
      <Text>&copy; 2024 Layhill Tech. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
