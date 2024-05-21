
// for submit spinner

document.querySelectorAll('.input_submit').forEach(button => {
    button.addEventListener('click', function() {
        const spinner = document.createElement('div');
        spinner.classList.add('search-spinner');
        this.innerHTML = '';
        this.appendChild(spinner);
        setTimeout(() => {
            spinner.remove();
            this.innerHTML = '<i class="fas fa-search"></i>';
        }, 8000);
    });
});

// Simulate loading time
setTimeout(() => {
    // Remove loading placeholders
    document.querySelectorAll('.loading-placeholder').forEach(el => el.remove());
    
    // Show cards
    document.querySelectorAll('.carrd').forEach(card => card.style.display = 'block');
  }, 3000); // Adjust the timeout as needed

// for like and favorite buttons
const attachToggleButtonListener = (buttons, color) => {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const icon = event.currentTarget.querySelector("i");
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
            icon.style.color = icon.classList.contains("fa-regular") ? "black" : color;
        });
    });
};

const likeButtons = document.querySelectorAll(".like");
const favoriteButtons = document.querySelectorAll(".favorite");

attachToggleButtonListener(likeButtons, "red");
attachToggleButtonListener(favoriteButtons, "orange");



// for see more buttons
function toggleExpand(button, containerClass) {
    var container = button.closest('.' + containerClass);
    var moreText = container.querySelector('.more-text');

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.innerHTML = 'see less <i class="fa-solid fa-chevron-up"></i>';
    } else {
        moreText.style.display = "none";
        button.innerHTML = 'see more <i class="fa-solid fa-chevron-down"></i>';
    }
}


// for copy buttons
// Select all elements with class "copy"
const copyButtons = document.querySelectorAll('.copy');

// Add click event listener to each button
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Find the parent card of the clicked button
    const card = button.closest('.top-quotes-cards');
    if (!card) return; // Exit if card not found

    // Find the text within the same card
    const text = card.querySelector('.t-q-text').textContent;

    // Create a textarea element to copy the text to clipboard
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

  });
});