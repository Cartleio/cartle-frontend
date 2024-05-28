import React, { useState, useEffect, ChangeEvent } from "react";
import { Country, State, City } from "country-state-city";

interface Props {
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  onCountryChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

interface CountryData {
  isoCode: string;
  name: string;
}

interface StateData {
  isoCode: string;
  name: string;
}

interface CityData {
  name: string;
}

const CountryStateCity: React.FC<Props> = ({
  selectedCountry,
  selectedState,
  selectedCity,
  onCountryChange,
  onStateChange,
  onCityChange,
}) => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [states, setStates] = useState<StateData[]>([]);
  const [cities, setCities] = useState<CityData[]>([]);
  const [selectedCountryName, setSelectedCountryName] = useState<string>("");

  useEffect(() => {
    setCountries(
      Country.getAllCountries().map((country) => ({
        isoCode: country.isoCode,
        name: country.name,
      }))
    );
  }, []);

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    setSelectedCountryName(countryName);
    onCountryChange(countryName);
    const countryCode = countries.find(
      (country) => country.name === countryName
    )?.isoCode;
    if (countryCode) {
      setStates(
        State.getStatesOfCountry(countryCode).map((state) => ({
          isoCode: state.isoCode,
          name: state.name,
        }))
      );
      onStateChange("");
      setCities([]);
    }
  };

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const stateName = e.target.value;
    onStateChange(stateName);
    const selectedState = states.find((state) => state.name === stateName);
    if (selectedState) {
      const selectedCountry = countries.find(
        (country) => country.name === selectedCountryName
      );
      if (selectedCountry) {
        setCities(
          City.getCitiesOfState(
            selectedCountry.isoCode,
            selectedState.isoCode
          ).map((city) => ({ name: city.name }))
        );
      }
      onCityChange("");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* COUNTRY */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          id="country"
          name="country"
          className="focus:outline-none px-3 bg-white border border-[#E7E7E7] focus:border-[#FF7600] pr-3 h-12 rounded-md"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* STATE */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <select
          id="state"
          name="state"
          className={`focus:outline-none px-3 bg-white border border-[#E7E7E7] focus:border-[#FF7600] h-12 rounded-md ${
            !selectedCountry && "pointer-events-none"
          }`}
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry}
        >
          <option value="" disabled={!selectedCountry}>
            {selectedCountry
              ? "Choose an Option"
              : "Please Select a Country First"}
          </option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* CITY */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <select
          id="city"
          name="city"
          className={`focus:outline-none bg-white border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md ${
            !selectedState && "pointer-events-none"
          }`}
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          disabled={!selectedState}
        >
          <option value="" disabled={!selectedState}>
            {selectedState ? "Choose an Option" : "Please Select a State First"}
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryStateCity;
