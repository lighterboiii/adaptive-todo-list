/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import style from './AddTask.module.css';

const AddTask: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) => {
    const value = e.target.value;
    switch (inputName) {
      case 'name':
        setInputValue(value);
        break;
      case 'description':
        setDescription(value);
        break
      default: 
        break;  
    }
  };

  return (
    <form className={style.form} onSubmit={() => { }}>
      <fieldset className={style.form__set}>
        <input 
        type="text" 
        name="task-name" 
        value={inputValue} 
        className={style.form__input} 
        onChange={(e) => handleChange(e, 'name')} 
        placeholder="Название"
        />
        <textarea 
        name="description" 
        id="description" 
        value={description} 
        onChange={(e) => handleChange(e, 'desciption')} 
        placeholder="Описание задачи"
        >
        </textarea>
      </fieldset>
      <button className={style.form__button}>Добавить задачу</button>
    </form>
  )
};

export default AddTask;