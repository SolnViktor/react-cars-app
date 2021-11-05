import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthField from './AuthField';
import { useDidMound } from 'customHooks/useDidMound';
import { loginAction } from 'store/user/actions';
import style from './authForm.module.scss';
import { SubmitButton } from 'common/Button';

const AuthForm: FC = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useDidMound(() => {
    if (loginError || passwordError) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [loginError, passwordError]);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAction({ login, password }));
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Вход в систему</h1>
      <form onSubmit={onSubmitHandler} className={style.authForm}>
        <AuthField
          error={loginError}
          setError={setLoginError}
          value={login}
          setValue={setLogin}
          fieldName={'логин'}
          placeholder={'Логин'}
          type="text"
        />
        <AuthField
          error={passwordError}
          setError={setPasswordError}
          value={password}
          setValue={setPassword}
          type="password"
          fieldName={'пароль'}
          placeholder={'Пароль'}
        />
        <SubmitButton isDisabled={isDisabled}>Войти</SubmitButton>
      </form>
    </div>
  );
};

export default AuthForm;
