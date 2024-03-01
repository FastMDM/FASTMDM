import { useCallback, useRef, useMemo } from "react";

import { useInfiniteListQuerySWR } from "app/hooks/use-infinite-list-query";
import { LegalList } from "app/types";

const PAGE_SIZE = 3;

export const useHomePosts = () => {
  let indexRef = useRef(0);
  const url = useCallback((index: number) => {
    indexRef.current = index;
    //return `v1/legal/feed?page=${index + 1}&limit=${PAGE_SIZE}`;
    return `http://localhost:1337api/legals?populate=deep`;
    
  }, []);

  const queryState = useInfiniteListQuerySWR<LegalList[]>(url, {
    pageSize: PAGE_SIZE,
    revalidateFirstPage: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
  });

  const newData = useMemo(() => {
    let newData: LegalList[] = [];
    if (queryState.data) {
      queryState.data.forEach((p) => {
        if (p) {
          newData = newData.concat(p);
        }
      });
    }

    return newData.filter(
      (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    );
  }, [queryState.data]);

  return {
    ...queryState,
    data: newData,
  };
};
