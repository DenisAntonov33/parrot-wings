import React from 'react';
import * as Yup from 'yup';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import { delay } from '../constants/utils';

// Form validator state field

interface FormValidatorStateField {
  error: boolean;
  text: string;
}

interface FormValidatorStateFields {
  [key: string]: FormValidatorStateField;
}

/**
 * Form validatior
 * @param schemas Initial validation schemas
 * @param milliseconds Merge change update interval
 */
export const useFormValidator = (
  schemas: Yup.ObjectSchema<object>,
  milliseconds: number = 100
) => {
  const defaultState: FormValidatorStateFields = {};
  const [state, updateState] = React.useState<FormValidatorStateFields>(
    defaultState
  );

  let changeSeed = 0;

  const commitChange = (field: string, value: any): Promise<string> => {
    // Validate the field, then before catch, if catch before then, both will be triggered
    return Yup.reach(schemas, field)
      .validate(value)
      .then((result) => {
        commitResult(field, result);
        return '';
      })
      .catch((result) => {
        commitResult(field, result);
        return result.message;
      });
  };

  // Commit state result
  const commitResult = (field: string, result: any) => {
    let currentItem = state[field];
    if (result instanceof Yup.ValidationError) {
      // Error
      if (currentItem) {
        // First to avoid same result redraw
        if (currentItem.error && currentItem.text == result.message) return;

        // Update state
        currentItem.error = true;
        currentItem.text = result.message;
      } else {
        // New item
        const newItem: FormValidatorStateField = {
          error: true,
          text: result.message,
        };
        state[field] = newItem;
      }
    } else {
      // Success and no result, just continue
      if (currentItem == null) return;

      // Delete current state result
      delete state[field];
    }

    // Update state, for object update, need a clone
    const newState = { ...state };
    updateState(newState);
  };

  // Clear timeout seed
  const clearSeed = () => {
    if (changeSeed > 0) clearTimeout(changeSeed);
  };

  // Delay change
  const delayChange = (field: string, value: any) => {
    clearSeed();

    return delay(milliseconds, commitChange, [field, value]).then(r => {
      changeSeed = r.timer;
      return r.value;
    })
  };

  // Merge into the life cycle
  React.useEffect(() => {
    return () => {
      // clearTimeout before dispose the view
      clearSeed();
    };
  }, []);

  // Return methods for manipulation
  return {
    /**
     * Input or Textarea blur handler
     * @param event Focus event
     */
    blurHandler: (
      event: NativeSyntheticEvent<TextInputEndEditingEventData>,
      name: string
    ): Promise<string> => {
      const evt = event.nativeEvent;
      return delayChange(name, evt.text);
    },

    /**
     * Input or Textarea change handler
     * @param event Change event
     */
    changeHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = event.currentTarget;
      delayChange(name, value);
    },

    /**
     * Commit change
     */
    commitChange: commitChange,

    /**
     * State error or not
     * @param field Field name
     */
    errors: (field: string) => {
      return state[field]?.error;
    },

    /**
     * State text
     * @param field Field name
     */
    texts: (field: string) => {
      return state[field]?.text;
    },

    /**
     * Validate form data
     * @param data form data, Object.fromEntries(new FormData(form))
     */
    validate: async (data: any) => {
      try {
        clearSeed();
        return await schemas.validate(data, {
          strict: true,
          abortEarly: false,
          stripUnknown: false,
        });
      } catch (e) {
        // Reset
        const newState: FormValidatorStateFields = {};

        // Iterate the error items
        if (e instanceof Yup.ValidationError) {
          for (let error of e.inner) {
            // Only show the first error of the field
            if (newState[error.path] == null) {
              // New item
              const newItem: FormValidatorStateField = {
                error: true,
                text: error.message,
              };

              newState[error.path] = newItem;
            }
          }
        }

        // Update state
        updateState(newState);
      }

      return null;
    },
  };
};
