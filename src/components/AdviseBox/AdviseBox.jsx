import S from './AdviseBox.module.css';
export const AdviseBox = () => {
  return (
    <div className={S.adviseBox}>
      <p>
        Чтобы зарегистрироваться нужно нажать кнопку
        &quot;Зарегистрироваться&quot; и перейти на форму регистрации
      </p>
      <p>
        Повторно нажать &quot;Зарегистрироваться&quot; без заполнения инпутов
      </p>
      <p>После этого кнопка &quot;Войти&quot; будет доступна</p>
      <p>Для логаута в правом верхнем углу есть соответствующая иконка</p>
      <p>Также логаут можно произвести из бургер меню слева</p>
    </div>
  );
};