import { ExternalLinkIcon, RepeatIcon } from "@chakra-ui/icons";
import { IconButton, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

type Props = {
  href: string;
};

const RefreshButton = (props: Props) => {
  const handleGetData = () => {
    fetch(props.href)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <IconButton
      aria-label="refresh Repo"
      size="xs"
      icon={<RepeatIcon />}
      onClick={handleGetData}
    />
  );
};

export default RefreshButton;
