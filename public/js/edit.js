let totalCount = 4;
let count = 0;
// let codeMirrorInstances = [];
const plusButtons = document.querySelectorAll(".main3 .plus");
const form = document.querySelector(".content_form");
const submitButton = form.querySelector(".submit-btn");

plusButtons.forEach((button) => {
	button.addEventListener("click", function (e) {
		e.preventDefault();
		const className = this.getAttribute("data-class");
		totalCount++;
		count++;
		console.log(totalCount);
		console.log(className);
		const div = document.createElement("div");
		div.className = `${className}_input_section ${
			className === "subTitle" ? "input_section" : "text_input_section"
		}`;

		if (className === "subTitle") {
			div.innerHTML = `
                <h2>${className}${count} </h2>
                <input type="text" class="subtitle_input" name="subtitle_content_${totalCount}save">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 minus" className="minusBtn">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                </svg>
            `;

			form.insertBefore(div, submitButton);
			const newMinusButton = div.querySelector(".minus");
			newMinusButton.addEventListener("click", function (e) {
				e.preventDefault();
				div.remove();
			});
		} else if (className == "code") {
			div.innerHTML = `
                <h2>${className}${count} </h2>
                <textarea
						class="${className}_input"
						name="${className}_content_${totalCount}save"
					>
                </textarea>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 minus" className="minusBtn">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                </svg>
            `;
			//Cool code mirror effect
			// let value = init(div.querySelector(`.editor${totalCount}`));
			// div.insertAdjacentHTML(
			// 	"beforeend",
			// 	`<input type="hidden" value="${value.getValue()}" name="${className}_content_save${totalCount}">`
			// );
			form.insertBefore(div, submitButton);
			const newMinusButton = div.querySelector(".minus");
			newMinusButton.addEventListener("click", function (e) {
				e.preventDefault();
				div.remove();
			});
		} else {
			div.innerHTML = `
                <h2>${className}${count} </h2>
                <textarea
						class="${className}_input"
						name="${className}_content_${totalCount}save"
						onclick="this.selectionStart = 0; this.selectionEnd = 0; this.focus();"
					>
                </textarea>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 minus" className="minusBtn">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                </svg>
            `;
			form.insertBefore(div, submitButton);
			const newMinusButton = div.querySelector(".minus");
			newMinusButton.addEventListener("click", function (e) {
				e.preventDefault();
				div.remove();
			});
		}
	});
});
///clicked
// Add a submit event listener to the form
// form.addEventListener("submit", function (e) {
// 	// Loop through all CodeMirror instances
// 	document.querySelectorAll(".editor").forEach((editor, index) => {
// 		// Get the corresponding hidden input field
// 		const hiddenInput = document.querySelector(
// 			`input[name="code_content_save${index + 1}"]`
// 		);

// 		// Update the hidden input field's value with the CodeMirror value
// 		hiddenInput.value = editor.getValue();
// 	});
// });
