import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    formControl: {
        marginLeft: theme.spacing(2),
        minWidth: 150,
    },
}));

const Filter: React.FC = () => {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <div className={classes.filterContainer}>
            <IconButton aria-label="filter">
                <FilterListIcon />
            </IconButton>
            <FormControl className={classes.formControl}>
                <InputLabel id="filter-label">Filter By</InputLabel>
                <Select
                    labelId="filter-label"
                    id="filter"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Filter;
