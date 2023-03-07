import React from "react";

function VariantOptions({variants, handleVariant}) {
  return (
    <>
      {variants.map((item, index) => {
        return (
          <label key={index} htmlFor={`variant-${item}`}>
            <input
              id={`variant-${item}`}
              type="radio"
              name="variant"
              value={item}
              onChange={(event) => handleVariant(event)}
            />
            {item}
          </label>
        );
      })}
    </>
  );
}

export default VariantOptions;
