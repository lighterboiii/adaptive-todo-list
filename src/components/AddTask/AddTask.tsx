/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import style from './AddTask.module.css';
import { useDispatch } from "react-redux";
import { addTask } from "../../services/todoSlice";

const AddTask: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = {
      id: new Date().getTime(),
      name: inputValue,
      description: description,
      completed: false,
    };
    dispatch(addTask(task));
    setInputValue('');
    setDescription('');
  }

  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
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
          className={style.form__textarea}
          value={description}
          onChange={(e) => handleChange(e, 'description')}
          placeholder="Описание задачи"
        >
        </textarea>
      </fieldset>
      <button
        disabled={!inputValue}
        className={style.form__button}
      >
        Добавить задачу
      </button>
    </form>
  )
};

export default AddTask;