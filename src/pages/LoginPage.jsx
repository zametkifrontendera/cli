import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Страница входа в систему</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Авторизоваться</button>
      </form>
    </div>
  );
};

export default LoginPage;
