import React from "react";
import { Box, Flex, Text } from "rebass";
import Video from "./components/Video";

const App: React.FC = () => {
  return (
    <Box m={3}>
      <Flex mx={-2}>
        <Box width={1 / 2} px={2}>
          <Video />
        </Box>
        <Box width={1 / 2} px={2}>
          <Text p={1} color="background" bg="primary">
            Какие-то комментрии тут
          </Text>
          <textarea />
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
