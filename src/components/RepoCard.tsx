import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";
import BookmarkRepoButton from "./BookmarkRepoButton";
import CloneRepoButton from "./CloneRepoButton";
import OpenLinkButton from "./OpenLinkButton";
import RefreshButton from "./RefreshButton";

export function RepoCard(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      rounded="xl"
      shadow={useColorModeValue('black', 'white')}
      spacing={2}
      padding={3}
      alignItems="flex-start"
    >
      <VStack alignItems="flex-start">
        <HStack>

        <Link href={`repos/${props.repo.name}`}>
          <Heading size="md">{props.repo.name}</Heading>
        </Link>
        <Text fontSize="xs" color="gray.500">
          {props.index}
        </Text>
        </HStack>
        {props.repo.description && (
          <Box
            px={2}
            py={1}
            bg={useColorModeValue("gray.200", "gray.700")}
            rounded="md"
          >
            <Text fontSize="sm">{props.repo.description}</Text>
          </Box>
        )}
        <HStack>
          <OpenLinkButton href={props.repo.html_url} />
          <CloneRepoButton command={props.repo.clone_url} />
          <BookmarkRepoButton />
          <RefreshButton href={props.repo.url} />
          <Button
            size="xs"
            onClick={onToggle}
          >
            more
          </Button>
        </HStack>
      </VStack>
      <Collapse
        in={isOpen}
        animateOpacity
      >
        <VStack
          spacing={2}
          alignItems="flex-start"
        >
          <Tag fontSize="sm">
            Created At: {dayjs(props.repo.created_at).format("DD/MM/YYYY")}
          </Tag>
          <Tag fontSize="sm">
            Updated At: {dayjs(props.repo.updated_at).format("DD/MM/YYYY")}
          </Tag>
          <Flex
            gap={2}
            flexWrap="wrap"
          >
            {!props.repo.topics.length && <Tag fontSize="sm">No Topics</Tag>}
            {props.repo.topics.map((topic) => {
              return (
                <>
                  <Tag colorScheme="blue">{topic}</Tag>
                </>
              );
            })}
          </Flex>
        </VStack>
      </Collapse>
    </VStack>
  );
}
