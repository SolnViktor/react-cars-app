import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';
import classnames from 'classnames';
import {composeValidators, maxLength, required} from 'helpers/validators';
import { withErrorFieldHOC } from './helpers';

import styles from './index.module.scss';

type TCommentField = {
  fieldName: string;
};

const WithErrorTextField = withErrorFieldHOC(TextField);

const validator = composeValidators(required, maxLength(20))

export const CommentField: FC<TCommentField> = ({ fieldName}) => {
  return (
    <div>
      <Field
        name={`${fieldName}Comment`}
        validate={validator}
        render={({ input, meta }) => (
          <WithErrorTextField
            {...{ meta, input }}
            fullWidth
            label="Комментарий"
            className={classnames({
              [styles.error__field]: meta.error && meta.touched
            })}
          />
        )}
      />
    </div>
  );
};
