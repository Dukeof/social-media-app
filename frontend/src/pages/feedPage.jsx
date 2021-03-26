import * as React from 'react';
import { Box } from 'grommet';

import Navi from '../components/navi';
import Posts from '../components/posts';
import SearchBar from '../components/searchBar';




const FeedPage = () => (
    <>
      <Navi />
      <Box flex direction='row' height='large' margin='large'>
        <SearchBar />
        <Posts />  
      </Box>
    </>
);

export default FeedPage;