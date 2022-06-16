// import "./App.css";
import questions from "./data.js";
import Banner from "./Banner";

function App() {
  return (
    <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      <div id="faq-container">
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question id={`question-${question.id}`}>
              {question.question}
            </Banner.Question>
            <Banner.Text id={`answer-${question.id}`}>
              {question.answer}
            </Banner.Text>
          </Banner.Entity>
        ))}
      </div>
    </Banner>
  );
}

export default App;
