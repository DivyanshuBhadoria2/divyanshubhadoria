import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import {SearchIcon } from '@chakra-ui/icons';
import React from 'react';

type SearchInputProps = {
    // user:
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex flexGrow={1} mr={2} ml={10} alignItems="center">
            <InputGroup color='#000000'>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='black' mb={1.5}/>}
                />
                <Input placeholder='Search HackerNews' fontSize="12pt" 
                _placeholder={{color: "gray.500"}}
                _hover={{
                    bg: "while",
                    border: "1px solid",
                    borderColor: "solid green",
                }}
                height="34px"
                bg="gray.50"
                />
            </InputGroup>
        </Flex>
    );
}
export default SearchInput;