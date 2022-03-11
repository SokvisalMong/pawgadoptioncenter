import React ,{useEffect}from 'react'
import Form from '../../components/form/Form';
import Getinvolvedheader from './getinvolvedheader/Getinvolvedheader';
import GetinvolvedContent from './getinvolvedcontent/Getinvolvedcontent'

const Getinvolved = () => {

    useEffect(() => {
        document.title = "Get Involved";  
      }, []);

    return (
        <div>
            <Getinvolvedheader />
            <GetinvolvedContent />
            <Form />
        </div>
    )
}

export default Getinvolved