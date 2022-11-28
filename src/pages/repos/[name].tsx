import { useRouter } from "next/router";
import React from "react";
import { useGetRepositoryByNameQuery } from "../../store/api";

type Props = {};

function ReposDetail({}: Props) {
  const router = useRouter();
  const name = router.query.name;


  const { isLoading, data } = useGetRepositoryByNameQuery(name as string);

  if(isLoading) {
    return <div>Loading...</div>
  }

  console.log('data', data)
  

  return <div>repos with {name}</div>;
}

export default ReposDetail;
