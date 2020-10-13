import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

// API
let formattedAPIResponse = [];

var data = [
  {
	"name": "Shadow",
	"type": "Cat",
	"breed": "Shorthair",
	"gender": "F",
	"description": "Grey cat with sass",
	"location": "Issaquah, WA",
	"properties": {
		"price": 25.50,
		"is_vaccinated": true,
		"birth_date": "2014-02-23",
		"attributes": {
			"fur": "short",
			"color": "grey",
			"eyes": "green"
		}
	},
	"tags": ["kid friendly", "quiet", "shy"]
}, 
  {
	"name": "Rex",
	"type": "Dog",
	"breed": "Boxer",
	"gender": "M",
	"description": "Puppy with potential",
	"location": "Seattle, WA",
	"properties": {
		"price": 200,
		"is_vaccinated": true,
		"birth_date": "2019-01-23T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "orange",
			"eyes": "green"
		}
	},
	"tags": ["puppy", "affectionate", "kid friendly"]
}, 
  {
    "name": "Tiger",
    "type": "Cat",
    "breed": "Tabby",
    "gender": "F",
    "description": "Older cat with patience",
    "location": "Seattle, WA",
    "properties": {
      "price": 25,
      "is_vaccinated": true,
      "birth_date": "2013-05-13T12:00:00.000Z",
      "attributes": {
        "fur": "long",
        "color": "orange",
        "eyes": "green"
      }
    },
    "tags": ["affectionate", "kid friendly"]
  },
  {
	"name": "Joe",
	"type": "Cat",
	"breed": "Siamese",
	"gender": "M",
	"description": "Kitten with voice",
	"location": "Bellevue, WA",
	"properties": {
		"price": 135,
		"is_vaccinated": true,
		"birth_date": "2019-01-11T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "white",
			"eyes": "grey"
		}
	},
	"tags": ["vocal", "ornery"]
},
  {
    "name": "Josie",
    "type": "Cat",
    "breed": "Tabby",
    "gender": "F",
    "description": "Kitten",
    "location": "Bellevue, WA",
    "properties": {
      "price": 80,
      "is_vaccinated": false,
      "birth_date": "2019-01-31T12:00:00.000Z",
      "attributes": {
        "fur": "short",
        "color": "black",
        "eyes": "blue"
      }
    },
    "tags": ["quiet", "shy"]
  },
  {
	"name": "Joseph",
	"type": "Dog",
	"breed": "Welsh Corgi",
	"gender": "M",
	"description": "Loyal Corgi",
	"location": "Bellevue, WA",
	"properties": {
		"price": 280,
		"is_vaccinated": true,
		"birth_date": "2014-08-10T12:00:00.000Z",
		"attributes": {
			"fur": "medium",
			"color": "orange and white",
			"eyes": "brown"
		}
	},
	"tags": ["lap dog", "vocal"]
}, 
  {
    "name": "Jor",
    "type": "Dog",
    "breed": "German Shepherd",
    "gender": "M",
    "description": "Puppy that needs training",
    "location": "Bothell, WA",
    "properties": {
      "price": 320,
      "is_vaccinated": true,
      "birth_date": "2018-12-10T12:00:00.000Z",
      "attributes": {
        "fur": "medium",
        "color": "black",
        "eyes": "brown"
      }
    },
    "tags": ["chews", "active", "kid friendly"]
  }, 
  {
    "name": "Jon Jon",
    "type": "Cat",
    "breed": "Tabby",
    "gender": "M",
    "description": "Older lap cat",
    "location": "Kirkland, WA",
    "properties": {
      "price": 22,
      "is_vaccinated": true,
      "birth_date": "20011-11-10T12:00:00.000Z",
      "attributes": {
        "fur": "short",
        "color": "black and white",
        "eyes": "green"
      }
    },
    "tags": ["sleeps", "quiet", "kid friendly"]
  },
  {
    "name": "Janie",
    "type": "Dog",
    "breed": "Poodle",
    "gender": "F",
    "description": "Well trained companion",
    "location": "Kirkland, WA",
    "properties": {
      "price": 220,
      "is_vaccinated": true,
      "birth_date": "2017-11-10T12:00:00.000Z",
      "attributes": {
        "fur": "short",
        "color": "white",
        "eyes": "black"
      }
    },
    "tags": ["trained", "obedient", "kid friendly"]
  }
];

