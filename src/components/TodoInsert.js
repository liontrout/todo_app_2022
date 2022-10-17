import React, { useCallback, useState } from 'react';
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
   setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(e => {
    onInsert(value); // 함수 호출로 부모 App에 전달 todos에 todo를 생성
    setValue("");
    e.preventDefault(); // submit이벤트는 브라우저에서 새로고침을 발생시킨다
  }, [value]);
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
      <button type='submit'> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert