document.getElementById('allocate-button').addEventListener('click', function() {
    const totalBudget = 27212203840000;
    const publicAdministration = parseInt(document.getElementById('public-administration').value) || 0;
    const healthcare = parseInt(document.getElementById('healthcare').value) || 0;
    const education = parseInt(document.getElementById('education').value) || 0;
    const socialProtection = parseInt(document.getElementById('social-protection').value) || 0;
    const economy = parseInt(document.getElementById('economy').value) || 0;
    const defense = parseInt(document.getElementById('defense').value) || 0;
    const infrastructure = parseInt(document.getElementById('infrastructure').value) || 0;
    const publicDebt = parseInt(document.getElementById('public-debt').value) || 0;

    const allocated = publicAdministration + healthcare + education + socialProtection + economy + defense + infrastructure + publicDebt;

    let result = '';

    if (allocated > totalBudget) {
        result = 'Você alocou mais do que o orçamento disponível!';
    } else {
        const remaining = totalBudget - allocated;
        result = `Orçamento alocado com sucesso! Orçamento restante: Kz ${remaining.toLocaleString('pt-BR')}`;
    }

    document.getElementById('result').innerText = result;
});