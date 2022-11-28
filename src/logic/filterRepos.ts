export type FilterType = "all" | "source" | "fork" | "archived" | "disabled" | "template" | "private" | "public";

export const filterRepos = (repos, type: FilterType) => {
  if (type === "all") {
    return repos;
  }

  if (type === "source") {
    return repos.filter((repo) => !repo.fork);
  }

  if (type === "fork") {
    return repos.filter((repo) => repo.fork);
  }

  if (type === "archived") {
    return repos.filter((repo) => repo.archived);
  }

  if (type === "disabled") {
    return repos.filter((repo) => repo.disabled);
  }

  if (type === "template") {
    return repos.filter((repo) => repo.is_template);
  }

  if (type === "private") {
    return repos.filter((repo) => repo.private);
  }

  if (type === 'public') {
    return repos.filter((repo) => !repo.private);
  }

  return repos;
};
