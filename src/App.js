import './App.css';

function App() {
  return (
    <div className='formContainer'>
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div class="uiForm">
          <div class="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder='ユーザー名' name='username' />
          </div>
          <div class="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder='メールアドレス' name='mailAddress' />
          </div>
          <div class="formField">
            <label>パスワード</label>
            <input type="text" placeholder='パスワード' name='password' />
          </div>
          <button class="submitButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
