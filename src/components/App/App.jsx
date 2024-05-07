import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"
import {useState, useEffect} from "react"
import css from './App.module.css'


function App() {

  const [feedback, setFeedback] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0})

    useEffect(() => {
      const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
      if (savedFeedback) {
        setFeedback(savedFeedback)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
      setFeedback((prevFeedback) => ({
        ...prevFeedback, 
        [feedbackType]: prevFeedback[feedbackType] + 1
      }))
    }

    const resetFeedback = () => {
      setFeedback({
        good: 0, 
      neutral: 0, 
      bad: 0
      })
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) *100) : 0;

  return (
    <div className={css.app}>
      <Description/>
      <Options 
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        hasFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
      
      
    </div>
  )
}

export default App
