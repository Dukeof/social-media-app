import React from 'react';
import styled from 'styled-components';
import search_icon from '../../../Assets/images/svg/search_icon.svg';

const SearchbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left {
    .search {
      display: flex;
      align-items: center;
      img {
        height: 25px;
        width: 25px;
        margin-right: 20px;
      }
      input {
        border: none;
        height: 25px;
        font-size: 1rem;
        outline: none;
        background-color: transparent;
      }
    }
  }
  .right {
    width: 20%;
    .links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #a9a9a9;
      }

      a.active {
        color: #000;
      }
    }
  }
`;

const SearchBar = () => {
    return (
      <SearchbarContainer>
        <div className='left'>
          <div className='search'>
            <img src={search_icon} alt='' />
            <input type='text' placeholder='Search Posts ...' />
          </div>
        </div>
        <div className='right'>
          <div className='links'>
            <a href='#' class='active'>
              All
            </a>
            <a href='#'>Liked</a>
            <a href='#'>Friends</a>
            <a href='#'>Follow</a>
          </div>
        </div>
      </SearchbarContainer>
    );
  }
  export default SearchBar;