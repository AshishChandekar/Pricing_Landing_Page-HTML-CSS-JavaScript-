function togglePricing(selectedTier) {
    const tiers = ['basic', 'pro', 'premium'];

    tiers.forEach(tier => {
        const element = document.getElementById(tier);

        if (tier === selectedTier) {
            element.style.backgroundColor = 'grey';
        } else {
            element.style.backgroundColor = '#fff';
        }
    });
}
