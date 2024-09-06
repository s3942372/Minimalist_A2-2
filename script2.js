document.addEventListener('DOMContentLoaded', () => {
    // Define the click sequences required
    const sequences = [
        ['1-1', '1-1', '2-3', '2-1', '3-2', '3-2', '4-1', '4-3'],
        ['1-2', '1-3', '2-2', '2-2', '3-3', '3-1', '4-1', '4-1'],
        ['1-3', '1-2', '2-1', '2-3', '3-1', '3-3', '4-2', '4-2']
    ];

    // Background images corresponding to each sequence
    const backgroundImages = [
        'url(/img/bg1.png)', // For the first sequence
        'url(/img/bg2.jpg)', // For the second sequence
        'url(/img/bg3.jpg)', // For the third sequence (added an example)
    ];

    let currentSequenceIndex = 0;
    let currentStep = 0;

    function handleCellClick(event) {
        const cell = event.target;
        const target = cell.getAttribute('data-target');

        if (target === sequences[currentSequenceIndex][currentStep]) {
            cell.classList.add('clicked');
            currentStep++;

            // Check if the sequence is complete
            if (currentStep >= sequences[currentSequenceIndex].length) {
                // Apply corresponding background image
                const backgroundImage = backgroundImages[currentSequenceIndex];
                document.getElementById('background-image').style.backgroundImage = backgroundImage;
                
                // Reset for next interactions
                currentStep = 0;
                document.querySelectorAll('.clicked').forEach(clickedCell => {
                    clickedCell.classList.remove('clicked');
                });

                // Move to the next sequence
                currentSequenceIndex = (currentSequenceIndex + 1) % sequences.length;
            }
        } else {
            // If the wrong cell is clicked, reset
            currentStep = 0;
            document.querySelectorAll('.clicked').forEach(clickedCell => {
                clickedCell.classList.remove('clicked');
            });
        }
    }

    // Attach event listeners to all table cells
    document.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
});