const formatResponse = (data) => {
  formattedAPIResponse = (data || []).map(item => {
    const attributes = item.properties && item.properties.attributes ?
      item.properties.attributes :
      {};
    const formattedPrice = Number(item.properties.price).toFixed(2);
    const newDate = item.properties.birth_date ? 
          new Date(item.properties.birth_date) :
          null;
    const age = newDate ?
          `${moment(newDate).fromNow(true)} old` :
          '';

    item.label = `${item.name} (${item.type})`;
    item.properties.priceInDollars = formattedPrice;
    item.properties.location = item.location;
    item.age = age;
    item.attributes = attributes;

    delete item.location;
    delete item.properties.attributes;

    return item;
  });
}

formatResponse(data);


// UI Components
const LabeledCheckbox = ({ id, label, onChange }) => {
  return (
    <>
      <input id={id}
        type="checkbox"
        onChange={() => onChange()}
      />
      <label for={id}>
        {label}
      </label>
    </>
  );
}

const LabeledRadio = ({ id, name, value, label, onChange }) => {
  return (
    <>
      <input id={id}
        name={name}
        type="radio"
        value={value}
        onChange={() => onChange(value)}
      />
      <label for={id}>
        {label}
      </label>
    </>
  )
}

const TypeaheadOption = ({option, selectOption}) => {
  return (
    <>
      <li>
        <button type="button" onClick={() => selectOption(option)}>
          {option.label}
        </button>
      </li>
    </>
  );
}

const TypeaheadOptions = ({options, selectOption}) => {
  return (
    <ul>
      { options.map(option => {
          return <TypeaheadOption option={option} selectOption={selectOption} />
        })
      }
    </ul>
  );
}

const TypeaheadSearch = ({id, label, handleSearchChange, options, selectOption}) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleChange = (e) => {
    handleSearchChange(e.target.value);
  }

  return (
    <>
      <label for={id}>
        {label}
      </label>
      <div>
        <input id={id}
          type="text"
          onChange={handleChange}
        />
        {options.length ?
          <TypeaheadOptions options={options} selectOption={selectOption} /> :
          null
        }    
      </div>
    </>
  );
}

const Tag = ({tag}) => {
  return (
    <span class="tag">
      {tag}
    </span>
  );
}

const VaccinationVerification = ({isVaccinated}) => {
  return (
    <span>
      Vaccinated 
      { isVaccinated ? 
        <i data-feather="checked-circle"></i> :
        <i data-feather="x-circle"></i>
      }
    </span>
  );
}

const SearchSettings = ({ toggleSearchNameRestriction, setTypeRestriction, breedOptions, setBreedRestriction }) => {
  const [breedResults, setBreedResults] = useState([]);

  const searchBreeds = (searchValue) => {
    const breedResults = (breedOptions || []).filter(breedOption => breedOption.label.includes(searchValue));

    setBreedResults(breedResults); 
  }
  
  const handleSelectBreed = (breedOption) => {
    setBreedRestriction(breedOption.label);
  }

  return (
    <>
      <h1>Search Settings</h1>
      <LabeledCheckbox
        id="search-by-name-restriction"
        label="Search by name contains"
        onChange={() => toggleSearchNameRestriction()}
      />
      <p>Limit search by pet type:</p>
      <LabeledRadio
        id="search-by-type-cats"
        name="pet-type"
        value="cat"
        label="Cats"
        onChange={setTypeRestriction}
      />
      <LabeledRadio
        id="search-by-type-dogs"
        name="pet-type"
        value="dog"
        label="Dogs"
        onChange={setTypeRestriction}
      />
      <LabeledRadio
        id="search-by-type-any"
        name="pet-type"
        value=""
        label="Any"
        onChange={setTypeRestriction}
      />
      <p>Limit search by breed:</p>
      <TypeaheadSearch id="breed-search"
        label="Search for a breed"
        handleSearchChange={searchBreeds}
        options={breedResults}
        selectOption={handleSelectBreed}
       />
    </>
  );
}

