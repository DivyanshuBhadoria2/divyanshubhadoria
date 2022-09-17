import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';
 
const Navbar:React.FC = () => {
    
    return (
        <Flex bg="black" border ="4px solid green" color='#00FFA3' height = "54px" padding = "6px 12px">
            <Flex align="center">
                <Image src="/images/Solana_logo.png" height = "34px" mr={3}/>
                HackingNews
            </Flex>
            {/* <Directory/> */}
            <SearchInput/>
            <RightContent/>
        </Flex>
    );
}
export default Navbar;