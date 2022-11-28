import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Code,
  IconButton,
  Link as ChakraLink,
  SimpleGrid,
} from "@chakra-ui/react";
import { useLazyGetReposQuery } from "../store/api";
import data1 from "../mock/repos.json";
import data2 from "../mock/repos2.json";
import data3 from "../mock/repos3.json";
import { RepoCard } from "./RepoCard";
import { Filters } from "./Filters";
import { filterRepos } from "../logic/filterRepos";
import { useAppSelector } from "../store";

type Props = {};

export default function Repos({}: Props) {

  const isLoading = false;

  // const [getRepos, { isLoading, data }] = useLazyGetReposQuery();

  const data = [...data1, ...data2, ...data3];

  const type = useAppSelector(state => state.filter.type)

  console.log('here is the type', type)

  return (
    <>
      <Box padding={2}>
        <Filters></Filters>
        <SimpleGrid
          minChildWidth={240}
          columns={6}
          spacing={2}
        >
          {filterRepos(data, type)?.map((repo, index) => (
            <RepoCard
              index={index}
              key={repo.id}
              repo={repo}
            ></RepoCard>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
