import { Box } from '@mui/system'
import { CountryTypes } from '../features/countries/types'
import { Country } from './Country'

type CountriesProps = {
  countries: CountryTypes[]
}

export const Countries = ({ countries }: CountriesProps) => {
  return (
    <Box>
      {countries?.map((country: CountryTypes) => (
        <Country key={country?.name?.official} country={country} />
      ))}
    </Box>
  )
}
