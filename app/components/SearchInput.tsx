"use client";

import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
// import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';

import "./styles.css";

type Products = Array<{
  id: number;
  name: string;
}>;

interface Props {
  products: Products;
}

export function SearchInput({ products }: Props) {

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);

    setSearchResults(() => {
      if (!searchValue) {
        return [];
      }

      console.time("search");
      const searchPattern = new RegExp(`${searchValue}`, "gi");
      const searchedProducts = products
        .slice()
        .filter((p) => p.name.match(searchPattern))
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 10)
      ;
      console.timeEnd("search");
      console.log(searchedProducts);
      // const firstTen = getFirstTenProductsSorted(searchedProducts);

      return searchedProducts.map(({ name }) => {
        return {
          label: `${name}`,
          value: `${name}`,
        };
      });
    });
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  const onSelect = (value: string) => {
    setSearchValue(value);
  };

  return (
    <AutoComplete
      style={{ width: 400 }}
      options={searchResults}
      // filterOption={false}
      // notFoundContent={null}
      // value={searchValue}
      // onSelect={onSelect}
      onSearch={handleSearch}
      // placeholder="Search the products without being tracked"
    >
      <Input
        type="search"
        // value={searchValue}
        // onChange={onChange}
        size="large"
        placeholder="Search the products without being tracked"
        suffix={
          <>
            {/* {searchValue && (
              <CloseCircleFilled
                onClick={clearSearch}
                style={{ color: 'rgba(255, 255, 255, 0.45)', cursor: 'pointer', marginRight: '8px' }}
              />
            )} */}
          </>
        }
        style={{
          backgroundColor: '#333333',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
        }}
      />
    </AutoComplete>
  )
}
