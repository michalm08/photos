import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { items } from '../data/items';

const Search = ({ setPhotoName, inPhoto, photoName }) => {
  const [list, setList] = useState([]);
  // const constList2 = ['alabama', 'poland', 'alegoria'];
  const constList = items;

  const [redirect, setRedirect] = useState(false);
  const [word, setWord] = useState('');

  if (redirect) {
    return <Redirect to={'/photos'} />;
  }

  const submit = (e) => {
    if (e.target) {
      e.preventDefault();
      setPhotoName(e.target.firstChild.value);
    } else {
      setPhotoName(e);
    }
    setWord('');
    setList([]);

    if (!inPhoto) setRedirect(true);
  };

  const change = (e) => {
    setWord(e.target.value);

    let filterList = constList.filter((item) => {
      const regex = new RegExp(`^${e.target.value}`, 'g');
      return item.match(regex);
    });

    setList(filterList);
    if (e.target.value.length <= 2) {
      setList([]);
    }
  };
  const remove = () => {
    setWord('');
    setList([]);
  };

  return (
    <div className='search'>
      <i className='fas fa-search'></i>
      <form onSubmit={submit}>
        <input
          id='textInput'
          type='text'
          placeholder='Search free hish resolution photos'
          value={word}
          onChange={change}
          autoComplete='off'
        />
      </form>
      {word !== '' && <i onClick={remove} className='fas fa-times'></i>}

      <div className='itemList'>
        <ul>
          {list.length === 0 && word.length >= 3 ? (
            <div className='noClickElem'>
              <li>Nic</li>
            </div>
          ) : (
            list.map((item) => (
              <div key={item} className='clickElem'>
                <li onClick={() => submit(item)}>{item}</li>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
