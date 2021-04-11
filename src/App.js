import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './Components/ColorModeSwitcher';
import CsvInput from './Components/CsvInput';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ColorModeSwitcher />
        <CsvInput />
      </Box>
    </ChakraProvider>
  );
}

export default App;
