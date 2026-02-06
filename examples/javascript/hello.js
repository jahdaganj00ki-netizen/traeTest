/**
 * Simple Hello World Example for TRAE IDE
 * 
 * This is a basic JavaScript example to demonstrate how to use this repository
 * with TRAE IDE.
 */

/**
 * Generate a greeting message
 * @param {string} name - The name of the person to greet
 * @returns {string} A greeting message
 */
function greet(name) {
    return `Hello, ${name}! Welcome to TRAE IDE.`;
}

/**
 * Main function to run the example
 */
function main() {
    console.log(greet('Developer'));
    console.log('\nThis repository is ready for TRAE IDE!');
    console.log('You can now:');
    console.log('- Edit code with AI assistance');
    console.log('- Use AI coding rules from .trae/rules/');
    console.log('- Synchronize with Git through TRAE IDE');
    console.log('- Extend functionality with MCP servers');
}

// Run the example
main();
