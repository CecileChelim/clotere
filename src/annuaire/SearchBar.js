import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
/** style */
import { FormSearch } from '../style/Annuaire';
import Select from 'react-select';
import {options} from '../data/cities_france'



export const SearchBar = ({ setResults }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    
    //redirect after select
    useEffect(() => {
        if(selectedOption !== null){
            //console.log(selectedOption.city);
            navigate(`/fr/notaires/ville/${selectedOption.city}`);
        }
        
    }, [selectedOption]);

    return (
        <>
            <FormSearch>
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="selectville"
            placeholder="Recherchez par ville"
            getOptionLabel={(option) => option.city}
            getOptionValue={(option) => option.city}
      />
            </FormSearch>
        </>
    );
};