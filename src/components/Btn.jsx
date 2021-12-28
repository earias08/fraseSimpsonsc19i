import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = () => {
    return (
        <div className='my-5 container d-grid'>
            <Button variant="warning" size='' type='submit'className='px-5'>Obtener Frase</Button>
        </div>
    );
};

export default Btn;