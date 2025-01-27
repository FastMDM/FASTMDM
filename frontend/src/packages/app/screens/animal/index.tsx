import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from '../../utils/localization'

import React, { useState } from "react";
import useSWRInfinite from "swr/infinite";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 6;


export function AnimalScreen() {
  const { t } = useTranslation('common')

  const [repo, setRepo] = useState("reactjs/react-a11y");
  const [val, setVal] = useState(repo);

  const {
    data,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading
  } = useSWRInfinite(
    (index) =>
      `https://api.github.com/repos/${repo}/issues?per_page=${PAGE_SIZE}&page=${
        index + 1
      }`,
    fetcher
  );



  const issues = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  console.log('x4'); 
  console.log (JSON.stringify(data));
 
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      { JSON.stringify(data) }

      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="reactjs/react-a11y"
      />
      <button
        onClick={() => {
          setRepo(val);
          setSize(1);
        }}
      >
        load issues
      </button>
      <p>
        showing {size} page(s) of {isLoadingMore ? "..." : issues.length}{" "}
        issue(s){" "}
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "loading..."
            : isReachingEnd
            ? "no more issues"
            : "load more"}
        </button>
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? "refreshing..." : "refresh"}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues.map((issue) => {
        return (
          <p key={issue.id} style={{ margin: "6px 0" }}>
            - {issue.title}
          </p>
        );
      })}
    </div>
  );


}
