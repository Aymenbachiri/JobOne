"use client";

import { forwardRef, useMemo, useState } from "react";
import { cities as citiesList } from "@/lib/utils/cities-list";

type LocationInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ ...props }, ref) {
    const [locationSearchInput, setLocationSearchInput] = useState("");
    const [hasFocus, setHasFocus] = useState(false);

    const cities = useMemo(() => {
      if (!locationSearchInput.trim()) return [];

      const searchWords = locationSearchInput.split(" ");

      return citiesList
        .map((city) => `${city.name}, ${city.subcountry}, ${city.country}`)
        .filter(
          (city) =>
            city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              city.toLowerCase().includes(word.toLowerCase())
            )
        )
        .slice(0, 5);
    }, [locationSearchInput]);

    return (
      <div className="relative">
        <input
          className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Search for a city..."
          type="search"
          value={locationSearchInput}
          onChange={(e) => setLocationSearchInput(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          {...props}
          ref={ref}
        />
        {locationSearchInput.trim() && hasFocus && (
          <div className="absolute z-20 w-full divide-y rounded-b-lg border-x border-b bg-white shadow-xl">
            {!cities.length && <p className="p-3">No results found.</p>}
            {cities.map((city) => (
              <button
                key={city}
                className="block w-full p-2 text-start hover:bg-gray-200"
                onMouseDown={(e) => {
                  e.preventDefault();

                  setLocationSearchInput("");
                }}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);
