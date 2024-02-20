import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { changeFilter } from 'components/redux/filterSlice';

const filterInputId = nanoid();

const Filter = () => {
  
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
    return (
      <div>
        <h4>Find contacts by name</h4>
        <input onChange={onChange} value={value} id={filterInputId} placeholder='Contact name'/>
      </div>
    );
  }

export default Filter;
