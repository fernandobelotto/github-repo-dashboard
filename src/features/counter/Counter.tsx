import {
  Button, Center,
  Heading,
  HStack
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  decrement,
  increment, selectCount
} from "./counterSlice";

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <>
      <Center
        h="100vh"
        w="100%"
      >
        <HStack
          w="100%"
          justifyContent="center"
          display="flex"
        >
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          <Heading colorScheme="purple">{count}</Heading>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </HStack>
      </Center>
    </>
  );
}