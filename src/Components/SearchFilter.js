import React, { useState } from 'react';
import { Center, Input } from '@chakra-ui/react';
import { csv } from './CsvInput'

const SearchFilter = () => {
    const [name, setName] = useState('');
    state = {
        filter: "",
        data: csv
    };

    const handleChange = event => {
        setName({ filter: event.target.value });
    };

        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return (
            <Center>
                <Input value={filter} placeholder='Search' onChange={handleChange} />
                {filteredData.map(item => (
                    <div key={item.email}>
                        <div>
                            {item.fname} {item.lname} - {item.gender} - {item.email}
                        </div>
                    </div>
                ))}
            </Center>
        );
}

export default SearchFilter;