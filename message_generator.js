/**
 * Message Generator Program
 * -----------------------------
 * This program generates a random inspirational message each time it is executed.
 *
 * Features:
 * - Generates messages from three different parts: a motivational phrase,
 * a source of strength, and a call to action.
 * - Uses arrays to store a variety of options for each part of the message.
 * - Randomly selects an element from each array to create a unique message.
 * - Includes error handling for empty arrays to prevent the program from crashing.
 * - Uses template literals for easy string concatenation and readability.
 *
 * Technical Details:
 * - JavaScript is used for the logic and message generation.
 * - The program is designed to be run in a Node.js environment.
 * - No external libraries are used.
 */

const motivationalPhrases = [
    "Believe in yourself.",
    "The only way to do great work is to love what you do.",
    "Strive for progress, not perfection.",
    "Every day is a new beginning.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Small steps lead to big changes.",
    "You are capable of more than you know.",
    "Be the change you wish to see in the world.",
    "The best is yet to come.",
    "Your time is now."
];

const sourcesOfStrength = [
    "your inner strength",
    "your passion",
    "your resilience",
    "your determination",
    "your creativity",
    "your courage",
    "your loved ones",
    "your mentors",
    "your experiences",
    "your faith"
];

const callsToAction = [
    "and make it happen.",
    "and never give up.",
    "and embrace the challenges.",
    "and pursue your goals.",
    "and create your own path.",
    "and trust the process.",
    "and share your gifts.",
    "and inspire others.",
    "and live your best life.",
    "and keep moving forward."
];

/**
 * Generates a random message.
 * @returns {string} - The randomly generated inspirational message.
 * Returns an error message if any of the arrays are empty.
 */
function generateMessage() {
    // Check for empty arrays and return an error message if any are found.
    if (motivationalPhrases.length === 0 || sourcesOfStrength.length === 0 || callsToAction.length === 0) {
        return "Error: One or more message component arrays are empty.";
    }

    // Generate random indices to select elements from the arrays.
    const phraseIndex = Math.floor(Math.random() * motivationalPhrases.length);
    const sourceIndex = Math.floor(Math.random() * sourcesOfStrength.length);
    const actionIndex = Math.floor(Math.random() * callsToAction.length);

    // Construct the message using template literals for better readability.
    const message = `${motivationalPhrases[phraseIndex]}, with ${sourcesOfStrength[sourceIndex]}, ${callsToAction[actionIndex]}`;
    return message;
}

/**
 * Main function to run the program.
 * Calls the generateMessage function and prints the output to the console.
 */
function main() {
    const randomMessage = generateMessage();
    console.log(randomMessage);
}

// Call the main function to execute the program.
main();
