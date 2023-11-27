import { useState } from "react";
function SearchBar(props: { handleChange: any }) {
  const [inputValue, SetInputValue] = useState("");

  function handleInputValue() {
    const input = document.getElementById(
      "city-input"
    ) as HTMLInputElement | null;
    if (input) {
      SetInputValue(input.value);
    }
  }

  return (
    <div>
      <input
        id="city-input"
        className="rounded text-black h-11"
        type="text"
        placeholder="Ciudad,Estado,Pais"
        onChange={handleInputValue}
        onBlur={() => {
          props.handleChange(inputValue);
        }}
      />
    </div>
  );
}

export default SearchBar;
