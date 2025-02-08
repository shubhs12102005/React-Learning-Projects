import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('');

    const uppercase = () => {
        let up = text.toUpperCase();
        setText(up);
        props.showAlert("Converted to Uppercase!", "success");
    };

    const lowercase = () => {
        let low = text.toLowerCase();
        setText(low);
        props.showAlert("Converted to Lowercase!", "success");
    };

    const reset = () => {
        setText(' ');
    };

    const copy = () => {
        window.navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!!!", "success");
    };

    const handleonchange = (e) => {
        setText(e.target.value);
    };

    // These are the variables (used to show the word characteristics)
    const wordCount = (text.length === 0) ? 0 : text.split(/\s+/).filter((element) => element.length !== 0).length;
    const charCount = (text.length === 0) ? 0 : text.split('').filter((element) => element !== ' ').length;
    const minutesRead = 0.008 * text.split(" ").filter((element) => element.length !== 0).length;
    const preview = (text.length == 0) ? "Nothing to Preview": text

    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.title}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        value={text}
                        placeholder='Enter a message'
                        rows="4"
                        onChange={handleonchange}
                    ></textarea>
                </div>

                <div>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={uppercase}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={lowercase}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={reset}>Reset Text</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={copy}>Copy Text</button>
                </div>
            </div>

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Message Summary:</h1>
                <p>
                    <b>
                        <li>{wordCount} Words, {charCount} Characters</li>
                    </b>
                </p>
                <p>
                    <b>
                        <li>{minutesRead} Minutes Read</li>
                    </b>
                </p>
                <h2>Preview</h2>
                <p>{preview}</p>
            </div>
        </>
    );
}

export default TextForm;
