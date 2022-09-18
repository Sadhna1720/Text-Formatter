import React from 'react'

function About(props) {
  return (
    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <blockquote className=" container blockquote text-center border border-{color: props.mode === 'dark' ? 'white' : 'black' }" Style="margin-top:50px;">
        <h2 Style="font-weight:700;margin-top:20px;margin-bottom:30px;">About</h2>
        <p className="mb-5 ">
          <p>It is a Single Page web-application which we can use to
          change the format of text.</p><p>In which we can do many
          operations with text, operations like changing the
          mode of the background,</p> <p>change the case of text like
          upper case to lowercase and vice-versa, remove
          extra spaces,</p><p> count number of words and characters,
          clear all text, copy text.</p> 
        </p>
        <footer class="blockquote-footer">By <cite title="Source Title">Sadhna</cite></footer><br />
      </blockquote>
    </div>
  )
}

export default About;
