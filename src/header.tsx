import { Heading, Text, Flex, Center, Switch, useColorMode } from '@chakra-ui/react';
import * as React from 'react';

export default function Header() {

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex gap="8px" direction="column">
      <Flex justify="space-between">
        <Heading as="h1">PHP Playground</Heading>
        <Switch
          variant="colormodeswitcher"
          size="lg"
          fontSize="lg"
          isChecked={ colorMode === "light" }
          onChange={toggleColorMode}
          mr={2}
        />
      </Flex>
			<Text as="p">
				PHP Playground let you to execute basic PHP code in real time
				using WebAssembly technology.
			</Text>
			<Flex gap="24px" direction="row">
				<Center>
					<Text fontStyle="italic" href="#about" as="a">
						About PHP Playground?
					</Text>
				</Center>
			</Flex>
		</Flex>
	);
}
