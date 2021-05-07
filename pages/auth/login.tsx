import { FC, ChangeEvent, useState, useEffect } from 'react';
import Img from 'next/image';
import { useRouter } from 'next/router';

import { useAuthDispatch, useAuthState } from 'hooks/useAuth';
import { useUser } from 'hooks/useUser';
import { Button } from 'components/common/Button';

const Login: FC = () => {
  const { replace } = useRouter();
  const { user } = useUser();
  const { error, isLoading } = useAuthState();
  const { login } = useAuthDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(email, password);
  };

  useEffect(() => {
    if (user) {
      replace('/home');
    }
  }, [user]);

  return (
    <div className="containera">
      <section>
        {error && (
          <p style={{ display: error }}>
            ¡Usuario y/o contraseña incorrecta!
            <br />
            Vuelve a intentarlo{' '}
          </p>
        )}
        <Img
          src="/images/logobx.svg"
          alt="Logo Blue Express"
          width="257"
          height="154"
        />
        <p>Bienvenido al portal Blue Express</p>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            id="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" disabled={isLoading}>
            Login
          </Button>
        </form>
      </section>
      <section>
        <p></p>
      </section>

      <style jsx>{`
        .containera {
          min-width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: space-between;
        }

        .containera > section:first-child {
          background-color: #d8d8d8;
          flex-grow: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .containera > section:first-child > p:first-child {
          position: fixed;
          top: 1%;
          padding: 0.5em;
          border: 1px solid #111;
          border-radius: 1em;
          background-color: #f2f2f2;
        }
        .containera > section:first-child > form {
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1em;
        }
        .containera section:first-child > form > label {
          align-self: flex-start;
        }
        .containera section:first-child > form > input {
          width: 257px;
          margin: 0 0 1em 0;
          padding: 0.9em;
          border: none;
          border-radius: 0.8em;
        }
        .containera section:first-child > form > button {
          color: white;
          background-color: #222;
          width: 257px;
          margin: 2em 0 0 0;
          padding: 0.9em;
          border: none;
          border-radius: 0.8em;
        }
        .containera > section:last-child {
          background-color: #e5e5e5;
          flex-grow: 1.3;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('/images/ilustracion.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Login;
