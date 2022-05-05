import './form.css';
import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <div className='separate'>
                <form>
                    <textarea className='t-area' rows="5" cols="70" placeholder='Sino— este, Ano ang nasa isip mo haaa? Yiee!'>
                    
                    </textarea>

                    <div className='buttons'>
                        <button>Schedule Post</button>
                        <button>Post Now</button>
                    </div>
                </form>
                    
            </div>
        )
    }
}

export default Form;