const SelectedSearchResult = ({selectedResult}) => {
  const [fur, setFur] = useState('');
  const [furColor, setFurColor] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [adoptionInfo, setAdoptionInfo] = useState({});
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const attrs = selectedResult.attributes;

    if (!attrs) return;
    if (attrs.fur) setFur(attrs.fur);
    if (attrs.color) setFurColor(attrs.color);
    if (attrs.eyes) setEyeColor(attrs.eyes);
  }, [selectedResult, setFur, setFurColor, setEyeColor])
  
  useEffect(() => {
    if (selectedResult.properties) {
      setAdoptionInfo(selectedResult.properties);
      setIsVaccinated(selectedResult.properties.is_vaccinated);
    }
  }, [selectedResult, setAdoptionInfo, setIsVaccinated])
  
  useEffect(() => {
    if (selectedResult.properties) setTags(selectedResult.tags);
  }, [selectedResult, setTags])

  useEffect(() => {
    if (selectedResult.tags) setTags(selectedResult.tags);
  }, [selectedResult, setTags])

  return (
    <>
      <h1>{selectedResult.name}</h1>
      <div>
        <p>{selectedResult.type}</p>
        <p>{selectedResult.age}</p>
        <p>{selectedResult.gender}</p>
        <p>{selectedResult.breed}</p>
      </div>
      <div>
        <p>Description</p>
        <p>{selectedResult.description}</p>
        <ul>
          <li>{fur}, {furColor}, fur</li>
          <li>{eyeColor} eyes</li>
        </ul>
      </div>
      <div>
        <p>Adoption Info</p>
        <p>Location: {adoptionInfo.location}</p>
        <p>Price: ${adoptionInfo.priceInDollars}</p>
        { isVaccinated ? <h1>hi</h1> : <h1>bye</h1> }
      </div>
      <div>
        {tags.map(tag => <Tag tag={tag} />)}
      </div>
    </>
  );
}

const App = ({apiResponse}) => {
  const [filterByType, setFilterByType] = useState('');
  const [breedOptions, setBreedOptions] = useState([]);
  const [breedRestriction, setBreedRestriction] = useState('');
  const [filteredAPIResponse, setFilteredAPIResponse] = useState([]);
  const [searchByNameContains, setSearchByNameContains] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPet, setSelectedPet] = useState({});

  useEffect(() => {
    let filteredResults = filterByType.length ?
        apiResponse.filter(result => result.type.toLowerCase() === filterByType) :
        apiResponse;

    filteredResults = breedRestriction.length ?
      filteredResults.filter(result => result.breed.toLowerCase() === breedRestriction) :
      filteredResults;

    setFilteredAPIResponse(filteredResults);
  }, [apiResponse, filterByType, breedRestriction, setFilteredAPIResponse])
  
  useEffect(() => {
    const uniqueBreeds = [...new Set(apiResponse.map(item => item.breed))];
    const breedOptions = uniqueBreeds.map(breed => {
      return {label: breed};
    });

    setBreedOptions(breedOptions);
  }, [apiResponse, setBreedOptions])
 
  const searchPets = (searchValue) => {
    let results = searchByNameContains ? 
       searchNameContains(searchValue) :
       searchNameStartsWith(searchValue);

    results = searchValue.length ? results : [];
    setSearchValue(searchValue);
    setSearchResults(results);
  }
  
  const searchNameStartsWith = (searchValue) => {
    return filteredAPIResponse.filter(item => {
      const name = item.name.toLowerCase();
      return name.startsWith(searchValue);
    });
  }
  
  const searchNameContains = (searchValue) => {
    return filteredAPIResponse.filter(item => {
      const name = item.name.toLowerCase();
      return name.includes(searchValue);
    });
  }
  
  const toggleSearchNameRestriction = () => {
    setSearchByNameContains(!searchByNameContains);
  }

  return (
    <>
      <SearchSettings 
        toggleSearchNameRestriction={toggleSearchNameRestriction}
        setTypeRestriction={setFilterByType}
        breedOptions={breedOptions}
        setBreedRestriction={setBreedRestriction}
      />

      <TypeaheadSearch id="pet-search"
        label="Search for a pet"
        handleSearchChange={searchPets}
        options={searchResults}
        selectOption={setSelectedPet}
      />

      { selectedPet.name ?
        <SelectedSearchResult selectedResult={selectedPet} /> :
        null
      }
    </>
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(<App apiResponse={formattedAPIResponse}/>), domContainer);
