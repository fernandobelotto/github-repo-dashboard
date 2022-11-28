import { StarIcon } from "@chakra-ui/icons";
import { IconButton, useClipboard } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  bookmarked?: boolean;
};

function BookmarkRepoButton({ bookmarked = false }: Props) {

  const [bookmark, setBookmark] = useState(bookmarked);

  return (
    <IconButton
      onClick={() => setBookmark(!bookmark)}
      aria-label="Clone repo command"
      size="xs"
      icon={bookmark ? <StarIcon color="red.500" /> : <StarIcon />}
    />
  );
}

export default BookmarkRepoButton;
