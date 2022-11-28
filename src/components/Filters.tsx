import { Flex, FormControl, FormLabel, HStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { popularTopics } from "../constants/topics";
import { FilterType } from "../logic/filterRepos";
import { useAppDispatch, useAppSelector } from "../store";
import { setTypeFilter } from "../store/filter.slice";

export function Filters(props) {

  const dispatch = useAppDispatch()

  const { type: typeValue } = useAppSelector(state => state.filter)

    
  const sortOptions = [
    { value: 1, label: "Name" },
    { value: 2, label: "Date" },
    { value: 3, label: "Stars" },
    { value: 4, label: "Updated at" },
    { value: 5, label: "Created at" },
  ];

  type TypeOptions = {value: FilterType; label: string}[]

  const typeOptions = [
    { value: "all", label: "All" },
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
    { value: "source", label: "Sources" },
    { value: "fork", label: "Forks" },
    { value: "archived", label: "Archived" },
    { value: "disabled", label: "Disabled" },
    { value: "template", label: "Template" },
  ];

  const topicsOptions = popularTopics.map(topic => ({
    value: topic,
    label: topic
  }))

  console.log('typevalue', typeValue)

  return (
    <Flex
      gap={2}
      flexWrap="wrap"
      w="full"
      border="1px solid"
      p={2}
      rounded="lg"
      mb="5"
    >
      <FormControl w="200px">
        <FormLabel>Type</FormLabel>
        <Select
          isClearable
          variant="filled"
          id="color-select"
          value={typeOptions.map(item => {
            if (item.value === typeValue) {
              return item
            }
          })}
          onChange={item => {
            dispatch(setTypeFilter(item.value as FilterType))
          }}
          options={typeOptions}
          placeholder="select the type"
          closeMenuOnSelect={false}
          size="sm"
        />
      </FormControl>
      <FormControl w="200px">
        <FormLabel>Sort</FormLabel>
        <Select
          isClearable
          variant="filled"
          id="color-select"
          options={sortOptions}
          placeholder="Select the sort"
          closeMenuOnSelect={false}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Topics</FormLabel>
        <Select
          isClearable
          isMulti
          variant="filled"
          id="color-select"
          name="colors"
          options={topicsOptions}
          placeholder="Select some topics"
          closeMenuOnSelect={false}
          size="sm"
        />
      </FormControl>
    </Flex>
  );
}
