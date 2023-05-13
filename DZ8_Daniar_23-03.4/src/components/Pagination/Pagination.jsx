import React from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomPagination = ({ page, pageCount, type }) => {
  return (
    <>
      <Box sx={{ width: 'fit-content', margin: '0 auto', mt: '30px' }}>
        <Pagination
          variant="outlined"
          color="secondary"
          siblingCount={1}
          page={page}
          shape="rounded"
          count={pageCount}
          renderItem={(item) => (
            <PaginationItem
              sx={{ color: '#9c27b0', borderColor: '#cacaca' }}
              component={Link}
              to={type ? `/pokemons?type=${type}&page=${item.page}` : `/pokemons?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </>
  );
};

export default CustomPagination;
