import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: uuidv4(),
            text: 'This is a test from FeedbackProvider.', 
            rating: 9,
        },
        {
            id: uuidv4(),
            text: 'This is another test from FeedbackProvider.', 
            rating: 8,
        },
        {
            id: uuidv4(),
            text: 'This is another test from FeedbackProvider, again.', 
            rating: 2,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const  deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]);
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(
            (item)=> item.id === id ? { ...item, ...updItem } : item
        ))
    }
 
    return (    
            <FeedbackContext.Provider value={ 
                {
                    feedback,
                    feedbackEdit,
                    deleteFeedback,
                    addFeedback,
                    editFeedback,
                    updateFeedback
                } }>
                {children}
            </FeedbackContext.Provider>
    ) 
}

export default FeedbackContext