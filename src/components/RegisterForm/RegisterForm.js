import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../../redux/slices/bookApi';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [register] = useRegisterMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    await register({ name, email, password });
    form.reset();
  };

  const { form, label, input, regBtn } = styles;

  return (
    <form className={form} onSubmit={handleSubmit} autoComplete="off">
      <label className={label}>
        Username
        <input
          className={input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={label}>
        Email
        <input className={input} type="email" name="email" />
      </label>
      <label className={label}>
        Password
        <input
          className={input}
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
      </label>
      <button className={regBtn} type="submit">
        Register
      </button>
    </form>
  );
};
