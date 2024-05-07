export default function Feedback ({good, neutral, bad, total, positivePercentage}) {
    return(
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    )
}