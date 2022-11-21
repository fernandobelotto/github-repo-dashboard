import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { IconButton, Link, useClipboard } from "@chakra-ui/react";
import React from "react";

type Props = {
  command: string;
};

function CloneRepoButton({ command }: Props) {
  const { onCopy, hasCopied } = useClipboard(`git clone ${command}`);

  return (
    <IconButton
      onClick={onCopy}
      aria-label="Clone repo command"
      size="xs"
      icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
    />
  );
}

export default CloneRepoButton;
