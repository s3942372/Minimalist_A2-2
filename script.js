document.addEventListener('DOMContentLoaded', () => {
    const sequences = [
        ['1-1', '1-1', '2-3', '2-1', '3-2', '3-2', '4-1', '4-3'],
        ['1-2', '1-3', '2-2', '2-2', '3-3', '3-1', '4-1', '4-1'],
        ['1-3', '1-2', '2-1', '2-3', '3-1', '3-3', '4-2', '4-2']
    ];

    const backgroundImages = [
        'url(img/bg1.jpg)',
        'url(img/bg2.jpg)',
        'url(img/bg3.jpg)',
    ];

    let currentSequenceIndex = 0;
    let currentStep = 0;

    function handleCellClick(event) {
        const cell = event.target;
        const target = cell.getAttribute('data-target');

        if (target === sequences[currentSequenceIndex][currentStep]) {
            cell.classList.add('clicked');
            currentStep++;

            if (currentStep >= sequences[currentSequenceIndex].length) {
                // Apply corresponding background image
                const backgroundImage = backgroundImages[currentSequenceIndex];
                document.getElementById('background-image').style.backgroundImage = backgroundImage;
                
                // Reset for next interactions
                currentStep = 0;
                document.querySelectorAll('.clicked').forEach(clickedCell => {
                    clickedCell.classList.remove('clicked');
                });

                currentSequenceIndex = (currentSequenceIndex + 1) % sequences.length;
            }
        } else {
            currentStep = 0;
            document.querySelectorAll('.clicked').forEach(clickedCell => {
                clickedCell.classList.remove('clicked');
            });
        }
    }

    document.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
});
