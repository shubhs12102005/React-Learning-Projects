import React, { useState } from 'react';

function About(props) {

    return (
        <div className='container py-3 my-2'>
            <h1 style={{
                color: props.mode === 'dark' ? 'white' : 'black'
            }}>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample"
            >


                {/* Accordion Item #1 */}
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={{
                                color: props.mode === 'dark' ? 'white' : 'black',
                                backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
                                border: `1px solid ${props.mode === 'dark' ? 'white' : 'black'}`,
                                padding: '10px',
                                marginTop: '2px'
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                        </div>
                    </div>
                </div>

                {/* Accordion Item #2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={{
                                color: props.mode === 'dark' ? 'white' : 'black',
                                backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
                                border: `1px solid ${props.mode === 'dark' ? 'white' : 'black'}`,
                                padding: '10px',
                                marginTop: '2px'
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                        </div>
                    </div>
                </div>

                {/* Accordion Item #3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={{
                                color: props.mode === 'dark' ? 'white' : 'black',
                                backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
                                border: `1px solid ${props.mode === 'dark' ? 'white' : 'black'}`,
                                padding: '10px',
                                marginTop: '2px'
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
