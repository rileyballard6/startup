export default function ReviewForm(props) {
  return (
    <>
      <div class="employee-form" id="employee-form">
        <button onclick="complete_form()" id="complete_form_button">
          Complete Form
        </button>
        <h3>{props.name}</h3>
        <div class="form_results">
          <p>Answer 1: {props.answer1}</p>
          <p>Answer 2: {props.answer2}</p>
          <p>Answer 3: {props.answer3}</p>

        </div>
      </div>
    </>
  );
}
