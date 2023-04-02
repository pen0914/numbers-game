import { useState } from "react";

export const useOnChangeUser = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChangeValue = (e) =>
    setValue(e.target.value);

  return [value, onChangeValue];
};
