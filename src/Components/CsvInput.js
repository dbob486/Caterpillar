import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import { CSVReader } from 'react-papaparse'
import SearchFilter from './SearchFilter';

const csv = {} 

const handleOnDrop = (data) => {
    hours = data.map(item => {
        item.map(item => {
            return(
                item[1]
            )
        })
    })
    fuel = data.map(item => {
        item.map(item => {
            return(
                item[2]
            )
        })
    })
    fuelLevel = data.map(item => {
        item.map(item => {
            return(
                item[3]
            )
        })
    })
    csv = [hours, fuel, fuelLevel]
};

const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
};

const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
};

const CsvInput = () => {
    return (
        <Center>
            <Flex flexDir='column'>
                <CSVReader
                    onDrop={handleOnDrop}
                    onError={handleOnError}
                    addRemoveButton
                    onRemoveFile={handleOnRemoveFile}
                >
                    <span>Drop CSV file here or click to upload.</span>
                </CSVReader>
                <SearchFilter />
            </Flex>
        </Center>
    )
}

module.exports(csv);
export default CsvInput;