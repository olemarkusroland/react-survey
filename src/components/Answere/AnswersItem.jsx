/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { colourRating, spendTime, text, name, email }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <div>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colourRating}</span>
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </div>
        <div>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{text}</span>
        </div>
      </article>
    </li>
  );
}
