import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const BookList = ()=>{
  return (
    <section className='bookList'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = ()=>{
  return (
  <article className='book'>
    this is not a book
      <Image/>
      <Title/>
      <Author/>
  </article>
  )
}

const Image = ()=>{
  return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" />
}

const Title = ()=>{
  return <h1>Percy Jackson</h1>
}

const Author=()=>{
  return <h4>The author</h4>
}

ReactDom.render(<BookList/>,document.getElementById('root'));