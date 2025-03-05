document.getElementById('dosageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const formulation = document.querySelector('input[name="formulation"]:checked').value;

    // Calculate dosage based on formulation
    let dose, maxDose, dilutionInstructions = '';
    let resultText = '';

    if (formulation === 'racemic') {
        // Racemic Epinephrine: 0.05 mL/kg, max 0.5 mL, diluted to 3 mL with normal saline
        dose = 0.05 * weight;
        maxDose = 0.5;
        if (dose > maxDose) dose = maxDose;
        dilutionInstructions = `Dilute ${dose} mL of 2.25% racemic epinephrine to a total volume of 3 mL with normal saline.`;
        resultText = `Racemic Epinephrine Dosage:\n- Calculated Dose: ${dose.toFixed(2)} mL\n- Maximum Dose: 0.5 mL (used if calculated dose exceeds)\n${dilutionInstructions}\nAdminister via nebulizer over 15 minutes.`;
    } else if (formulation === 'l-epinephrine') {
        // L-Epinephrine: 0.5 mL/kg, max 5 mL, no dilution needed
        dose = 0.5 * weight;
        maxDose = 5;
        if (dose > maxDose) dose = maxDose;
        dilutionInstructions = 'No dilution with normal saline required.';
        resultText = `L-Epinephrine Dosage:\n- Calculated Dose: ${dose.toFixed(2)} mL\n- Maximum Dose: 5 mL (used if calculated dose exceeds)\n${dilutionInstructions}\nAdminister via nebulizer over 15 minutes.`;
    }

    // Display result
    document.getElementById('result').textContent = resultText;
});