import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder} :Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]

    const currentSortOrder = sortOrders.find(sort => sort.value === selectedSortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order By: { currentSortOrder?.label || 'Relevance' } </MenuButton>
            <MenuList>
                {sortOrders.map(s => 
                    <MenuItem key={s.value} value={s.value} onClick={() => onSelectSortOrder(s.value)}>{s.label}</MenuItem>)}    
            </MenuList>
        </Menu>
      )
}

export default SortSelector