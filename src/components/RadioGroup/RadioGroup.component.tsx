import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useTranslations } from '../../translations/src';
import { nameToSymbol } from '../../utils/nameToSymbol';

interface Props {
  values: string[] | number[];
  defaultValue?: string;
  name: string;
  title: string;
  onValueChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  translatePrefix?: string;
}

export const RadioGroupComponent = ({
  values,
  defaultValue,
  onValueChange,
  name,
  title,
  required = false,
  translatePrefix,
}: Props) => {
  const translate = useTranslations();
  const label = `${name}-radio-group`;

  return (
    <FormControl required={required}>
      <FormLabel id={label}>{title}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={label}
        name={name}
        defaultValue={defaultValue}
        onChange={onValueChange}
      >
        {values.map((value) => (
          <FormControlLabel
            value={typeof value === 'string' ? value.toUpperCase() : value}
            control={<Radio required={required} />}
            label={
              translatePrefix ? translate(`${translatePrefix}.${nameToSymbol(value)}`) : value
            }
            key={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
