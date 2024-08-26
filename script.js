function toggleDivs() {
    const divMappings = [
        { optionDiv: document.getElementById('option-div1'), selectorDiv: document.getElementById('selector-div1'), radio: document.querySelector('#selector-div1 input[type="radio"]') },
        { optionDiv: document.getElementById('option-div2'), selectorDiv: document.getElementById('selector-div2'), radio: document.querySelector('#selector-div2 input[type="radio"]') },
        { optionDiv: document.getElementById('option-div3'), selectorDiv: document.getElementById('selector-div3'), radio: document.querySelector('#selector-div3 input[type="radio"]') }
    ];

    function hideAll() {
        divMappings.forEach(mapping => {
            mapping.optionDiv.style.display = 'block';
            mapping.selectorDiv.style.display = 'none';
            if (mapping.radio) {
                mapping.radio.checked = false; // Uncheck all radios
            }
        });
    }

    function showSelector(mapping) {
        hideAll();
        mapping.optionDiv.style.display = 'none';
        mapping.selectorDiv.style.display = 'block';
        if (mapping.radio) {
            mapping.radio.checked = true; // Check the radio button in selector div
        }
    }

    divMappings.forEach(mapping => {
        if (mapping.optionDiv && mapping.selectorDiv) {
            mapping.optionDiv.addEventListener('click', () => {
                showSelector(mapping);
            });

            mapping.selectorDiv.addEventListener('click', () => {
                showSelector(mapping);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    toggleDivs();
});
