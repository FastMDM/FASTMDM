import { useCallback, useRef, useMemo } from "react";
import {Platform} from 'react-native';

import { useInfiniteListQuerySWR } from "app/hooks/use-infinite-list-query";
import { BusinessList } from "app/types";

const PAGE_SIZE = 3;

export const useBusinessList = () => {
  let indexRef = useRef(0);
  const url = useCallback((index: number) => {
    indexRef.current = index;
    //return `v1/legal/feed?page=${index + 1}&limit=${PAGE_SIZE}`;

    var url = `http://localhost:1337/api/businesses?populate=deep`;
    if (Platform.OS === 'android') url = url.replace('localhost','10.0.2.2')
    return url;

    
  }, []);

  const queryState = useInfiniteListQuerySWR<BusinessList[]>(url, {
    pageSize: PAGE_SIZE,
    revalidateFirstPage: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
  });

  console.log('x2'); 
  console.log (JSON.stringify(queryState));
  
  const newData = useMemo(() => {
    let newData: BusinessList[] = [];
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
