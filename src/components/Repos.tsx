import { CheckIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Spinner,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { useLazyGetReposQuery } from "../store/api";
import CloneRepoButton from "./CloneRepoButton";

type Props = {};

export default function Repos({}: Props) {
  const [getRepos, { isLoading, data }] = useLazyGetReposQuery();

  return (
    <>
      <Button
        isLoading={isLoading}
        onClick={() => getRepos()}
      >
        Get Repos
      </Button>
      <SimpleGrid
        minChildWidth={300}
        columns={3}
        spacing={4}
      >
        {data?.map((repo) => (
          <Card key={repo.id}>
            <VStack
              spacing={2}
              padding={4}
            >
              <Flex
                flexWrap="wrap"
                gap={2}
              >
                <Heading size="md">{repo.name}</Heading>
                <IconButton
                  as={Link}
                  aria-label="Open Repo"
                  size="xs"
                  icon={<ExternalLinkIcon />}
                  href={repo.html_url}
                  isExternal
                />
                <CloneRepoButton command={repo.clone_url} />
              </Flex>
              <Text fontSize="sm">{repo.description}</Text>
              <Text fontSize="sm">
                Created At: {dayjs(repo.created_at).format("DD/MM/YYYY")}
              </Text>
              <Text fontSize="sm">
                Updated At: {dayjs(repo.updated_at).format("DD/MM/YYYY")}
              </Text>
            </VStack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
