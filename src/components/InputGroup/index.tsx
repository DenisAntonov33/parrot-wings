import React from 'react';
import AppInput from '../AppInput';
import { KeyboardType } from 'react-native';
import { useFormValidator } from '../../hooks/useFormValidator';
import { InputField } from '../../types';

const getKeyboardType = (fieldType: string): KeyboardType => {
  switch (fieldType) {
    case 'phone':
      return 'phone-pad';
    case 'email':
      return 'email-address';
    default:
      return 'default';
  }
};

interface Props {
  fields: InputField[];
  getValidationError?: (val: boolean) => void;
  onBlur?: () => void;
  shouldValidate?: boolean;
  validationSchema?: any;
  onEndEditing?: () => void;
  onSubmit?: () => void;
  onChange: (values: InputField[]) => void;
}

const InputGroup: React.FC<Props> = (props) => {
  const shouldValidate: boolean = props.shouldValidate === true || false;
  const { fields, onChange, onSubmit, validationSchema } = props;
  const { blurHandler } = useFormValidator(validationSchema);
  const inputEl = React.useRef([]);

  const updateField = (value: string, index: number) => {
    const newFields = [...fields];
    newFields[index].value = value;
    newFields[index].error = '';
    onChange(newFields);
  };

  const updateFieldError = async (evt: any, field: string, index: number) => {
    const newFields = [...fields];

    if (shouldValidate) {
      const errMsg = await blurHandler(evt, field);
      newFields[index].error = errMsg;
    }
    onChange(newFields);
  };

  const changeFocus = (index: number) => {
    if (index !== fields.length - 1) {
      
      inputEl.current[index + 1]?.focus();
    }
  };

  const onEndEditing = (index: number) => {
    if (index === fields.length - 1) {
      onSubmit && onSubmit();
    } else {
      changeFocus(index);
    }
  };

  return (
    <>
      {fields.map((item, index) => (
        <AppInput
          secureTextEntry={
            item.field === 'password' || item.field === 'password_repeat'
          }
          key={`${item.field}_${item.label}`}
          value={item.value || ''}
          onChangeText={(value) => updateField(value, index)}
          hasCleatBtn
          keyboardType={getKeyboardType(item.field)}
          error={item.error}
          onSubmitEditing={() => onEndEditing(index)}
          onEndEditing={(evt) => updateFieldError(evt, item.field, index)}
          returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
          ref={(ref) => {
            inputEl.current.push(ref);
            return ref;
          }}
        />
      ))}
    </>
  );
};

export default InputGroup;
