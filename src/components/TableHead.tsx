import { Box, Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useDispatch } from 'react-redux'
import { sortBy } from '../features/countries/countriesSlice'

export const TableHead = () => {
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    let { id } = e.target as any
    dispatch(sortBy(id))
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '0.7fr 1.5fr 0.9fr 1.4fr 0.8fr 0.7fr 0.25fr',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        borderBottom: 0.5,
        minHeight: '100px',
        backGround: 'paper',
      }}
    >
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        size='small'
        variant='text'
      >
        Flag
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        endIcon={<ArrowDropDownIcon />}
        size='small'
        variant='text'
        id='name'
        onClick={handleClick}
      >
        Name
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        endIcon={<ArrowDropDownIcon />}
        size='small'
        variant='text'
        onClick={handleClick}
        id='region'
      >
        Region
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        size='small'
        variant='text'
        id='capital'
      >
        Capital
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        endIcon={<ArrowDropDownIcon />}
        size='small'
        variant='text'
        id='population'
        onClick={handleClick}
      >
        Population
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        endIcon={<ArrowDropDownIcon />}
        id='visited'
        size='small'
        variant='text'
        onClick={handleClick}
      >
        Visited
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        color='primary'
        endIcon={<ArrowDropDownIcon />}
        id='fevourite'
        onClick={handleClick}
        size='small'
        variant='text'
      >
        Fevourite
      </Button>
    </Box>
  )
}
